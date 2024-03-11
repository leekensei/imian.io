import { PostCard } from "@/features/post/post-card";
import React from "react";

const Page = () => {
  return (
    <main>
      <PostCard
        title={"Post Card 제목"}
        href="/"
        description="fjkdjskfljdskfjkl asdjfklsjd klfjsdkl jfklsdj fkldjsf  dsf dsf dsf sdf sdf s lorem0f sdkfjdsklfj ksdljflk sdjklfj skdljf kldsjfkl jsdklfj sdkljf klsdjf kldsjfkl jsdklf jsdklfj skdljf kldsjfkldsj k  df"
        date={new Date()}
      />
    </main>
  );
};

export default Page;
