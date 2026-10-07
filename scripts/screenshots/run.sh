#!/usr/bin/env bash
# Capture marketing screenshots of Kind Enough Studio's apps.
#
#   ./run.sh                 # all apps
#   ./run.sh kitchenwizz boop eatlog chroma
#
# iOS apps are built, installed on an iOS Simulator and driven with Maestro.
# Chroma is a web app and is captured with Playwright in demo mode.
# See README.md for prerequisites and settings.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
OUT="${OUT:-$HERE/output}"

DEVICE="${DEVICE:-iPhone 16 Pro Max}"
CODE_DIR="${CODE_DIR:-$HOME/Work/Code}"
KITCHENWIZZ_DIR="${KITCHENWIZZ_DIR:-$CODE_DIR/Kitchen Wizz}"
BOOP_DIR="${BOOP_DIR:-$CODE_DIR/Boop}"
EATLOG_DIR="${EATLOG_DIR:-$CODE_DIR/EatLog}"
CHROMA_DIR="${CHROMA_DIR:-$CODE_DIR/ChromaStudio}"
SKIP_BUILD="${SKIP_BUILD:-0}"

log() { printf '\n\033[1m==> %s\033[0m\n' "$*"; }
die() { printf '\033[31merror:\033[0m %s\n' "$*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "$1 not found. $2"; }
need_dir() { [ -d "$1" ] || die "$2 not found at '$1'. Set $3 to its path."; }
need_env() { [ -n "${!1:-}" ] || die "$1 is not set. $2"; }

UDID=""

sim_udid() {
  xcrun simctl list devices available \
    | grep -F "    $DEVICE (" | head -1 \
    | sed -E 's/.*\(([0-9A-F-]{36})\).*/\1/' || true
}

boot_sim() {
  [ -n "$UDID" ] && return
  need xcrun "Install Xcode and its command line tools."
  UDID="$(sim_udid)"
  [ -n "$UDID" ] || die "No available simulator named '$DEVICE'. Create one in Xcode (Window > Devices and Simulators) or set DEVICE."
  log "Booting $DEVICE ($UDID)"
  xcrun simctl boot "$UDID" 2>/dev/null || true
  xcrun simctl bootstatus "$UDID" -b >/dev/null
  open -a Simulator --args -CurrentDeviceUDID "$UDID"
  xcrun simctl ui "$UDID" appearance light
  # Apple-style marketing status bar: 9:41, full signal, full battery.
  xcrun simctl status_bar "$UDID" override \
    --time "9:41" --dataNetwork wifi --wifiMode active --wifiBars 3 \
    --cellularMode active --cellularBars 4 \
    --batteryState charged --batteryLevel 100
}

build_install() { # <project dir>
  if [ "$SKIP_BUILD" = "1" ]; then
    log "Skipping build (SKIP_BUILD=1); using the app already on the simulator"
    return
  fi
  [ -d "$1/node_modules" ] || die "Dependencies aren't installed in '$1'. Run its package manager's install first."
  log "Building and installing a Release build from $1"
  (cd "$1" && npx expo run:ios --configuration Release --device "$UDID" --no-bundler)
}

run_flow() { # <app> [maestro -e args...]
  local app="$1"; shift
  need maestro "Install it with: curl -fsSL https://get.maestro.mobile.dev | bash"
  mkdir -p "$OUT/$app"
  log "Capturing $app screenshots into $OUT/$app"
  # takeScreenshot writes into the working directory.
  (cd "$OUT/$app" && maestro --device "$UDID" test "$@" "$HERE/flows/$app.yaml")
}

shoot_kitchenwizz() {
  need_env KW_EMAIL "Use the Kitchen Wizz demo account (see APP_STORE_CONNECT_METADATA.md in that repo)."
  need_env KW_PASSWORD "Use the Kitchen Wizz demo account's password."
  need_dir "$KITCHENWIZZ_DIR" "Kitchen Wizz repo" KITCHENWIZZ_DIR
  boot_sim
  build_install "$KITCHENWIZZ_DIR"
  run_flow kitchenwizz \
    -e KW_EMAIL="$KW_EMAIL" -e KW_PASSWORD="$KW_PASSWORD" \
    -e KW_RECIPE_URL="${KW_RECIPE_URL:-https://www.bbcgoodfood.com/recipes/easy-pancakes}"
}

shoot_boop() {
  need_dir "$BOOP_DIR/boop-native" "Boop repo (boop-native)" BOOP_DIR
  boot_sim
  build_install "$BOOP_DIR/boop-native"
  run_flow boop -e BOOP_PLAYER="${BOOP_PLAYER:-Jamie}"
}

shoot_eatlog() {
  need_env EATLOG_EMAIL "Use an EatLog account that already has a few days of meals logged."
  need_env EATLOG_PASSWORD "Use that EatLog account's password."
  need_dir "$EATLOG_DIR" "EatLog repo" EATLOG_DIR
  boot_sim
  build_install "$EATLOG_DIR"
  run_flow eatlog \
    -e EATLOG_EMAIL="$EATLOG_EMAIL" -e EATLOG_PASSWORD="$EATLOG_PASSWORD" \
    -e EATLOG_QUESTION="${EATLOG_QUESTION:-How much protein have I had today?}"
}

shoot_chroma() {
  need node "Install Node.js."
  need_dir "$CHROMA_DIR/artifacts/chroma" "ChromaStudio repo (artifacts/chroma)" CHROMA_DIR
  [ -d "$CHROMA_DIR/node_modules" ] || die "Dependencies aren't installed in '$CHROMA_DIR'. Run 'pnpm install' there first."
  log "Capturing chroma screenshots into $OUT/chroma"
  CHROMA_DIR="$CHROMA_DIR" OUT="$OUT/chroma" node "$HERE/chroma.mjs"
}

apps=("$@")
[ ${#apps[@]} -eq 0 ] && apps=(kitchenwizz boop eatlog chroma)
for app in "${apps[@]}"; do
  case "$app" in
    kitchenwizz|boop|eatlog|chroma) "shoot_$app" ;;
    *) die "Unknown app '$app'. Choose from: kitchenwizz boop eatlog chroma" ;;
  esac
done

[ -n "$UDID" ] && xcrun simctl status_bar "$UDID" clear
log "Done. Screenshots are in $OUT"
