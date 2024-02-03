import React, { ReactNode } from "react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle-button";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Github, Search } from "lucide-react";
import Link from "next/link";

const MenuLink = ({
  href,
  contents,
}: {
  href: string;
  contents: ReactNode;
}) => (
  <Button variant={"link"} asChild>
    <Link href={href} className="text-lg font-semibold capitalize">
      {contents}
    </Link>
  </Button>
);

const GitHubLink = () => (
  <Button size="icon" variant={"ghost"} asChild>
    <Link href="/">
      <Github className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
    </Link>
  </Button>
);
const SearchButton = () => (
  <Button size="icon" variant={"ghost"} disabled>
    <Search className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
  </Button>
);

const Menu = () => {
  return (
    <div className="menu flex gap-4">
      <MenuLink href="/" contents="article" />
      <MenuLink href="/" contents="article" />
      <MenuLink href="/" contents="article" />
    </div>
  );
};
const SideButtons = () => (
  <div className="buttons flex gap-2">
    <GitHubLink />
    <ModeToggle />
    <SearchButton />
  </div>
);

const Header = () => {
  const styles = cn(
    "p-2 px-6",
    "flex justify-between items-center",
    "border-b-[1px] border-secondary",
    "fixed top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
  );

  return (
    <header className={styles}>
      <Logo />

      <div className="flex gap-8">
        <Menu />
        <SideButtons />
      </div>
    </header>
  );
};

export default Header;
