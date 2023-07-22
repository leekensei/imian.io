import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { MenuProps } from "./Menu.types";
import Logo from "./Logo";
import Link from "next/link";

const MobileMenu = ({ path, menus }: MenuProps) => {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="top" className="p-0">
          <SheetHeader>
            <SheetTitle className="p-4 flex justify-between">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="p-4 flex flex-col gap-2">
            {menus.map(({ to, label }) => (
              <Button
                variant={path === to ? "default" : "ghost"}
                key={label}
                asChild
                className="w-full"
              >
                <Link href={to}>{label}</Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
