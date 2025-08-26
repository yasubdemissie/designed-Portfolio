import { BackButton } from "@/components/supporters/BackButton";
import { Button } from "@/components/ui/button";
import { userData } from "@/data/db";
import Image from "next/image";

export function Mockup({ slug }: { slug: string }) {
  const { works } = userData[0];
  const work = works.find((work) => work.link === slug);
  const isTwoMockups = work?.svgs.length === 3;
  console.log(works, slug);
  return (
    <div className="w-full h-fit flex justify-center items-center flex-col bg-brand-second">
      {/* Works {works} */}
      <div className="flex justify-between w-full fixed top-4 px-12 my-6">
        <BackButton />
        <Button variant="outline">Case study</Button>
      </div>
      <div className="flex w-full my-10 justify-center gap-x-8">
        {isTwoMockups ? (
          <div className="flex gap-x-8">
            <div>
              <Image
                src={work?.svgs[0] || "/assets/image/placeholder.svg"}
                alt={slug}
                // layout="fill"
                width={200}
                height={2104}
              />
            </div>
            <div>
              <Image
                src={work?.svgs[1] || "/assets/image/placeholder.svg"}
                alt={slug}
                // layout="fill"
                width={700}
                height={2104}
              />
            </div>
          </div>
        ) : (
          <div>
            <Image
              src={work?.svgs[0] || "/assets/image/placeholder.svg"}
              alt={slug}
              // layout="fill"
              width={700}
              height={2104}
            />
          </div>
        )}
      </div>
    </div>
  );
}
