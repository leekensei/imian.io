"use client";

import * as React from "react";
import Link from "next/link";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { SideDialogContent } from "@/components/ui/side-dialog";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "../mode-toggle";

const Logo = ({ domain }: { domain: string }) => (
  <Link href={`/${domain}`} className="flex items-baseline space-x-2">
    <h1 className="font-lobster text-2xl md:text-3xl lg:text-4xl">imianio</h1>
    <span className="font-bold text-xs md:text-sm lg:text-base uppercase">
      {domain}
    </span>
  </Link>
);

const GithubLink = () => (
  <Link href="https://github.com/leekensei" target="_blank" tabIndex={-1}>
    <Button variant="outline" size="icon">
      <GitHubLogoIcon />
    </Button>
  </Link>
);

const MobileNav = ({
  items,
}: {
  items: {
    disabled: boolean;
    href: string;
    title: string;
  }[];
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden">
        <HamburgerMenuIcon />
      </Button>
    </DialogTrigger>
    <SideDialogContent>
      <DialogHeader>
        <DialogTitle>
          <Logo domain={"blog"} />
        </DialogTitle>
      </DialogHeader>

      <div className="flex flex-col h-[calc(100%-48px)] justify-between">
        <div className="pt-4 pr-6 flex flex-col">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              tabIndex={-1}
            >
              <Button variant={"ghost"} className="w-full justify-start">
                {item.title}
              </Button>
            </Link>
          ))}
        </div>

        <div className="flex gap-2 pt-6">
          <GithubLink />
          <ModeToggle />
        </div>
      </div>
    </SideDialogContent>
  </Dialog>
);

const items = [
  { disabled: false, href: "/post", title: "post" },
  { disabled: false, href: "/book", title: "book" },
  { disabled: false, href: "/log", title: "log" },
];

export function MainNav() {
  return (
    <div className="container mx-auto flex h-20 items-center justify-between py-6">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <Logo domain="blog" />
          <nav className="hidden gap-2 md:flex">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                tabIndex={-1}
              >
                <Button variant={"ghost"}> {item.title}</Button>
              </Link>
            ))}

            <GithubLink />
            <ModeToggle />
          </nav>

          <MobileNav items={items} />
        </div>
      </div>
    </div>
  );
}
