import { getMDXFile, getMDXFiles } from "../../_helpers";

export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const post = (await params).post;
  const { MDX: Post } = await getMDXFile(post);

  return <Post />;
}

export async function generateStaticParams() {
  const posts = await getMDXFiles();
  return posts.map((post) => ({
    post: post.slug,
  }));
}

export const dynamicParams = false;
