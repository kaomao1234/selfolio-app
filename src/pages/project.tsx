import { Footer, Nav, ProjectItemCard } from "@/components";
import { useAppSelector } from "@/hook";

export default function Project() {
  const list = Array.from({ length: 20 }, (v, k) => (
    <ProjectItemCard key={k} />
  ));
  return (
    <div className="mx-10 flex flex-col items-start pt-[67px] md:mx-[187px] md:pt-[77px]">
      <div className="text-2xl font-semibold leading-relaxed tracking-wide text-neutral-900">
        Projects
      </div>
      <div className="mt-10 grid flex-wrap justify-center gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {list}
      </div>
    </div>
  );
}
