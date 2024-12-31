import { RowCard } from "../card";

export default function RowCardList({ posts }: { posts: PostCard[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <RowCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
