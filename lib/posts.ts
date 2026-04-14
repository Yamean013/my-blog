export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "Hello-World",
    title: "Hello World",
    date: "2026-04-14",
    content: "This is my very first blog post. Welcome!",
  },
  {
    slug: "building-apps",
    title: "Building Apps",
    date: "2026-04-14",
    content: "A guide on building real world applications",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
