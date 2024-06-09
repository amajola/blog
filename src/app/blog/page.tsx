import BlogPreview from "@/components/blogPreview";
import { BODY_HEIGHT } from "@/lib/constants";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function Blog() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);
  return (
    <div className={`container py-10 px-4 md:px-6 space-y-10 overflow-scroll min-h-[${BODY_HEIGHT}]`}> 
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-start">
            Latest Blog Posts
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-start">
            Check out my latest blog posts on software engineering, writing, and
            more.
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
  );
}

