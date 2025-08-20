import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-main relative overflow-hidden">
      {/* Background decorative letters */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Left side letters */}
        <div className="absolute top-20 left-12 text-3xl font-light text-gray-300">
          U
        </div>
        <div className="absolute top-80 left-16 text-3xl font-light text-gray-300">
          I
        </div>
        <div className="absolute bottom-60 left-12 text-3xl font-light text-gray-300">
          U
        </div>
        <div className="absolute bottom-20 left-16 text-3xl font-light text-gray-300">
          X
        </div>

        {/* Right side letters */}
        <div className="absolute top-20 right-12 text-3xl font-light text-gray-300">
          D
        </div>
        <div className="absolute top-60 right-16 text-3xl font-light text-gray-300">
          E
        </div>
        <div className="absolute top-80 right-12 text-3xl font-light text-gray-300">
          S
        </div>
        <div className="absolute bottom-60 right-16 text-3xl font-light text-gray-300">
          I
        </div>
        <div className="absolute bottom-40 right-12 text-3xl font-light text-gray-300">
          G
        </div>
        <div className="absolute bottom-20 right-16 text-3xl font-light text-gray-300">
          N
        </div>

        {/* Top center dot */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Available for work indicator */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          <span className="text-gray-600 text-lg">Available for work</span>
        </div>

        {/* Main heading */}
        <div className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
            If you have a challenge that needs a user-centered solution,
            I&apos;d love to discuss how my expertise can contribute to your
            success.
          </h1>
        </div>

        {/* Get In Touch button */}
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium flex items-center gap-3 transition-all duration-200">
          <ArrowRight className="w-5 h-5" />
          Get In Touch
        </Button>
      </div>
    </div>
  );
}
