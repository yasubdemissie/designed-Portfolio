import TitleShow from "@/components/supporters/titleShow";
import { ShowWork } from "./supporters/showWork";
import { userData } from "@/data/db";

const works = userData[0].works;

export default function WorkPage() {
  return (
    <section id="works" className="min-h-screen bg-brand-main relative top-5">
      <TitleShow title="WORKS" />
      {/* Main Content */}
      <main className="px-2 md:px-8 py-16">
        {/* WORKS Title */}

        {/* Some Design Works */}
        <div className="text-right mb-8">
          <p className="text-gray-600 text-sm md:text-md lg:text-lg">
            Some Design Works
          </p>
        </div>

        {/* Project Showcase */}
        {works.map((work) => (
          <ShowWork
            key={work.title}
            title={work.title}
            description={work.description}
            image={work.image}
            link={work.link}
            svgs={work.svgs}
            caseStudy={work.caseStudy}
          />
        ))}
      </main>
    </section>
  );
}
