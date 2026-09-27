# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## GitHub Pages

The site is published by `.github/workflows/deploy.yml` after a push to `main`.

1. To publish at the domain root, name the repository
   `valeriia-tkacheva.github.io`. For the existing `portfolio` repository, open
   **Settings → General → Repository name** and rename it.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push the workflow and application changes to `main`, or select **Actions →
   Deploy to GitHub Pages → Run workflow** after renaming the repository.
5. Wait for **Deploy to GitHub Pages** to finish in the **Actions** tab.

After the rename and deployment, the site URL is
<https://valeriia-tkacheva.github.io/>.
GitHub Pages requires a public repository on the GitHub Free plan.
No personal access token or additional repository secrets are needed.

Update the local remote after renaming the repository:

```bash
git remote set-url origin https://github.com/valeriia-tkacheva/valeriia-tkacheva.github.io.git
```

The workflow installs dependencies with `npm ci`, runs ESLint, and generates the
site with `npm run generate`. It publishes `.output/public` using the base path
reported by GitHub Pages, which becomes `/` for the user site. Images and PDF
links use the same base path; no workflow changes are needed for the rename.

To check the GitHub Pages build locally:

```bash
NUXT_APP_BASE_URL=/ NITRO_PRESET=github_pages npm run generate
```

### Public asset URLs

`UiImage` and `UiButton` resolve public paths automatically:

```vue
<UiImage src="/projects/kinopoisk/preview-1.jpg" />
```

For native elements, use the `$public` helper provided by
`app/plugins/public-url.ts`. It is available in every template without imports:

```vue
<img :src="$public('/images/stickers/lerochka.png')" alt="Лера" />
```

In scripts, access it with `const { $public } = useNuxtApp()`.
The helper adds the deployment base path to root-relative URLs and preserves
external URLs, fragment links, and relative paths. At the domain root, paths
remain unchanged.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
