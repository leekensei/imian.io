import { PostCard } from "@/features/post/post-card";
import React from "react";

const Page = () => {
  return (
    <main>
      <PostCard
        title={"Post Card 제목"}
        description="fjkdjskfljdskfjkl asdjfklsjd klfjsdkl jfklsdj fkldjsf  dsf dsf dsf sdf sdf sdf"
        date={new Date()}
      />
    </main>
  );
};

export default Page;
