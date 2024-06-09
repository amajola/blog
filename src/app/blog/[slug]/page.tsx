import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="flex flex-col items-center justify-center">
      <article
        className="prose sm:prose-sm lg:prose-lg px-3 py-6 xl:prose-xl md:py-16 w-full"
        dangerouslySetInnerHTML={{ __html: post?.body.html }}
      />
    </div>
  );
}
