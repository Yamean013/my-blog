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
    <section className="relative bg-gray-900 text-white min-h-screen flex items-start justify-center pt-5">
      <div>
        <h1 className="text-4xl font-bold">The DEV Blog</h1>
        <p className="text-sm px-10">Get technical, Get Deep</p>
      </div>

      <section></section>
    </section>
  );
}
