import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function ShowWork({
  title,
  description,
  imagePath,
}: {
  title: string;
  description: string;
  imagePath: string;
}) {
  return (
    <div className="flex items-center gap-16 my-7">
      {/* Left Content */}
      <div className="flex-1 max-w-lg">
        <h2 className="text-4xl font-light text-gray-900 mb-6">{title}</h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg flex items-center gap-2 bg-transparent"
          >
            Case study
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Mockup
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Right Content - Green Background with Mobile Mockups */}
      <div className="flex-1 relative">
        <div className="bg-green-600 rounded-2xl p-12 min-h-[500px] relative overflow-hidden group cursor-pointer transition-all duration-300">
          <Image
            src={`/assets/image/${imagePath}`}
            alt="E-commerce app mockup"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-2xl font-medium">See more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
