"use client";

function MovingNews() {
  const message =
    "Nahom Dibaba Designer • Available for Freelance Projects • UI/UX Specialist •";
  return (
    <div className="w-[99%] mx-1 overflow-hidden bg-brand-second h-12 flex items-center relative border-y border-brand-text/10 transform -rotate-2 origin-center">
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: 1000 }).map((_, index) => {
          return (
            <span
              key={index}
              className="text-brand-text/80 text-lg font-medium mx-8 inline-block"
            >
              {message}
            </span>
          );
        })}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            /* Adjusted transform to account for 1000 repetitions */
            transform: translateX(-0.1%);
          }
        }
        .animate-marquee {
          /* Kept same 30s duration for consistent speed */
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MovingNews;
