import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Send, Instagram } from "lucide-react";
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
        <main className="flex items-center justify-between px-8 py-16 relative">
          {/* Left Content */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-custom-accent-dark rounded-full"></div>
              <span className="text-brand-text/70 text-sm">
                Available for work
              </span>
            </div>

            <h2 className="text-5xl font-medium text-brand-text leading-tight mb-6">
              Designing
              <br />
              Beautiful UI and
              <br />
              Interesting UX
            </h2>

            <p className="text-brand-text/70 text-md mb-8">
              I create seamless digital experience that users love.
            </p>
          </div>

          {/* Center Profile Image */}
          <div className="flex-shrink-0 mx-16">
            <div className="w-80 h-80 rounded-full overflow-hidden bg-black">
              <img
                src="assets/image/user.jpg"
                alt="Nahom Dibaba"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center mr-10 mt-auto">
            <ContactButton />
          </div>
        </main>

        {/* Bottom Name Section */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-2xl font-light text-brand-text mb-2">Nahom</h3>
          <p className="text-brand-text/70">Digital Product Designer</p>
        </div>

        {/* Right Side Email and Social */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-8">
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
