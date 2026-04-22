export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  url: string;
};

export const posts: Post[] = [
  {
    slug: "Hello-World",
    title: "Hello World",
    date: "2026-04-14",
    content: "This is my very first blog post. Welcome!",
    url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "building-apps",
    title: "Building Apps",
    date: "2026-04-14",
    content: "A guide on building real world applications",
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
