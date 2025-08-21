export default function TitleShow({ title }: { title: string }) {
  const titleArray = title.split("");
  return (
    <div className="flex gap-1 mb-8">
      {titleArray.map((letter, index) => {
        if (index % 2 == 0)
          return (
            <span
              key={index}
              className="w-12 h-12 bg-custom-accent-dark flex items-center justify-center text-white font-bold text-lg transform -rotate-4 origin-center"
            >
              {letter}
            </span>
          );
        return (
          <span
            key={index}
            className="w-12 h-12 bg-custom-accent-light flex items-center justify-center text-white font-bold text-lg transform -rotate-4 origin-center"
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
