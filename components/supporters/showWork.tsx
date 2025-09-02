"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Work } from "@/data/db";
import { CaseStudyButton } from "./caseStudyButton";

export function ShowWork({ title, description, image, link }: Work) {
  const navigate = useRouter();
  return (
    <div className="flex flex-col md:flex-row h-[406] md:h-fit items-center gap-2 md:gap-16 my-20">
      {/* Left Content */}
      <div className="flex-1 max-w-lg order-2 md:order-1">
        <h2 className="text-[20px] md:text-4xl font-semibold text-gray-900 mx-2 mb-2 tracking-[-1px] md:mb-6">
          {title}
        </h2>

        <p
          className="md:text-lg text-[12px] leading-relaxed mb-2 mx-2 md:mb-[80px]"
          style={{ color: "#868686" }}
        >
          {description}
        </p>

        <div className="flex justify-start gap-4">
          <CaseStudyButton path={link} />
          <Button
            onClick={() => navigate.push(`${link}`)}
            className="bg-custom-accent-dark hover:bg-custom-accent-dark/80 text-white px-6 py-3 rounded-lg flex w-[165px] h-[47px] items-center gap-2"
          >
            Mockup
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Right Content - Green Background with Mobile Mockups */}
      <div className="flex-2 relative order-1 md:order-2 md:w-full mb-3">
        <div className="bg-green-600 rounded-2xl p-12 w-[380px] h-[267px] md:w-full md:min-h-[500px] relative overflow-hidden group cursor-pointer transition-all duration-300">
          <Image
            src={image}
            alt="E-commerce app mockup"
            fill
            className="object-cover"
          />
          <div
            onClick={() => navigate.push(`${link}`)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-y-1"
          >
            <div className="w-fit p-2 rounded-full my-1 bg-black/40">
              <ArrowUpRight color="white" />
            </div>
            <h3 className="text-white text-2xl font-medium">See more</h3>
            <p className="text-white text-sm">
              View the full mocukup and case study
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
