import type { PostCard } from "./_components/types";

import { GridCardList, RowCardList, SquareCardList } from "./_components";

const samplePosts: PostCard[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build fast and scalable web applications with Next.js, the React framework for production. dfjdkfjdkf djfkdj fkjdkf jdkf jdkjf dkfjdk sjfdkjf kdjfk djkfj dkjf kdjfk djkf jdkfj dkjfk djfkl djfkdjfkdj kfjdk fjdk",
    date: "2023-08-01",
    slug: "getting-started-with-nextjs",
    readTime: "5 min read",
    tags: [
      "Web Development1",
      "Web Development2",
      "Web Development3",
      "Web Development4",
      "Web Development5",
    ],
    coverImage: "https://picsum.photos/300/300",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover the power of utility-first CSS with Tailwind and create beautiful, responsive designs in no time.",
    date: "2023-07-28",
    slug: "getting-started-with-nextjs",

    readTime: "7 min read",
    tags: ["CSS"],
    coverImage: "https://picsum.photos/300/300",
  },
  {
    id: 3,
    title: "The Future of AI in Web Development",
    excerpt:
      "Explore how artificial intelligence is shaping the future of web development and what it means for developers.",
    date: "2023-07-25",
    slug: "getting-started-with-nextjs",
    readTime: "10 min read",
    tags: ["AI"],
  },
];

export default function Page() {
  return (
    <section className="">
      <GridCardList posts={samplePosts} />
      <SquareCardList posts={samplePosts} />
      <RowCardList posts={samplePosts} />
    </section>
  );
}
