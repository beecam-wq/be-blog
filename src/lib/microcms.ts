import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export function parseTags(tags?: string[] | string): string[] {
  if (!tags) return [];
  const arr = Array.isArray(tags) ? tags : [tags];
  return arr.flatMap((t) => t.split(/\s+/)).filter(Boolean);
}

export type Post = {
  id: string;
  title: string;
  slug: string;
  postType: 'diary' | 'review' | 'photo' | 'art';
  category: ('design' | 'photo' | 'book' | 'film' | 'note')[];
  body: string;
  description?: string;
  coverImage?: { url: string };
  tags?: string[] | string;
  draft?: boolean;
  reviewScore?: number;
  director?: string;
  originalTitle?: string;
  platform?: string;
  releaseYear?: number;
  author?: string;
  publishedAt: string;
  updatedAt: string;
};
