# A Room of My Own — Render release

Prebuilt v24 release of the interactive hand-drawn Portfolio room.

Deploy as a **Static Site**:

- Branch: `main`
- Build command: `node verify-release.cjs`
- Publish directory: `site`
- Automatic deploys: Off

The build command verifies the release against its SHA-256 manifest. No backend, database or paid compute is required. Font and asset license notices are included under `site/assets`.
