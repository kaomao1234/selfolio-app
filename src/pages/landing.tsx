import { FlutterIcon } from "@/assets/icon";
import { ProjectItemCard } from "@/components";
import { LandingViewModel } from "@/viewmodels";
import { FaArrowDown, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const viewmodel = new LandingViewModel();
export default function Landing() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50">
      <div
        id="navbar"
        className="fixed flex w-full flex-row items-center justify-center bg-neutral-50 px-4 py-[27px] md:h-[100px] md:px-16"
      >
        <div className="group mr-auto flex flex-col" tabIndex={0}>
          <button className="h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-slate-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent">
            Home
          </button>
          <div
            className="ml-[50%] h-[3px]
                w-0
                bg-gradient-to-r from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
          ></div>
        </div>
        <div className="group mr-8 flex flex-col lg:mr-[107px]" tabIndex={0}>
          <button className="group h-fit bg-gradient-to-r from-pink-700 bg-clip-text px-2 text-base font-medium text-neutral-800 duration-200 ease-out hover:to-indigo-700 hover:text-transparent group-focus-within:to-indigo-700 group-focus-within:text-transparent">
            Project
          </button>
          <div
            className="ml-[50%] h-[3px]
                w-0
                bg-gradient-to-r 
                from-pink-700 duration-200 ease-out group-focus-within:ml-0 group-focus-within:w-full group-focus-within:to-indigo-700"
          ></div>
        </div>
        <button
          className="btn w-28 items-center justify-center rounded-md border-none bg-gradient-to-r from-pink-700 to-indigo-700 px-5 py-3 shadow-lg duration-200 ease-out hover:shadow-indigo-700/50"
          tabIndex={0}
        >
          <div className="text-center text-base text-white">Contract</div>
        </button>
      </div>
      <div
        id="body"
        className="mt-[102px] flex flex-col md:ml-[60px] md:mr-[40px]"
      >
        <div className="flex flex-col">
          <div className="mx-[42.3px] mt-[29px] flex flex-col items-center md:flex-row-reverse">
            <div className="mx-14 flex">
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1703673304~exp=1703673904~hmac=58ea8c7089d2e6da811da10a3657b4105b25a24316df5ad52e93b644436990f5"
                alt=""
                className="size-full rounded-full"
                width={100}
                height={100}
              ></img>
            </div>
            <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-start">
              <label className="mb-[12.5px] mt-[63.27px] text-base font-normal text-neutral-900 md:w-full">
                DEVELOPER
              </label>
              <p className="bg-gradient-to-r from-pink-700 to-indigo-700 bg-clip-text text-4xl font-semibold text-transparent">
                Erica Font
              </p>
              <label className="my-4 text-center text-base font-normal text-neutral-800 md:text-left">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt.
              </label>
              <button
                className="btn w-28 items-center justify-center rounded-md border-none bg-gradient-to-r from-pink-700 to-indigo-700 px-5 py-3 text-white shadow-lg duration-200 ease-out hover:shadow-indigo-700/50"
                tabIndex={0}
              >
                Resume
              </button>
            </div>
          </div>
          <div className="mt-4 hidden h-10 w-full items-center justify-center md:mt-[60px] md:flex">
            <FaArrowDown className="size-7 text-indigo-700" />
          </div>
        </div>
        <div className="mt-[72px] flex flex-col px-[22px]">
          <label className="mb-5 text-2xl font-semibold text-neutral-900">
            About me
          </label>
          <div className="flex flex-row gap-[17px]">
            <div className="mt-[10px] h-[calc(100vh*0.2)] w-[40px] rounded-sm bg-gradient-to-b from-pink-700 to-indigo-700" />
            <label className="text-lg font-normal text-neutral-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
              accusamus eaque iste dolor tempore rerum temporibus at esse
              commodi corporis dolores necessitatibus assumenda excepturi
              tempora accusantium enim dolorem ipsam possimus eum alias
              quibusdam nesciunt, consequatur atque. Sed, dolorem tempore ipsam
              nam facilis voluptates aliquid omnis rem accusantium, a at? Nobis,
              nam at sed natus asperiores quos nostrum, earum labore magni
              aliquam cumque unde officiis ex. Ducimus, fugiat ea consectetur
              suscipit doloremque hic recusandae adipisci nesciunt temporibus id
              dolor molestias aliquid beatae iusto veritatis debitis sunt
              similique reprehenderit! Nisi totam nam accusantium doloribus
              aspernatur cum. Eius mollitia iure accusamus animi. Dolorem.
            </label>
          </div>
        </div>
        <div className="mx-[25.2px] mt-[72px] flex flex-col items-center">
          <div className="mb-8 w-full content-start text-2xl font-semibold text-neutral-900">
            Projects
          </div>
          <div className="grid flex-wrap justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            <ProjectItemCard />
            <ProjectItemCard />
            <ProjectItemCard />
          </div>
          <button className="btn mx-[22.4px] mt-12 flex h-14 w-[305px] items-center justify-center rounded-md border-none bg-gradient-to-r from-pink-700 to-indigo-700 px-5 py-3 text-white shadow-lg hover:shadow-indigo-700/50">
            SEE ALL PROJECTS
          </button>
        </div>
        <div className="mx-[27px] mt-[105.05px]">
          <label className="text-2xl font-semibold text-neutral-900">
            Skills
          </label>
          <div className="mt-[46.4px] grid grow grid-cols-3 gap-x-12 gap-y-20 md:grid-cols-5">
            {viewmodel.skills.map((val, index) => (
              <div key={index} className="flex w-full flex-col items-center">
                {val.icon}
                <label className="text-xs uppercase text-neutral-800">
                  {val.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center px-10 py-[90px]">
        <div className="flex w-full flex-row justify-center gap-10 pb-9">
          <button>
            <SiGmail className="size-10 text-red-400" />
          </button>
          <button>
            <FaGithub className="size-10 text-black" />
          </button>
        </div>
        <label className="text-lg text-black">FrontEnd</label>
      </footer>
    </div>
  );
}
