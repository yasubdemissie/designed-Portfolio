import TitleShow from "@/components/supporters/titleShow";
import { userData } from "@/data/db";
import AboutPage from "./about";

export default function AboutIntro() {
  const user = userData[0].user;
  return (
    <section id="about" className="min-h-screen bg-brand-main">
      <TitleShow title="ABOUT" />
      <div className="max-w-6xl mx-auto px-8 my-14 flex flex-col md:flex-row items-center gap-16">
        {/* Profile photo */}
        <div className="flex-shrink-0">
          <div className="w-80 h-80 rounded-[20%] overflow-hidden bg-black">
            <img
              src={user.image || "assets/image/user.jpg"}
              alt={user.name || "USER"}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-brand-text/40 text-md mt-4">
            I am {user.name}
          </p>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-sm md:text-xl text-brand-text leading-relaxed">
            {user.description}
          </p>
        </div>
      </div>
      <AboutPage />
    </section>
  );
}
