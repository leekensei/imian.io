import Link from "next/link";
import { lobster } from "../../styles/fonts";

const Logo = () => {
  return (
    <Link href={"/"} className={`${lobster.className} text-3xl`}>
      imianio
    </Link>
  );
};

export default Logo;
