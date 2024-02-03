import Link from "next/link";
import React from "react";
import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  return (
    <Link
      href="/"
      className={cn(
        lobster.className,
        "text-4xl text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "p-1"
      )}
    >
      imianio
    </Link>
  );
};

export default Logo;
