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
      <section className="flex items-start justify-center pt-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold">The DEV Blog</h1>
          <p className="text-sm">Get technical, Get Deep</p>
        </div>
      </section>

      <section className="flex h-screen justify-center py-20">
        <div className="text-center">
          <p>Latest Blogs</p>
        </div>
      </section>
    </main>
  );
}
