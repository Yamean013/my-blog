import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  // Now 'posts' is defined, so .find() will work
  const { data } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) {
    return (
      <div className="text-white bg-gray-900 min-h-screen p-20">
        Post not found
      </div>
    );
  }

  console.log(data);
  return (
    <main className="text-black p-20 min-h-screen">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="mt-10">{data.content}</p>
    </main>
  );
}
