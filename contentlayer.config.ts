// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentDirPath: "posts",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post],
  mdx: { remarkPlugins: [remarkGfm] },
});
