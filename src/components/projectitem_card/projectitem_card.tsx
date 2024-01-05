import { FC } from "react";

const ProjectItemCard: FC = () => {
  return (
    <button className="flex flex-col overflow-hidden rounded-md bg-slate-100 shadow-xl duration-200 ease-out hover:translate-y-[-9px] hover:bg-gray-300 z-1">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="flex flex-col items-start px-[18px] py-4 text-start">
        <h2 className="text-xl font-semibold text-neutral-900">
          Title Project
        </h2>
        <p className="h-32 truncate text-wrap text-neutral-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          consequatur iste, excepturi ipsum, laborum accusantium officiis
          explicabo ducimus error quia ratione, id at molestiae porro! Voluptate
          possimus magni, quia in modi fugit corporis corrupti minima itaque
          ipsam similique voluptatum laudantium assumenda harum iusto debitis
          adipisci. Eum rem animi saepe magnam.
        </p>
      </div>
    </button>
  );
};

export default ProjectItemCard;
