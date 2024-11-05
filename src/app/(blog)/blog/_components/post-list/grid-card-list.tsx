import type { PostCard } from "../types";

import { GridCard } from "../card";

export default function GridCardList({ posts }: { posts: PostCard[] }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <GridCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
