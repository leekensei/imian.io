import React, { ReactNode } from "react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle-button";
import { cn } from "@/features/utils";
import { Button } from "@/features/ui/button";
import { Github, Search } from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const MenuLink = ({
  href,
  contents,
}: {
  href: string;
  contents: ReactNode;
}) => (
  <Button variant={"ghost"} asChild>
    <Link href={href} className="text-lg font-semibold capitalize">
      {contents}
    </Link>
  </Button>
);

const Menu = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-4 flex-col sm:flex-row", className)}>
      <MenuLink href="/" contents="post" />
      <MenuLink href="/" contents="article" />
    </div>
  );
};

const GitHubLink = () => (
  <Button size="icon" variant={"ghost"} asChild>
    <Link href="https://github.com/leekensei">
      <Github className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
    </Link>
  </Button>
);
const SearchButton = () => (
  <Button size="icon" variant={"ghost"} disabled>
    <Search className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
  </Button>
);
const SideButtons = () => (
  <div className="justify-center buttons flex gap-2">
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

      <div className="hidden sm:flex gap-8">
        <Menu />
        <SideButtons />
      </div>
      <div className="block sm:hidden">
        <MobileMenu>
          <div className="p-2">
            <SideButtons />
            <Menu className="mt-[20px]" />
          </div>
        </MobileMenu>
      </div>
    </header>
  );
};

export default Header;
