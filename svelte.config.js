import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess({
    replace: [['__DATE__', new Date().toISOString()]],
  }),
  compilerOptions: {
    runes: false,
  },
};
