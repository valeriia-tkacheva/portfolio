# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## GitHub Pages

The site is published by `.github/workflows/deploy.yml` after a push to `main`.

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push the workflow and application changes to `main`.
4. Wait for **Deploy to GitHub Pages** to finish in the **Actions** tab.

The site URL is <https://valeriia-tkacheva.github.io/portfolio/>.
GitHub Pages requires a public repository on the GitHub Free plan.
No personal access token or additional repository secrets are needed.

The workflow installs dependencies with `npm ci`, runs ESLint, and generates the
site with `npm run generate`. It publishes `.output/public` using the base path
reported by GitHub Pages. Images and PDF links use the same base path.

To check the GitHub Pages build locally:

```bash
NUXT_APP_BASE_URL=/portfolio/ NITRO_PRESET=github_pages npm run generate
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
