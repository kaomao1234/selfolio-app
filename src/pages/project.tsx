import { Footer, Nav, ProjectItemCard } from "@/components";
import { useAppSelector } from "@/hook";

export default function Project() {
  const list = Array.from({ length: 20 }, (v, k) => ProjectItemCard({}));
  return (
    <div className="flex flex-col pt-[67px] md:ml-[60px] md:mr-[40px] md:pt-[77px]">
      <div className="grid flex-wrap justify-center gap-x-8 gap-y-8 px-[50px] sm:grid-cols-2 md:grid-cols-3 mt-10">
        {list}
      </div>
    </div>
  );
}
