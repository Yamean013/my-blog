import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-white">
      <div className="flex items-center justify-between text-2xl font-bold">
        <div>Logo</div>
        <div className="flex gap-15 px-4">
          <span className="cursor-pointer hover:text-3xl transition-all">
            Home
          </span>
          <span className="cursor-pointer hover:text-3xl transition-all">
            About
          </span>
          <span className="cursor-pointer hover:text-3xl transition-all">
            Contact
          </span>
        </div>
      </div>
      <section className="flex flex-col justify-center py-20">
        <div className="text-center mx-auto">
          <h1 className="text-4xl font-bold hover:text-slate-500">
            The DEV Blog
          </h1>
          <p className="text-sm">Get technical, Get Deep</p>
          <Button
            asChild
            variant="outline"
            className="border-gray-700 hover:bg-gray-800 hover:text-xl mt-5"
          >
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
        </div>
      </section>

      <section className="h-screen justify-center pt-5">
        <div className="text-center">
          <h2 className="font-bold">Latest Posts</h2>
        </div>
        <div className="flex flex-col items-center w-full px-4">
          {posts.map((post) => (
            <div key={post.slug} className="mt-10 w-full max-w-2xl text-left">
              <div className="shrink-0">
                <Image
                  src={post.url}
                  alt={post.title}
                  width={160}
                  height={120}
                  className="rounded-lg"
                ></Image>
              </div>
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-xl">{post.content}</p>

              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 hover:bg-gray-800"
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
