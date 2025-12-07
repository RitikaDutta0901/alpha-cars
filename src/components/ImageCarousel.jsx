import React from "react";

function ImageCarousel({ images }) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((old) =>
        old === images.length - 1 ? 0 : old + 1
      );
    }, 3000);

    return () => clearInterval(id);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="rounded-2xl bg-slate-200 h-64 md:h-80 flex items-center justify-center">
        <span className="text-slate-500 text-sm">No images</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-black/5 shadow-lg overflow-hidden relative">
      <img
        src={images[current]}
        alt="Car"
        className="w-full h-64 md:h-80 object-cover"
      />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full border border-white ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
