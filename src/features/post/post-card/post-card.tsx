import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/features/ui/card";
import { PostCardProps } from "./types";
import Link from "next/link";

const Title = ({ children }: { children: React.ReactNode }) => (
  <CardHeader>
    <CardTitle>{children}</CardTitle>
  </CardHeader>
);
const Description = ({ children }: { children: React.ReactNode }) => (
  <CardContent>
    <p className="line-clamp-3">{children}</p>
  </CardContent>
);
const PostDate = ({ children }: { children: React.ReactNode }) => (
  <CardFooter>
    <CardDescription>{children}</CardDescription>
  </CardFooter>
);

const PostCard = ({ title, href, description, date }: PostCardProps) => {
  return (
    <Link href={href} className="outline-none">
      <Card className="border-transparent shadow-none hover:shadow-sm hover:border-inherit focus:shadow-sm focus:border-inherit">
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PostDate>{date.toISOString()}</PostDate>
      </Card>
    </Link>
  );
};

export default PostCard;
