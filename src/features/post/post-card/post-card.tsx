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

const Title = ({ children }: { children: React.ReactNode }) => (
  <CardHeader>
    <CardTitle>{children}</CardTitle>
  </CardHeader>
);
const Description = ({ children }: { children: React.ReactNode }) => (
  <CardContent>
    <p>{children}</p>
  </CardContent>
);
const PostDate = ({ children }: { children: React.ReactNode }) => (
  <CardFooter>
    <CardDescription>{children}</CardDescription>
  </CardFooter>
);

const PostCard = ({ title, description, date }: PostCardProps) => {
  return (
    <Card className="border-transparent shadow-none hover:shadow-sm hover:border-inherit">
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PostDate>{date.toISOString()}</PostDate>
    </Card>
  );
};

export default PostCard;
