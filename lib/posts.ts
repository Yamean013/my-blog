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
    url: "https://unsplash.com/photos/lines-of-html-codes-4hbJ-eymZ1o",
  },
  {
    slug: "building-apps",
    title: "Building Apps",
    date: "2026-04-14",
    content: "A guide on building real world applications",
    url: "https://unsplash.com/photos/a-laptop-computer-with-a-bunch-of-different-screens-on-top-of-it-XV2kGdTo9II",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
