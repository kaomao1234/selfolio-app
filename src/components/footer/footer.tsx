import { FC } from "react";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-700 to-indigo-700 px-10 py-5 w-full mt-10">
      <div className="flex w-full flex-row justify-center gap-10">
        <button>
          <SiGmail className="size-10 text-red-400" />
        </button>
        <button>
          <FaGithub className="size-10 text-black" />
        </button>
      </div>
    </footer>
  );
};
export default Footer;
