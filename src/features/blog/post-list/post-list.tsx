import React from "react";
import PostCard from "../post-card";

function PostList() {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {new Array(5).fill(0).map((_, idx) => (
        <PostCard key={idx} />
      ))}
    </div>
  );
}

export default PostList;
