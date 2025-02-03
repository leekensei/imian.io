import { getMDXFile, getMDXFiles } from "../../_helpers";

export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const post = (await params).post;
  const { MDX: Post } = await getMDXFile(post);

  return (
    <article
      className="prose prose-neutral dark:prose-invert 
      max-w-[95%] sm:max-w-[600px] md:max-w-[672px] lg:max-w-[728px] 
      mx-auto px-4 md:px-6 py-6 md:py-8
      prose-h1:text-3xl md:prose-h1:text-4xl
      prose-h2:text-2xl md:prose-h2:text-3xl
      prose-h3:text-xl md:prose-h3:text-2xl
      prose-p:text-sm md:prose-p:text-base
      prose-pre:text-sm md:prose-pre:text-base
      prose-code:text-sm md:prose-code:text-base
      prose-li:text-sm md:prose-li:text-base
      prose-blockquote:text-sm md:prose-blockquote:text-base
      prose-table:text-sm md:prose-table:text-base"
    >
      <Post />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getMDXFiles();
  return posts.map((post) => ({
    post: post.slug,
  }));
}

export const dynamicParams = false;
