import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://be-blog-web.vercel.app',
  integrations: [tailwind()],
});
