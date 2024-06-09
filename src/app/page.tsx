/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nWOeUNsS1DR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import BlogPreview from "@/components/blogPreview";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import Link from "next/link";
import React from "react";

export default async function Home() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <div className={`grid grid-rows-5 h-[90dvh]`}>
      <section className="w-full row-span-2 flex items-center">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="flex flex-col justify-start space-y-10 xl:space-y-16">
            <div className="flex flex-col justify-start space-y-4">
              <h1 className="lg:leading-tighter text-start text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                John Doe
              </h1>
              <p className="max-w-[700px] text-start text-gray-500 md:text-xl dark:text-gray-400">
                I&#39;m a software engineer and writer. I love building
                beautiful and functional web applications.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="space-x-4">
                <Link
                  href="/blog"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Read Blog
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full row-span-3 flex items-center">
        <div className="container px-4 md:px-6 space-y-10 w-full row-span-2">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-start">
                Latest Blog Posts
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-start">
                Check out my latest blog posts on software engineering, writing,
                and more.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPreview
                key={post.slug}
                slug={post.slug}
                description={post.description}
                title={post.title}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
