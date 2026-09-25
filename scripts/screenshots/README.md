# Marketing screenshots

Captures screenshots of Kitchen Wizz, Boop, EatLog and Chroma for the site and
the App Store. Run it on a Mac:

```bash
KW_EMAIL=… KW_PASSWORD=… EATLOG_EMAIL=… EATLOG_PASSWORD=… ./scripts/screenshots/run.sh
./scripts/screenshots/run.sh boop chroma      # just some apps
```

The images are saved to `scripts/screenshots/output/<app>/`, which is gitignored. Copy
the ones you want into `public/` to use them on the site.

## What it does

- **Kitchen Wizz, Boop, EatLog** (iOS): boots an iOS Simulator, sets a clean
  status bar (9:41, full signal, full battery) in light mode, builds and
  installs a Release build with `expo run:ios`, then [Maestro](https://maestro.mobile.dev)
  taps through the app (`flows/<app>.yaml`) and saves each screen.
- **Chroma** (web): starts the app in demo mode (mock data, no backend) and
  captures desktop (2880×1800) and phone (1320×2868) screenshots with
  Playwright (`chroma.mjs`).

| App | Screens |
| --- | --- |
| Kitchen Wizz | convert, converted recipe, recipe library, planner, groceries |
| Boop | setup, lobby, game in progress, results |
| EatLog | today, voice logging, history, insights, ask your diary |
| Chroma | feed, explore, video, filmmaker profile, pricing, plus phone feed and video |

## Before the first run

1. Install Xcode, then Maestro: `curl -fsSL https://get.maestro.mobile.dev | bash`.
2. Install each app's dependencies in its own repo (`pnpm install` or
   `npm install`), plus Playwright's browser for Chroma:
   `cd ChromaStudio && pnpm exec playwright install chromium`.
3. The iOS apps have to build locally with `expo run:ios` (the same signing
   and `GoogleService-Info.plist` setup you use for development).
4. **Accounts with real-looking content.** Screenshots show whatever the
   accounts contain, so fill them in first:
   - **Kitchen Wizz:** the App Review demo account works. Give it a few saved
     recipes, a planned week and a shopping list.
   - **EatLog:** use a dedicated demo account with a few days of meals logged.
     The flow also asks the diary one question.

Credentials are only read from environment variables. Never commit them.

## Settings

| Variable | Default | |
| --- | --- | --- |
| `DEVICE` | `iPhone 16 Pro Max` | Simulator name. `iPhone 16 Pro Max` = 6.9" (1320×2868); `iPhone 15 Pro Max` = 6.7" (1290×2796). |
| `CODE_DIR` | `~/Work/Code` | Folder holding the app repos. |
| `KITCHENWIZZ_DIR` | `$CODE_DIR/Kitchen Wizz` | |
| `BOOP_DIR` | `$CODE_DIR/Boop` | Repo root; the app is in `boop-native/`. |
| `EATLOG_DIR` | `$CODE_DIR/EatLog` | |
| `CHROMA_DIR` | `$CODE_DIR/ChromaStudio` | |
| `SKIP_BUILD` | `0` | `1` reuses the app already installed on the simulator. |
| `KW_RECIPE_URL` | a BBC Good Food pancake recipe | Recipe converted on camera. |
| `BOOP_PLAYER` | `Jamie` | Player name shown in Boop. |
| `EATLOG_QUESTION` | `How much protein have I had today?` | |
| `OUT` | `scripts/screenshots/output` | |

## If a flow stops

The flows were written from each app's source and haven't been run on a
simulator yet, so expect a tweak or two on the first run. Maestro prints
the step that failed. `maestro studio` shows what's on screen and the text
to match. Edit the step in `flows/<app>.yaml`, then re-run with `SKIP_BUILD=1`
to skip the rebuild.
