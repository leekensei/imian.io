import { Lobster } from "next/font/google";
import localFont from "next/font/local";

export const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Light.woff2",
      weight: "100",
    },
    {
      path: "./Pretendard-Thin.woff2",
      weight: "300",
    },
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "./Pretendard-Black.woff2",
      weight: "900",
    },
  ],
});
