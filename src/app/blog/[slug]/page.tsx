import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) notFound()
  return { title: post.title };
};

export default function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post.slug === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();
  const MDXContent = useMDXComponent(post?.body.code);

  return (
    <div className="flex flex-col items-center justify-center">
      <article className="prose sm:prose-sm lg:prose-lg px-3 py-6 xl:prose-xl md:py-16 w-full">
        <MDXContent />
      </article>
    </div>
  );
}
