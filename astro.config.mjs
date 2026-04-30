import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://be-blog.vercel.app', // デプロイ後に実際のURLに更新
  integrations: [tailwind()],
});
