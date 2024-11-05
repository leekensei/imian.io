import { CalendarDays, Clock } from "lucide-react";
import Link from "next/link";

import type { PostCard } from "../types";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


export const RowCard = (props: PostCard) => (
  <Card
    key={props.id}
    className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow pr-6">
          <div>
            <Link href={`/blog/${props.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 line-clamp-2 hover:underline">
                {props.title}
              </h2>
            </Link>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {props.excerpt}
            </p>
          </div>
          <div className="md:mt-10">
            <div className="flex flex-wrap items-center gap-4 mb-4 line-clamp-2">
              {props.tags.slice(0, 3).map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {!!props.tags.slice(2, -1).length && (
                      <Badge variant={"secondary"}>
                        +{props.tags.slice(2, -1).length}
                      </Badge>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{props.tags.slice(2, -1).join(", ")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:mt-auto">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <CalendarDays className="w-4 h-4" />
                <span>{props.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                <span>{props.readTime}</span>
              </div>
            </div>
          </div>
        </div>
        {props.coverImage && (
          <div className="hidden md:block md:mt-0 md:flex-shrink-0">
            <div className="relative w-full overflow-hidden rounded-sm md:w-[200px] h-[150px] md:h-[200px]">
              {/* <coverImage
            src={props.image}
            alt={props.title}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 200px"
          /> */}
              <img
                src={props.coverImage}
                alt={props.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);
