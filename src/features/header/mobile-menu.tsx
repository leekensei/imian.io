import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/features/ui/drawer";
import { Menu as Hamburger, X } from "lucide-react";
import Logo from "./logo";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const MobileMenu = ({ children }: Props) => (
  <Drawer direction="top">
    <DrawerTrigger className="flex items-center">
      <Hamburger />
    </DrawerTrigger>

    <DrawerContent className="sm:hidden h-full rounded-t-none rounded-b-[10px]">
      <DrawerHeader className="p-2 px-6 flex justify-between items-center border-b-[1px] border-secondary">
        <Logo />
        <DrawerClose>
          <X />
        </DrawerClose>
      </DrawerHeader>
      {children}
    </DrawerContent>
  </Drawer>
);
