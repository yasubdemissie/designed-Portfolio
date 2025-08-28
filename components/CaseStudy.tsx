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
      <div className="w-fit pl-3 fixed top-4 flex justify-around h-16 bg-brand-second">
        <BackButton />
      </div>
      <div className="w-full relative top-5 h-fit flex flex-col justify-center items-center gap-y-0 my-10">
        <Image
          src={image[0] || "/assets/image/placeholder.svg"}
          alt="Case Study"
          width={700}
          height={400}
        />
        <Image
          src={image[1] || "/assets/image/placeholder.svg"}
          alt="Case Study"
          width={700}
          height={400}
        />
      </div>
    </div>
  );
}
