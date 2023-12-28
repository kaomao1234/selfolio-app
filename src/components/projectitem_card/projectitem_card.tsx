import { FC } from "react"

interface props {
    title: string;
    imageUrl:string;
    detail: string;
    shortcuts:string;
};
const ProjectItemCard: FC = () => {
    return <div className="flex flex-col overflow-hidden rounded-md bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="flex flex-col bg-violet-50 px-[18px] py-4">
            <h2 className="font-semibold text-neutral-900 text-xl">Title Project</h2>
            <p className="text-neutral-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur iste, excepturi ipsum, laborum accusantium officiis explicabo ducimus error quia ratione, id at molestiae porro! Voluptate possimus magni, quia in modi fugit corporis corrupti minima itaque ipsam similique voluptatum laudantium assumenda harum iusto debitis adipisci. Eum rem animi saepe magnam.</p>
            <div className="card-actions justify-end">
                <button className="bg-indigo-700 rounded-md justify-center items-center btn border-none hover:bg-indigo-700 text-white capitalize">link</button>
            </div>
        </div>
    </div>
}

export default ProjectItemCard;