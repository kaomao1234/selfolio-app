import { ProjectItemCard } from "@/components";
import { useAppSelector } from "@/hook";
import { LandingViewModel } from "@/viewmodels";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
const viewmodel = new LandingViewModel();
export default function Landing() {
  const selector = useAppSelector((state) => state.navBarManagement);
  const ref = useRef<HTMLDivElement>(null);
  const onScrollClick = () => {
    const viewportWidth = window.innerWidth;
    var option: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "center",
    };
    if (viewportWidth < 768) {
      option = { behavior: "smooth", block: "nearest" };
    }
    ref.current?.scrollIntoView(option);
  };
  return (
    <div className="px-5 md:px-20 lg:px-[190px] xl:px-[250px] w-full">
      <div id="body" className="flex flex-col pt-[67px] md:pt-[77px]">
        <div className="flex flex-col">
          <div className="mt-[29px] flex flex-col items-center justify-center sm:mx-[42.3px] md:mx-0 md:flex-row-reverse">
            <div className="flex h-full w-ful sm:px-20 lg:px-14">
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1703673304~exp=1703673904~hmac=58ea8c7089d2e6da811da10a3657b4105b25a24316df5ad52e93b644436990f5"
                alt=""
                className="size-full rounded-full"
                // width={100}
                // height={100}
              ></img>
            </div>
            <div className="flex flex-col flex-wrap items-center md:flex-row md:justify-start">
              <label className="mb-[12.5px] mt-[63.27px] text-base font-normal text-neutral-900 md:w-full">
                DEVELOPER
              </label>
              <p className="bg-gradient-to-r from-pink-700 to-indigo-700 bg-clip-text text-[55px] font-semibold text-transparent">
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
        </div>
        <div className="mt-[40px] flex flex-col px-[22px] md:mt-[200px]">
          <label className="mb-5 text-2xl font-semibold text-neutral-900">
            About me
          </label>
          <div className="flex flex-row gap-[17px]">
            <div className="mb-[10px] h-[calc(100vh*0.2)] w-[20px] rounded-md bg-gradient-to-b from-pink-700 to-indigo-700" />
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
        <div
          className="mx-[25.2px] mt-[72px] flex flex-col items-center md:mt-[140px]"
          ref={ref}
        >
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
          <div className="mt-[46.4px] flex flex-row flex-wrap justify-center md:gap-8">
            {viewmodel.skills.map((val, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                {val.icon}
                <label className="mt-5 text-xs uppercase text-neutral-800">
                  {val.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
