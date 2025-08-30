import clsx from "clsx";

interface TitleShowProps {
  title: string;
  className?: string; // optional overrides
}

export default function TitleShow({ title, className }: TitleShowProps) {
  const titleArray = title
    .toLowerCase()
    .split("")
    .map((char, i) => (i == 0 ? char.toUpperCase() : char));

  return (
    <div
      className={clsx(
        `${
          title.toLowerCase() == "works" ? "sticky top-20" : "sticky top-20"
        } mx-1 z-30 bg-brand-main/0 w-fit mb-8`,
        className
      )}
    >
      <div className="relative flex gap-1">
        <span
          className={`absolute border ${
            title.toLowerCase() !== "about" ? "w-[106%]" : "w-[100%]"
          } border-custom-accent-dark top-[1px] left-[-40px]`}
        ></span>

        {titleArray.map((letter, index) =>
          index % 2 === 0 ? (
            <span
              key={index}
              className="z-10 w-8 md:w-12 h-8 md:h-12 bg-custom-accent-dark flex items-center justify-center text-white font-light md:font-semibold lg:font-bold text-[24px] md:text-lg transform -rotate-4 origin-center"
            >
              {letter}
            </span>
          ) : (
            <span
              key={index}
              className="z-10 w-8 md:w-12 h-8 md:h-12 bg-custom-accent-light flex items-center justify-center text-white font-light md:font-semibold lg:font-bold text-[24px] md:text-lg transform -rotate-4 origin-center"
            >
              {letter}
            </span>
          )
        )}

        {title.toUpperCase() === "ABOUT" && (
          <span className="text-custom-accent-dark flex pl-3 gap-x-3">ME</span>
        )}
      </div>
    </div>
  );
}
