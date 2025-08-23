import { Linkedin, Send, Instagram } from "lucide-react";
import { ContactButton } from "./supporters/contactButton";

export default function CombinedPortfolio() {
  return (
    <div className="bg-brand-main">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen relative overflow-hidden pt-20"
      >
        {/* Main Content */}
        <main className="flex flex-col items-center justify-between px-8 py-16 relative md:flex-row">
          {/* Center Profile Image - first on mobile */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mx-16 order-1 md:order-2">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden bg-black">
              <img
                src="assets/image/user.jpg"
                alt="Nahom Dibaba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Content - comes second on mobile */}
          <div className="flex-1 max-w-md order-2 md:order-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-custom-accent-dark rounded-full"></div>
              <span className="text-brand-text/70 text-sm">
                Available for work
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium text-brand-text leading-tight mb-6">
              Designing Beautiful UI and Interesting UX
            </h2>

            <p className="text-brand-text/70 text-md mb-8">
              I create seamless digital experience that users love.
            </p>
          </div>

          {/* Right Content - last on mobile */}
          <div className="flex-1 flex justify-center mt-6 md:mt-auto mr-0 md:mr-10 order-3">
            <ContactButton />
          </div>
        </main>

        {/* Bottom Name Section */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-2xl font-light text-brand-text mb-2">Nahom</h3>
          <p className="text-brand-text/70">Digital Product Designer</p>
        </div>

        {/* Right Side Email and Social */}
        <div className="absolute right-3 top-[300px] md:right-8 md:top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-8">
          <div
            className="writing-mode-vertical text-brand-text/70 text-sm tracking-wider"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            nahom.dibaba@gmail.com
          </div>

          <div className="flex flex-col gap-4">
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
