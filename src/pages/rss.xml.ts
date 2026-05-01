import rss from '@astrojs/rss';
import { client } from '../lib/microcms';
import type { Post } from '../lib/microcms';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const { contents: posts } = await client.getList<Post>({
    endpoint: 'posts',
    queries: { orders: '-publishedAt', limit: 50 },
  });

  return rss({
    title: 'be-blog',
    description: 'デザイン・写真・絵本・映画レビューなど、気になることを気軽に書いていく場所。',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishedAt),
      description: post.description ?? '',
      link: `/posts/${post.slug}`,
    })),
  });
}
