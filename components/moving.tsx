"use client";

function MovingNews() {
  return (
    <div className="w-full overflow-hidden bg-brand-second h-12 flex items-center relative border-y border-brand-text/10 transform -rotate-2 origin-center">
      <div className="flex animate-marquee whitespace-nowrap w-full">
        <span className="text-brand-text/80 text-lg font-medium mx-8">
          Nahom Dibaba Designer • Available for Freelance Projects • UI/UX
          Specialist •
        </span>
        <span className="text-brand-text/80 text-lg font-medium mx-8">
          Nahom Dibaba Designer • Available for Freelance Projects • UI/UX
          Specialist •
        </span>
        <span className="text-brand-text/80 text-lg font-medium mx-8">
          Nahom Dibaba Designer • Available for Freelance Projects • UI/UX
          Specialist •
        </span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MovingNews;
