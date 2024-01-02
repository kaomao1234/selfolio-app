import { Footer, Nav } from "@/components";
import { useAppSelector } from "@/hook";

export default function Project() {
  const selector = useAppSelector((state) => state.navBarManagement);
  return (
    <div className="flex flex-col pt-[67px] md:ml-[60px] md:mr-[40px] md:pt-[77px]"></div>
  );
}
