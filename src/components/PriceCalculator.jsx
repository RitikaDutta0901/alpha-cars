import React from "react";

function PriceCalculator() {
  const [invites, setInvites] = React.useState(50);
  const [duration, setDuration] = React.useState(3); // in hours

  const ratePerPersonPerHour = 100; // you can change this formula

  const total = invites * duration * ratePerPersonPerHour;

  const formattedTotal = total.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });

  return (
    <section className="bg-white rounded-2xl shadow-md p-5 space-y-4">
      <h2 className="text-lg font-semibold text-slate-800">
        Event Price Calculator
      </h2>

      {/* Number of invites */}
      <div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-slate-600">Number of Invites</span>
          <span className="font-medium text-slate-900">{invites}</span>
        </div>
        <input
          type="range"
          min="10"
          max="500"
          step="10"
          value={invites}
          onChange={(e) => setInvites(parseInt(e.target.value))}
          className="w-full accent-purple-600"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
          <span>10</span>
          <span>500</span>
        </div>
      </div>

      {/* Duration */}
      <div>
        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-slate-600">Duration of Event (hours)</span>
          <span className="font-medium text-slate-900">{duration}</span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          className="w-full accent-purple-600"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
          <span>1 hr</span>
          <span>10 hrs</span>
        </div>
      </div>

      {/* Result */}
      <div className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-emerald-700">
            Estimated Cost
          </div>
          <div className="text-2xl font-bold text-emerald-700">
            ₹{formattedTotal}
          </div>
          <div className="text-[11px] text-emerald-800/80">
            Based on invites × duration × ₹{ratePerPersonPerHour}
          </div>
        </div>
      </div>

      <button className="mt-1 w-full rounded-full bg-purple-600 py-2 text-sm font-medium text-white hover:bg-purple-700">
        Check Eligibility
      </button>

      <p className="text-[11px] text-slate-400">
        *This is a sample calculator for the assignment. Actual pricing can vary
        depending on venue, city, and services included.
      </p>
    </section>
  );
}

export default PriceCalculator;
