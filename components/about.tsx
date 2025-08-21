import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-main relative overflow-hidden">
      {/* Left side vertical text - UI/UX */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 pointer-events-none select-none">
        <div className="flex flex-col items-center space-y-16">
          <span className="text-[4rem] font-light text-brand-text/60 leading-none">
            .
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            U
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            I
          </span>
          <span className="text-[4rem] font-light text-brand-text/60 leading-none">
            .
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            U
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            X
          </span>
        </div>
      </div>

      {/* Right side vertical text - DESIGNER */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none select-none">
        <div className="flex flex-col items-center gap-y-16">
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            D
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            E
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            S
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            I
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            G
          </span>
          <span className="text-3xl font-light text-brand-text/60 leading-none">
            N
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-16 max-w-4xl mx-auto">
        {/* Available for work indicator */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-3 h-3 bg-custom-accent-dark rounded-full"></div>
          <span className="text-brand-text text-lg">Available for work</span>
        </div>

        {/* Main paragraph */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl md:font-semibold font-light text-brand-text leading-relaxed">
            If you have a challenge that needs a user-centered solution,
            I&apos;d love to discuss how my expertise can contribute to your
            success. I create seamless digital experiences that users love,
            focusing on intuitive design and meaningful interactions.
          </p>
        </div>

        {/* Get In Touch button */}
        <Button className="bg-custom-accent-dark hover:bg-custom-accent-light text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-3 transition-all duration-200">
          <ArrowRight className="w-5 h-5" />
          Get In Touch
        </Button>
      </div>
    </div>
  );
}
