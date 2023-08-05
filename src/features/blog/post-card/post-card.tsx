"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const PostCard = () => {
  return (
    <>
      <Card>
        <div className="relative w-full h-52 sm:h-48 rounded-t-lg overflow-hidden">
          <Image src={"https://picsum.photos/200"} alt="e" fill />
        </div>
        <div>
          <CardHeader>
            <CardTitle className="text-ellipsis overflow-hidden whitespace-nowrap">
              Card Title kfdjkdjf difjd ijfid jfkj idij fijdijf id
            </CardTitle>
            <CardDescription>2021.01.01</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default PostCard;
