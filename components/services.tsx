"use client";

import TitleShow from "@/components/supporters/titleShow";
import { useState } from "react";

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const serviceDetails = {
    "web-mobile": {
      title: "Web and Mobile App Design",
      description:
        "I thrive on solving real-world problems by creating intuitive and engaging user experience. My process centers on understanding user needs and business objectives to create websites and mobile applications that are not just aesthetically pleasing, but also highly functional and easy to navigate. I specialize in visual design, responsive design, user research and usability testing, ensuring every project delivers an exceptional user experience and achieves its strategic goals.",
    },
    "ux-research": {
      title: "UX Research",
      description:
        "My expertise lies in designing and conducting comprehensive user research studies, including usability testing, interviews, surveys, and ethnographic research. I translate complex data into clear, actionable recommendations that empower product teams to build user-centric solutions aligned with business objectives.",
    },

    "ui/ux-research": {
      title: "UI/UX Research",
      description:
        "I'm a  UI/UX Designer passionate about crafting intuitive and visually engaging digital experiences. With a keen eye for detail and a user-centric approach, I transform complex ideas into seamless, functional, and beautiful websites. My goal is to build solutions that not only look great but also drive results and enhance user interaction. Let's create something remarkable together.",
    },
    "brand-identity-design": {
      title: "Brand Identity Design",
      description:
        "As a Brand Identity Designer, I specialize in designing cohesive and compelling visual systems that effectively communicate a brand's unique story and values. My process involves deep dives into market research, audience understanding, and collaborative strategic thinking to create identities that resonate and stand the test of time.",
    },
    more: {
      title: "More+",
      description:
        "Graphics design, Logo design and some others are skills that i do some times. Thank you",
    },
  };

  return (
    <section id="services" className="min-h-screen bg-brand-main">
      {/* Services Title */}
      <TitleShow title="SERVICES" />

      <div
        className="relative h-[600px]"
        onMouseLeave={() => setHoveredService(null)}
      >
        {/* Services Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-5 h-full relative">
          {/* Web and Mobile App Design */}
          <div className="bg-custom-accent-dark flex items-center justify-center p-8 cursor-pointer transition-all duration-300">
            <h3
              onMouseEnter={() => setHoveredService("web-mobile")}
              className="text-white text-4xl font-semibold text-center leading-tight"
            >
              Web and Mobile App Design
            </h3>
          </div>

          {/* UI/UX Design */}
          <div className="bg-custom-accent-light flex items-center justify-center p-8">
            <h3
              onMouseEnter={() => setHoveredService("ui/ux-research")}
              className="text-white text-4xl tracking-tight font-semibold text-center leading-tight"
            >
              UI/UX Design
            </h3>
          </div>

          {/* UX Research */}
          <div className="bg-[#4a0052] flex items-center justify-center p-8 cursor-pointer transition-all duration-300">
            <h3
              onMouseEnter={() => setHoveredService("ux-research")}
              className="text-white text-4xl tracking-tight font-semibold text-center leading-tight"
            >
              UX Research
            </h3>
          </div>

          {/* Brand Identity Design */}
          <div className="bg-[#5c0066] flex items-center justify-center p-8">
            <h3
              onMouseEnter={() => setHoveredService("brand-identity-design")}
              className="text-white text-4xl tracking-tight font-semibold text-center leading-tight"
            >
              Brand Identity Design
            </h3>
          </div>

          {/* More+ */}
          <div className="bg-[#2d0033] flex items-center justify-center p-8">
            <h3
              onMouseEnter={() => setHoveredService("more")}
              className="text-white text-4xl tracking-tight font-semibold text-center leading-tight"
            >
              More+
            </h3>
          </div>

          {hoveredService && (
            <div
              className="absolute inset-0 bg-custom-accent-dark flex flex-col md:flex-row items-center justify-around px-16 z-20 transition-all duration-300"
              onMouseEnter={() => setHoveredService(hoveredService)}
            >
              <div className="text-white">
                <h2 className="text-2xl font-semibold  md:text-4xl mb-4 whitespace-pre-line">
                  {
                    serviceDetails[
                      hoveredService as keyof typeof serviceDetails
                    ].title
                  }
                </h2>
              </div>
              <div className="text-white max-w-2xl">
                <p className="text-sm md:text-lg leading-relaxed">
                  {
                    serviceDetails[
                      hoveredService as keyof typeof serviceDetails
                    ].description
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
