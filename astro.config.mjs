import { defineConfig } from 'astro/config';

// Serve from the root on `astro dev`, from the subdirectory for build/preview (GitHub Pages)
const isDev = process.argv.includes('dev');

// https://astro.build/config
export default defineConfig({
    site: 'https://frederikduchi.github.io/',
    base: isDev ? '/' : '/github-party',
});
