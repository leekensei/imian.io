import { CalendarDays } from "lucide-react";
import Link from "next/link";

import type { PostCard } from "../types";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";



export const SquareCard = (props: PostCard) => (
  <Card key={props.id} className="overflow-hidden">
    <Link href={`/blog/${props.slug}`} className="block aspect-square relative">
      <img
        src={props.coverImage}
        alt={props.title}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
        <span className="text-white text-lg font-semibold px-4 text-center">
          Read More
        </span>
      </div>
    </Link>
    <CardHeader>
      <h2 className="text-xl font-bold line-clamp-2 hover:underline">
        <Link href={`/blog/${props.slug}`}>{props.title}</Link>
      </h2>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground text-sm line-clamp-3">
        {props.excerpt}
      </p>
    </CardContent>
    <CardFooter className="flex items-center justify-between">
      <div className="flex items-center text-muted-foreground text-sm">
        <CalendarDays className="w-4 h-4 mr-1" />
        <time dateTime={props.date}>
          {new Date(props.date).toLocaleDateString()}
        </time>
      </div>
    </CardFooter>
  </Card>
);
