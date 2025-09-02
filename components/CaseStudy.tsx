import Image from "next/image";
import { BackButton } from "./supporters/BackButton";
import { userData } from "@/data/db";
import { ContactButton } from "./supporters/contactButton";

export function CaseStudy({ slug }: { slug: string }) {
  const { works } = userData[0];
  const work = works.find((work) => work.link === slug);

  if (!work) return null;
  const image = work.caseStudy;
  return (
    <div className="flex flex-col bg-brand-main p-1">
      <div className="w-fit ml-3 fixed z-10 top-4 flex justify-around h-fit bg-brand-second rounded-full">
        <BackButton />
      </div>
      <div className="flex flex-col justify-center items-center h-fit space-y-0 mb-10">
        <div className="relative w-fit h-fit">
          <Image
            src={image[0] || "/assets/image/placeholder.svg"}
            alt="Case Study"
            // fill
            // className="object-contain"
            height={1200}
            width={1200}
          />
        </div>
        <div className="relative w-fit h-fit">
          <Image
            src={image[1] || "/assets/image/placeholder.svg"}
            alt="Case Study"
            height={1200}
            width={1200}
            // fill
            // className="object-contain"
          />
        </div>
      </div>

      <div className="mb-10 flex justify-center items-center">
        <ContactButton />
      </div>
    </div>
  );
}
