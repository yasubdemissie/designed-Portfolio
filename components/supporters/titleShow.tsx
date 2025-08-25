export default function TitleShow({ title }: { title: string }) {
  const titleArray = title.split("");
  return (
    <div className="flex gap-1 mb-8 relative w-fit">
      <span
        className={`absolute border ${
          title.toString().toLowerCase() !== "about" ? "w-[106%]" : "w-[100%]"
        } border-custom-accent-dark top-[1px] left-[-40px]`}
      ></span>

      {titleArray.map((letter, index) => {
        if (index % 2 == 0)
          return (
            <span
              key={index}
              className="z-10 w-8 md:w-12 h-8 md:h-12 bg-custom-accent-dark flex items-center justify-center text-white font-semibold md:font-bold text-[24px] md:text-lg transform -rotate-4 origin-center"
            >
              {letter}
            </span>
          );
        return (
          <span
            key={index}
            className="z-10 w-8 md:w-12 h-8 md:h-12 bg-custom-accent-light flex items-center justify-center text-white font-semibold md:font-bold text-[24px] md:text-lg transform -rotate-4 origin-center"
          >
            {letter}
          </span>
        );
      })}
      {title.toString().toUpperCase() == "ABOUT" ? (
        <span className="text-custom-accent-dark flex pl-3 gap-x-3">ME</span>
      ) : null}
    </div>
  );
}
