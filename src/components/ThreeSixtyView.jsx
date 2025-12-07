import React from "react";

function ThreeSixtyView({ images, onClose }) {
  const [index, setIndex] = React.useState(0);

  const prev = () => {
    setIndex((old) => (old === 0 ? images.length - 1 : old - 1));
  };

  const next = () => {
    setIndex((old) => (old === images.length - 1 ? 0 : old + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full mx-4">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-slate-800">360° Car View</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-4">
          <div className="relative rounded-xl overflow-hidden bg-slate-100">
            <img
              src={images[index]}
              alt="Car angle"
              className="w-full h-64 object-cover"
            />

            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3">
              <button
                onClick={prev}
                className="rounded-full bg-black/60 text-white px-3 py-1 text-sm hover:bg-black/80"
              >
                Previous Angle
              </button>
              <button
                onClick={next}
                className="rounded-full bg-black/60 text-white px-3 py-1 text-sm hover:bg-black/80"
              >
                Next Angle
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-500 text-center">
            Click “Next Angle” to simulate a 360° rotation of the car.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreeSixtyView;
