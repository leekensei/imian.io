"use client";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const menus = [
  {
    to: "/blog",
    label: "blog",
  },
  {
    to: "/blog1",
    label: "blog1",
  },
  {
    to: "/blog2",
    label: "blog2",
  },
  {
    to: "/blog3",
    label: "blog3",
  },
];

const Navigation = () => {
  const path = usePathname();

  return (
    <nav className="max-w-screen-2xl m-auto">
      <div className="flex justify-between p-4">
        <Logo />
        <Menu path={path} menus={menus} />
        <MobileMenu path={path} menus={menus} />
      </div>
    </nav>
  );
};

export default Navigation;
