import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase.from("posts").select("*");
  console.log(posts);
  return (
    <main>
      <section className="flex flex-col justify-center py-20">
        <div className="text-center mx-auto">
          <h1 className="text-4xl font-bold hover:text-cyan-700">
            The DEV Blog
          </h1>
          <p className="text-sm">Get technical, Get Deep</p>
          <Button
            asChild
            variant="outline"
            className="border-gray-700 hover:text-lg transition-all mt-5"
          >
            <Link href={"/admin/dashboard/"}>Dashboard</Link>
          </Button>
        </div>
      </section>

      <section className="h-screen justify-center pt-5">
        <div className="text-center">
          <h2 className="font-bold">Latest Posts</h2>
        </div>
        <div className="flex flex-col items-center w-full px-4">
          {posts?.map((post) => (
            <div
              key={post.slug}
              className="flex gap-6 items-start mt-10 w-full max-w-2xl text-left"
            >
              <div className="shrink-0">
                <Image
                  src={post!.imageUrl || "/placeholder.jpg"}
                  alt={post.title}
                  width={160}
                  height={120}
                  className="rounded-lg object-cover"
                />
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold">{post.title}</h2>
              </Link>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 hover:text-lg"
                >
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
