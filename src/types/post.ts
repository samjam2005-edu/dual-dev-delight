export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  excerpt: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PostFormData {
  title: string;
  author: string;
  content: string;
  tags: string;
}