export type ContentType = 'blog' | 'guide';

export interface BlogPost {
  slug: string;
  type: 'blog';
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  featured: boolean;
}

export interface Guide {
  slug: string;
  type: 'guide';
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  lastUpdated: string;
  content: {
    intro: string;
    prerequisites?: string[];
    sections: {
      heading: string;
      content: string;
      steps?: string[];
    }[];
    nextSteps?: string[];
    conclusion: string;
  };
  featured: boolean;
}

export type Content = BlogPost | Guide;
