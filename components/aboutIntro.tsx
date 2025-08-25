import TitleShow from "@/components/supporters/titleShow";

export default function AboutIntro() {
  return (
    <>
      <div id="about" className="max-w-6xl px-8 mt-6 flex items-start gap-16">
        <TitleShow title="ABOUT" />
      </div>
      <div className="max-w-6xl mx-auto px-8 my-14 flex flex-col md:flex-row items-center gap-16">
        {/* Profile photo */}
        <div className="flex-shrink-0">
          <div className="w-80 h-80 rounded-[20%] overflow-hidden bg-black">
            <img
              src="assets/image/user.jpg"
              alt="Nahom Dibaba"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-center text-brand-text/40 text-md mt-4">
            I am Nahom Dibaba
          </p>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p className="text-sm md:text-xl text-brand-text leading-relaxed">
            I&apos;m a UI/UX Designer driven by a genuine passion for solving
            complex user problems with elegant, intuitive solutions. My approach
            is rooted in deep user research and data-driven insights, which
            allows me to craft digital experiences that not only look great but
            also deliver measurable impact.
          </p>
        </div>
      </div>
    </>
  );
}
