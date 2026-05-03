import { Post } from "@/lib/posts";
import { notFound } from "next/navigation";

// This line is likely missing!
import { posts } from "@/lib/posts";
// Note: replace "@/lib/posts" with the actual path to your posts.ts file

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Now 'posts' is defined, so .find() will work
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-white bg-gray-900 min-h-screen p-20">
        Post not found
      </div>
    );
  }

  return (
    <main className="text-black p-20 min-h-screen">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-10">{post.content}</p>
    </main>
  );
}
