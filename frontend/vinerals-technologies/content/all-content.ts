import { Content, BlogPost, Guide } from '@/types/content';
import { blogPosts } from './blog-posts';
import { guides } from './guides';

export const allContent: Content[] = [...blogPosts, ...guides];

export function getContentBySlug(slug: string): Content | undefined {
  return allContent.find(content => content.slug === slug);
}

export function getAllContentSlugs(): string[] {
  return allContent.map(content => content.slug);
}
