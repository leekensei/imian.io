import type { PostCard } from "../types";

import { SquareCard } from "../card";

export default function SquareCardList({ posts }: { posts: PostCard[] }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post) => (
          <SquareCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
