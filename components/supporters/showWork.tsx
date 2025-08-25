"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Work } from "@/data/db";

export function ShowWork({ title, description, image, link }: Work) {
  const navigate = useRouter();
  return (
    <div className="flex flex-col md:flex-row h-[406] md:h-fit items-center gap-2 md:gap-16 my-20">
      {/* Left Content */}
      <div className="flex-1 max-w-lg order-2 md:order-1">
        <h2 className="text-[20px] md:text-4xl font-semibold text-gray-900 mb-2 md:mb-6">
          {title}
        </h2>

        <p className="text-gray-600 md:text-lg text-[12px] leading-relaxed mb-2 md:mb-8">
          {description}
        </p>

        <div className="flex justify-around gap-4">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg flex items-center gap-2 bg-transparent"
          >
            Case study
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button className="bg-custom-accent-dark hover:bg-custom-accent-dark/20 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Mockup
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Right Content - Green Background with Mobile Mockups */}
      <div className="flex-2 relative order-1 md:order-2 md:w-full mb-3">
        <div className="bg-green-600 rounded-2xl p-12 w-[380px] h-[267px] md:w-full md:min-h-[500px] relative overflow-hidden group cursor-pointer transition-all duration-300">
          <Image
            src={image}
            alt="E-commerce app mockup"
            layout="fill"
            objectFit="cover"
          />
          <div
            onClick={() => navigate.push(`${link}`)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          >
            <span className="text-white text-2xl font-medium">See more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
