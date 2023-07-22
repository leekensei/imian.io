import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import { MenuProps } from "./Menu.types";

const Menu = ({ path, menus }: MenuProps) => {
  return (
    <>
      <div className="items-center gap-4 hidden md:flex">
        {menus.map(({ to, label }) => (
          <Button
            variant={path === to ? "default" : "ghost"}
            key={label}
            asChild
          >
            <Link href={to}>{label}</Link>
          </Button>
        ))}
        <Button variant="ghost" size="icon">
          <Github className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};

export default Menu;
