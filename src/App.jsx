import React from "react";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import ThreeSixtyView from "./components/ThreeSixtyView";
import PriceCalculator from "./components/PriceCalculator";
import CarOverview from "./components/CarOverview";

function App() {
  const [show360, setShow360] = React.useState(false);
  const [selectedCarKey, setSelectedCarKey] = React.useState("bolero");

  const cars = {
    bolero: {
      label: "Bolero",
      overview: {
        model: "Mahindra Bolero",
        year: 2022,
        mileage: "25,000 km",
        price: "₹9,50,000",
      },

      // AUTO-SCROLL IMAGES (only bolero0 & bolero5)
      carouselImages: [
        "/bolero0.png",
        "/bolero5.png",
      ],

      // 360° IMAGES (everything else)
      threeSixtyImages: [
        "/bolero1.webp",
        "/bolero2.png",
        "/bolero3.png",
        "/bolero4.png",
      ],
    },

    scorpio: {
      label: "Scorpio",
      overview: {
        model: "Mahindra Scorpio",
        year: 2023,
        mileage: "12,000 km",
        price: "₹18,20,000",
      },

      // AUTO-SCROLL IMAGES (scorpio4, scorpio5)
      carouselImages: [
        "/scorpio4.png",
        "/scorpio5.png",
      ],

      // 360° IMAGES (rest)
      threeSixtyImages: [
        "/scorpio0.png",
        "/scorpio1.png",
        "/scorpio2.png",
        "/scorpio3.png",
      ],
    },

    safari: {
      label: "Safari",
      overview: {
        model: "Tata Safari",
        year: 2021,
        mileage: "30,000 km",
        price: "₹16,75,000",
      },

      // AUTO-SCROLL IMAGES (safari4, safari5)
      carouselImages: [
        "/safari4.png",
        "/safari5.png",
      ],

      // 360° IMAGES (rest)
      threeSixtyImages: [
        "/safari0.png",
        "/safari1.png",
        "/safari2.png",
        "/safari3.webp",
      ],
    },
  };

  const currentCar = cars[selectedCarKey];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* Car Switch Buttons */}
        <div className="flex gap-3">
          {Object.entries(cars).map(([key, car]) => (
            <button
              key={key}
              onClick={() => setSelectedCarKey(key)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                selectedCarKey === key
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-slate-700 border-slate-300 hover:border-purple-400"
              }`}
            >
              {car.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Carousel + 360 Button */}
          <div className="lg:col-span-2 space-y-4">
            <ImageCarousel images={currentCar.carouselImages} />
            <button
              onClick={() => setShow360(true)}
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-md hover:bg-purple-700 transition"
            >
              360° View – {currentCar.label}
            </button>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <CarOverview car={currentCar.overview} />
            <PriceCalculator />
          </div>

        </div>
      </main>

      {/* 360° Popup */}
      {show360 && (
        <ThreeSixtyView
          images={currentCar.threeSixtyImages}
          onClose={() => setShow360(false)}
        />
      )}
    </div>
  );
}

export default App;
