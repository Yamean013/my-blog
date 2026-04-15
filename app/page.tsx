import Link from "next/link";
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
      <section className="flex items-start justify-center py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold">The DEV Blog</h1>
          <p className="text-sm">Get technical, Get Deep</p>
        </div>
      </section>

      <section className="flexh h-screen justify-center pt-5">
        <div className="text-center">
          <h2 className="font-bold">Latest Posts</h2>
        </div>
        <div className="grid grid-center">
          {posts.map((post) => (
            <div key={post.slug} className="mt-10">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-xl">{post.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
