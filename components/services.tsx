"use client";

import TitleShow from "@/public/assets/image/titleShow";
import { useState } from "react";

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const serviceDetails = {
    "web-mobile": {
      title: "Web and\nMobile\nApp\nDesign",
      description:
        "I thrive on solving real-world problems by creating intuitive and engaging user experience. My process centers on understanding user needs and business objectives to create websites and mobile applications that are not just aesthetically pleasing, but also highly functional and easy to navigate. I specialize in visual design, responsive design, user research and usability testing, ensuring every project delivers an exceptional user experience and achieves its strategic goals.",
    },
    "ux-research": {
      title: "UX\nResearch",
      description:
        "My expertise lies in designing and conducting comprehensive user research studies, including usability testing, interviews, surveys, and ethnographic research. I translate complex data into clear, actionable recommendations that empower product teams to build user-centric solutions aligned with business objectives.",
    },
  };

  return (
    <section id="services" className="min-h-screen bg-brand-main">
      {/* Services Title */}
      <div className="px-8 pt-16 pb-8">
        <TitleShow title="SERVICES" />
      </div>

      <div
        className="relative h-[600px]"
        onMouseLeave={() => setHoveredService(null)}
      >
        {/* Services Grid Container */}
        <div className="grid grid-cols-5 h-full relative">
          {/* Web and Mobile App Design */}
          <div
            className="bg-custom-accent-dark flex items-center justify-center p-8 cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredService("web-mobile")}
          >
            <h3 className="text-white text-2xl font-light text-center leading-tight">
              Web and
              <br />
              Mobile
              <br />
              App
              <br />
              Design
            </h3>
          </div>

          {/* UI/UX Design */}
          <div className="bg-custom-accent-light flex items-center justify-center p-8">
            <h3 className="text-white text-2xl font-light text-center leading-tight">
              UI/UX
              <br />
              Design
            </h3>
          </div>

          {/* UX Research */}
          <div
            className="bg-[#4a0052] flex items-center justify-center p-8 cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredService("ux-research")}
          >
            <h3 className="text-white text-2xl font-light text-center leading-tight">
              UX
              <br />
              Research
            </h3>
          </div>

          {/* Brand Identity Design */}
          <div className="bg-[#5c0066] flex items-center justify-center p-8">
            <h3 className="text-white text-2xl font-light text-center leading-tight">
              Brand
              <br />
              Identity
              <br />
              Design
            </h3>
          </div>

          {/* More+ */}
          <div className="bg-[#2d0033] flex items-center justify-center p-8">
            <h3 className="text-white text-2xl font-light text-center leading-tight">
              More+
            </h3>
          </div>

          {hoveredService && (
            <div
              className="absolute inset-0 bg-custom-accent-dark flex items-center justify-between px-16 z-20 transition-all duration-300"
              onMouseEnter={() => setHoveredService(hoveredService)}
            >
              <div className="text-white">
                <h2 className="text-4xl font-light mb-4 whitespace-pre-line">
                  {
                    serviceDetails[
                      hoveredService as keyof typeof serviceDetails
                    ].title
                  }
                </h2>
              </div>
              <div className="text-white max-w-2xl">
                <p className="text-lg leading-relaxed">
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
