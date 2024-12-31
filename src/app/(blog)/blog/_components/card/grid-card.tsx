import { CalendarDays, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const GridCard = (props: PostCard) => {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{props.excerpt}</p>
        <div className="flex gap-4 flex-wrap line-clamp-2">
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
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-muted-foreground text-sm">
          <CalendarDays className="w-4 h-4" />
          <span>{props.date}</span>
          <Clock className="w-4 h-4 ml-2" />
          <span>{props.readTime}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
