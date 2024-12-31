declare global {
  export interface PostCard {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    readTime: string;
    tags: string[];
    coverImage?: string;
  }
}

export {};
