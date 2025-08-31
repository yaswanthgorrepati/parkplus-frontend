import React from "react";
import { SERVICE } from "../utils/constants.jsx";

export default function HowItWorks() {
  return (
    <section className="container-px py-10">
      <h2 className="text-2xl font-semibold mb-4">How it Works?</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {SERVICE.get("parking").howItWorksSteps.map((s) => (
          <div
            key={s.step}
            className="rounded-xl border bg-white p-4 flex gap-2 hover:bg-green-200"
          >
            <div className="h-10 w-10 rounded-full  text-white grid place-content-center mb-2">
              <img className="object-cover" src={s.icon} />
            </div>

            <div>
              <p className="text-lg font-bold text-gray-800">{s.title}</p>
              <p className="text-sm text-gray-500">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
