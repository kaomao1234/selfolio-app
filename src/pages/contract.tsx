import { Footer, Nav } from "@/components";
import { useAppSelector } from "@/hook";

export default function Contract() {
  return (
    <div className="flex w-full flex-col items-center pt-[20px] md:pt-[77px]">
      <form
        className="flex w-full flex-col gap-4 px-[10%]
      md:px-[30%]"
      >
        <div className="flex w-full flex-col">
          <label className="text-md capitalize text-black">Name</label>
          <input
            className="h-[50px] rounded-md border-[2px] border-gray-400 bg-slate-50 px-2 text-black outline-none duration-200 ease-out hover:border-pink-700"
            placeholder="Your name"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label className="text-md capitalize text-black">Email</label>
          <input
            className=" h-[50px] rounded-md border-[2px] border-gray-400 bg-slate-50 px-2 text-black outline-none duration-200 ease-out hover:border-pink-700"
            placeholder="Your email"
            type="email"
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="text-md capitalize text-black">Message</label>
          <textarea
            className="resize-none rounded-md border-[2px] border-gray-400 bg-slate-50 p-2 text-black outline-none duration-200 ease-out hover:border-pink-700"
            wrap="hard"
            rows={5}
            cols={20}
            maxLength={250}
          ></textarea>
        </div>
        <button
          name="submit"
          className="btn mx-[10%] border-0 bg-gradient-to-r from-pink-700 to-indigo-700 text-lg text-white hover:shadow-md hover:shadow-indigo-700 sm:mx-[25%]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
