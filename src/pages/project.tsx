import { Footer, Nav } from "@/components";

export default function Project() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50">
      <Nav />
      <div className="flex flex-col pt-[67px] md:ml-[60px] md:mr-[40px] md:pt-[77px]"></div>
      <Footer />
    </div>
  );
}
