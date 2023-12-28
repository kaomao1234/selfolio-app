import { FlutterIcon } from "@/assets/icon";
import { ProjectItemCard } from "@/components";
import { LandingViewModel } from "@/viewmodels";
const viewmodel = new LandingViewModel()
export default function Landing() {
    return <div className="flex flex-col w-full min-h-screen bg-neutral-50">
        <div id="navbar" className="lg:h-[100px] fixed flex flex-row w-full items-center justify-center px-6 lg:px-0 py-[27px] bg-neutral-50">
            <div className='group flex flex-col lg:mr-[748px] mr-auto'>
                <button className="group-focus-within:text-indigo-700 ease-out duration-200 text-neutral-800 text-base font-medium h-fit px-2">
                    Home
                </button>
                <div className='ml-[50%] group-focus-within:ml-0
                group-focus-within:w-full
                group-focus-within:bg-indigo-700 h-[3px] ease-out duration-200 w-0'></div>
            </div>
            <div className='group flex flex-col lg:mr-[107px] mr-8'>
                <button className="group text-neutral-800 text-base font-medium h-fit px-2 group-focus-within:text-indigo-700 ease-out duration-200">
                    Project
                </button>
                <div className='ml-[50%] group-focus-within:ml-0
                group-focus-within:w-full
                group-focus-within:bg-indigo-700 h-[3px] ease-out duration-200 w-0'></div>
            </div>
            <button className="w-28 px-5 py-3 bg-indigo-700 rounded-md justify-center items-center btn border-none hover:bg-indigo-700">
                <label className="text-center text-cyan-100 text-base">Contact</label>
            </button>
        </div>
        <div id="body" className="flex flex-col mt-[102px]">
            <div className="flex flex-col md:flex-row-reverse mt-[29px] mx-[42.3px] items-center">
                <div className="mx-14 flex">
                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1703673304~exp=1703673904~hmac=58ea8c7089d2e6da811da10a3657b4105b25a24316df5ad52e93b644436990f5" className="rounded-full "></img>
                </div>
                <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-start">
                    <label className="text-neutral-900 text-base font-normal mt-[63.27px] mb-[12.5px] md:w-full">DEVELOPER</label>
                    <p className="text-indigo-700 text-4xl font-semibold">Erica Font</p>
                    <label className="text-center text-neutral-800 text-base font-normal my-4 md:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</label>
                    <button className="w-28 px-5 py-3 bg-indigo-700 rounded-md justify-center items-center btn border-none hover:bg-indigo-700">
                        <div className="text-center text-cyan-100 text-base">Contact</div>
                    </button>
                </div>

            </div>

            <div className="flex flex-col px-[22px] mt-[72px]">
                <label className="text-neutral-900 text-2xl font-semibold mb-5">About me</label>
                <div className="flex flex-row gap-[17px]">
                    <div className="w-[100px] h-[calc(100vh*0.2)] bg-indigo-700 rounded-sm mt-[10px]" />
                    <label className="text-neutral-800 text-lg font-normal" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem accusamus eaque iste dolor tempore rerum temporibus at esse commodi corporis dolores necessitatibus assumenda excepturi tempora accusantium enim dolorem ipsam possimus eum alias quibusdam nesciunt, consequatur atque. Sed, dolorem tempore ipsam nam facilis voluptates aliquid omnis rem accusantium, a at? Nobis, nam at sed natus asperiores quos nostrum, earum labore magni aliquam cumque unde officiis ex. Ducimus, fugiat ea consectetur suscipit doloremque hic recusandae adipisci nesciunt temporibus id dolor molestias aliquid beatae iusto veritatis debitis sunt similique reprehenderit! Nisi totam nam accusantium doloribus aspernatur cum. Eius mollitia iure accusamus animi. Dolorem.</label>
                </div>
            </div>
            <div className="mt-[72px] mx-[25.2px] flex flex-col">
                <div className="text-neutral-900 text-2xl font-semibold mb-8 ">Projects</div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 flex-wrap gap-4 justify-center">
                    <ProjectItemCard />
                    <ProjectItemCard />
                    <ProjectItemCard />
                </div>
                <button className="btn border-none h-14 px-5 bg-indigo-700 py-3 hover:bg-indigo-700 rounded-md justify-center items-center flex mx-[22.4px] mt-4">
                    <label className="text-center text-cyan-100 text-base font-medium ">SEE ALL PROJECTS</label>
                </button>
            </div>
            <div className="mt-[105.05px] mx-[27px]">
                <label className="text-neutral-900 text-2xl font-semibold">Skills</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-x-12 gap-y-20 mt-[46.4px] grow">
                    {
                        viewmodel.skills.map((val, index) => <div className="flex flex-col w-full items-center">
                            {val.icon}
                            <label className="text-neutral-800 text-xs uppercase">{val.name}</label>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}