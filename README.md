# portfolio-sveltekit

Project created with [`sv`](https://github.com/sveltejs/cli) - `npx sv create portfolio-sveltekit`

### Deployment: https://guidoq.vercel.app/

## How to run

### 1 - Installation

- make sure you have node installed
- clone repository and `cd` into it
- install dependencies with `npm install`
- (Optional) get the VSCode extensions listed in `.vscode/extensions.json` to enable full syntax support

### 2 - Start development server

- use `npm run dev` to run locally
    - (Optional) append `--` to use vite-cli flags
        - `--host` to expose local server to LAN
        - `--open` to automatically open in a browser
    - Hint: use `npm run host` as a shorthand for `npm run dev -- --host`
- open [`localhost:5173`](http://localhost:5173) in your browser

## Dependencies

Below are listed the main dependencies needed for each environment. <br/>
Note: this is not a comprehensive list, as they may have dependencies of their own.

- Iconify - https://github.com/iconify/iconify/tree/main/iconify-icon/icon
- Tailwind - https://tailwindcss.com
- TypeScript - https://www.typescriptlang.org/
- SvelteKit - https://svelte.dev/docs/kit/introduction
    - ESLint plugin - https://github.com/sveltejs/eslint-plugin-svelte
    - Prettier plugin - https://github.com/sveltejs/prettier-plugin-svelte
    - Vercel adapter - https://svelte.dev/docs/kit/adapter-vercel
    - shadcn/ui for Svelte - https://www.shadcn-svelte.com/docs
