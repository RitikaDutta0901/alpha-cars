import React from "react";

function CarOverview({ car }) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-5 space-y-3">
      <h2 className="text-lg font-semibold text-slate-800">Car Overview</h2>

      <div className="grid grid-cols-2 gap-y-2 text-sm">
        <div className="text-slate-500">Model</div>
        <div className="font-medium text-slate-800">{car.model}</div>

        <div className="text-slate-500">Year</div>
        <div className="font-medium text-slate-800">{car.year}</div>

        <div className="text-slate-500">Mileage</div>
        <div className="font-medium text-slate-800">{car.mileage}</div>

        <div className="text-slate-500">Price</div>
        <div className="font-semibold text-emerald-600 text-base">
          {car.price}
        </div>
      </div>

      <button className="mt-2 w-full rounded-full bg-purple-600 py-2 text-sm font-medium text-white hover:bg-purple-700">
        Book Test Drive
      </button>
    </section>
  );
}

export default CarOverview;
