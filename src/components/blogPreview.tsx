import Link from "next/link";

interface BlogPreviewProps {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export default function BlogPreview({
  slug,
  title,
  date,
  description,
}: BlogPreviewProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group grid h-auto items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
      prefetch={false}
    >
      <div className="text-md font-medium leading-none group-hover:underline">
        {title}
      </div>
      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
        {description}
      </div>
      <div className="text-sm text-gray-400 dark:text-gray-400">
        {new Intl.DateTimeFormat("en-GB", {
          dateStyle: "full",
          timeZone: "Australia/Sydney",
        }).format(new Date(date))}
      </div>
    </Link>
  );
}
