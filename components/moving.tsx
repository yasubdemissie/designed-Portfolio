"use client";

function MovingNews() {
  // const message =
  // "• Chesed Design  \t\t   user centered\t\t• Chesed Design\t\taestetically  pleasing\t\t• Chesed Design\t\tsimple and clear \t\t• Chesed Design\t\tintuitive navigation\t\t\t\t• Chesed Design\t\tconsistent branding";
  const message = "Nahom Dibaba Designer • Available for Freelance Projects •";
  return (
    <div className="w-[99%] mx-1 overflow-hidden bg-brand-second h-20 flex items-center relative transform -rotate-2 origin-center">
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
