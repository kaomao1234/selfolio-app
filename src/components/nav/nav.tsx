import { useAppDispatch, useAppSelector } from "@/hook";
import { updateNavBarState } from "@/store/feature/navbar_management";
import { useRouter } from "next/router";
import { FC, RefObject, useEffect, useRef } from "react";

const Nav: FC = () => {
  const pageName = useAppSelector((state) => state.navBarManagement);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const selected: Record<string, RefObject<HTMLDivElement>> = {
    landing: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    contract: useRef<HTMLDivElement>(null),
  };
  useEffect(() => {
    selected[pageName].current?.focus();
  }, []);

  const onClick = (routName: string) => {
    // selected[routName].current?.focus();
    router.push(`/${routName}`);
    dispatch(updateNavBarState(routName));
  };
  return (
    <nav
      id="navbar"
      className="flex w-full flex-row items-center bg-slate-50 px-8 py-5 md:fixed md:px-16 md:py-[25px]"
    >
      <div
        className="group mr-auto flex flex-col"
        tabIndex={0}
        ref={selected.landing}
      >
        <button
          className="h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-slate-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent"
          onClick={() => onClick("landing")}
        >
          Home
        </button>
        <div
          className="ml-[50%] h-[3px]
            w-0
            bg-gradient-to-r from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
        ></div>
      </div>
      <div
        className="group mr-8 flex flex-col lg:mr-[107px]"
        tabIndex={0}
        ref={selected.project}
      >
        <button
          className="group h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-neutral-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent"
          onClick={() => onClick("project")}
        >
          Project
        </button>
        <div
          className="ml-[50%] h-[3px]
            w-0
            bg-gradient-to-r 
            from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
        ></div>
      </div>
      <div className="group flex flex-col" tabIndex={0} ref={selected.contract}>
        <button
          className="group h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-neutral-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent"
          onClick={() => onClick("contract")}
        >
          Contract
        </button>
        <div
          className="ml-[50%] h-[3px]
            w-0
            bg-gradient-to-r 
            from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
        ></div>
      </div>
    </nav>
  );
};
export default Nav;
