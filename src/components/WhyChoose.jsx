import React from "react";
import { SERVICE } from "../utils/constants.jsx";

export default function WhyChoose() {
  const cards = [
    {
      t: "Flexible Storage Plans",
      d: "Choose short or long-term as per your needs.",
    },
    {
      t: "Wide geographic presence",
      d: "Multiple cities and micro-locations.",
    },
    { t: "Trusted & Verified Users", d: "KYC and strong safety policies." },
  ];
  return (
    <section className="container-px py-10 ">
      <h2 className="text-2xl font-semibold mb-4">Why Choose ParkPlus?</h2>
      <div className=" grid md:grid-cols-3 gap-6">
        {SERVICE.get("parking").whyChooseUs.map((c) => (
          <div key={c.title} className="card p-6">
            <div className="aspect-video bg-neutral-200 rounded-lg mb-3">
              <img src={c.imgUrl} />
            </div>
            <p className="font-medium">{c.title}</p>
            <p className="text-sm text-neutral-600">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
