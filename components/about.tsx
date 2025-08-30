import { ContactButton } from "./supporters/contactButton";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-main relative overflow-hidden">
      {/* Left side vertical text - UI/UX */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none select-none">
        <div className="flex flex-col items-center space-y-16">
          <span
            className="text-[4rem] font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            .
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            U
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            I
          </span>
          <span
            className="text-[4rem] font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            .
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            U
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            X
          </span>
        </div>
      </div>

      {/* Right side vertical text - DESIGNER */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none select-none">
        <div className="flex flex-col items-center gap-y-16">
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            D
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            E
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            S
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            I
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            G
          </span>
          <span
            className="text-lg md:text-3xl font-light text-brand-text/60 leading-none"
            style={{ color: "#adadad" }}
          >
            N
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen px-18 md:px-0 max-w-4xl mx-auto">
        {/* Main paragraph */}
        <div className="text-center mt-60 mb-24">
          <p className="text-lg md:text-3xl font-normal text-brand-text leading-relaxed">
            If you have a challenge that needs a user-centered solution,
            I&apos;d love to discuss how my expertise can contribute to your
            success. I create seamless digital experiences that users love,
            focusing on intuitive design and meaningful interactions.
          </p>
        </div>

        {/* Get In Touch button */}
        <ContactButton />
      </div>
    </div>
  );
}
