import { useAppDispatch, useAppSelector } from "@/hook";
import { useRouter } from "next/router";
import { FC, ReactNode, RefObject, useEffect, useRef } from "react";

const Nav = () => {
  const router = useRouter();
  const onClick = (routing: string) => {
    router.push(`/${routing}`);
  };
  return (
    <nav
      id="navbar"
      className="flex w-full flex-row items-center bg-slate-50 px-8 py-5 md:fixed md:px-16 md:py-[25px]"
    >
      <button
        className="group mr-auto flex flex-col border-none"
        tabIndex={0}
        onClick={() => onClick("landing")}
      >
        <label className="h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-slate-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent">
          Home
        </label>
        <div
          className="ml-[50%] h-[3px]
            w-0
            bg-gradient-to-r from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
        ></div>
      </button>
      <button
        className="group mr-8 flex flex-col border-none lg:mr-[107px]"
        tabIndex={0}
        onClick={() => onClick("project")}
      >
        <label className="group h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-neutral-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent">
          Project
        </label>
        <div
          className="ml-[50%] h-[3px]
            w-0
            bg-gradient-to-r 
            from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
        ></div>
      </button>
      <button
        className="group flex flex-col border-none"
        tabIndex={0}
        onClick={() => onClick("contract")}
      >
        <label className="group h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-neutral-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent">
          Contract
        </label>
        <div
          className="ml-[50%] h-[3px]
            w-0
            bg-gradient-to-r 
            from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
        ></div>
      </button>
    </nav>
  );
};
export default Nav;
