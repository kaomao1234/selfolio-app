import { Inter } from "next/font/google";
import Landing from "./landing";
import { useAppDispatch } from "@/hook";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    >
      <Landing />
    </main>
  );
}
