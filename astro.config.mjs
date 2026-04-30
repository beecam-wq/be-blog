import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://be-blog-iota.vercel.app',
  integrations: [tailwind()],
});
