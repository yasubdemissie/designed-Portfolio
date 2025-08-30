import Image from "next/image";
import { BackButton } from "./supporters/BackButton";
import { userData } from "@/data/db";

export function CaseStudy({ slug }: { slug: string }) {
  const { works } = userData[0];
  const work = works.find((work) => work.link === slug);

  if (!work) return null;
  const image = work.caseStudy;
  return (
    <div className="flex flex-col bg-brand-main m-1">
      <div className="w-fit ml-3 fixed z-10 top-4 flex justify-around h-fit bg-brand-second rounded-full">
        <BackButton />
      </div>
      <div className="w-full h-[1200px] md:h-[3000px] relative top-1 flex flex-col justify-center items-center gap-y-0 mb-10">
        <Image
          src={image[0] || "/assets/image/placeholder.svg"}
          alt="Case Study"
          fill
          className=" object-cover"
          // width={900}
          // height={400}
        />
        <Image
          src={image[1] || "/assets/image/placeholder.svg"}
          alt="Case Study"
          fill
          // width={900}
          // height={400}
        />
      </div>
    </div>
  );
}
