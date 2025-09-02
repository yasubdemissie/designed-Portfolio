import { Linkedin, Send, Instagram } from "lucide-react";
import { ContactButton } from "./supporters/contactButton";
import { userData } from "@/data/db";

export default function CombinedPortfolio() {
  const user = userData[0].user;

  return (
    <div className="bg-brand-main">
      {/* Home Section */}
      <section id="home" className="min-h-screen relative overflow-clip pt-20">
        {/* Main Content */}
        <main className="flex flex-col items-start justify-between px-4 py-16 relative md:flex-row">
          {/* Center Profile Image - first on mobile */}
          <div className="flex-shrink-0 mx-10 mb-8 md:mb-0 md:mx-16 order-1 md:order-2">
            <div className="w-70 h-70 md:w-90 md:h-90 rounded-full overflow-hidden bg-black">
              <img
                src={user.image || "/assets/image/user/user.png"}
                alt={user.name || "USER"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Content - comes second on mobile */}
          <div className="flex-1 order-2 md:order-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-custom-accent-dark rounded-full"></div>
              <span className="text-brand-text/70 text-sm">
                Available for work
              </span>
            </div>

            <h2 className="text-4xl mt-10 md:mt-14 md:text-5xl font-medium text-brand-text leading-tight mb-1">
              Designing Beautiful UI and Interesting UX
            </h2>

            <p className="text-brand-text/70 text-md mb-16">
              I create seamless digital experience that users love.
            </p>
          </div>

          {/* Right Content - last on mobile */}
          <div className="flex-1 flex justify-start ml-0 mt-6 md:mt-auto mr-0 md:mr-10 order-3">
            <ContactButton />
          </div>
        </main>

        {/* Bottom Name Section */}
        <div className="flex justify-center items-center mx-auto flex-col text-center">
          <h3 className="text-2xl font-light text-brand-text mb-2">Nahom</h3>
          <p className="text-brand-text/70">Digital Product Designer</p>
        </div>

        {/* Right Side Email and Social */}
        <div className="absolute right-3 top-[250px] md:right-8 md:top-1/3 transform -translate-y-1/2 flex flex-col items-center justify-center gap-1">
          <div
            className="writing-mode-vertical text-brand-text/70 flex flex-col text-sm tracking-wider mb-1 mt-40"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            <span>{user.contact.email}</span>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center mb-10">
              {/* Shaft */}
              <span className="w-[1px] h-24 bg-gray-800/40"></span>

              {/* Open arrow head */}
              <div className="flex -mt-3">
                <span className="w-3 h-3 border-b-2 border-l-2 border-gray-800/40 rotate-[-45deg]"></span>
                {/* <span className="w-3 h-3 border-b-2 border-r-2 border-gray-800 rotate-[45deg] -ml-px"></span> */}
              </div>
            </div>

            <a
              href="#"
              className="text-brand-text/70 hover:text-brand-text transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-brand-text/70 hover:text-brand-text transition-colors"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-brand-text/70 hover:text-brand-text transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
