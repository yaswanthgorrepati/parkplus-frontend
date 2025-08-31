import React from "react";
import { CITIES } from "../utils/constants.jsx";
import { Link } from "react-router-dom";

export default function CityGallery() {
  const cities = ["Pune", "Mumbai", "Bengaluru", "Delhi", "Chennai"];

  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split("T")[0];

  const params = new URLSearchParams();
  // params.set("text", "");
  params.set("sDate", formattedToday);
  params.set("eDate", formattedTomorrow);
  return (
    <section className="bg-white">
      <div className="container-px py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Get storage spaces near you
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {CITIES.map((c) => {
            params.set("text", c.city);
            return (
              <Link key={c.city} to={`/search?${params.toString()}`}>
                <div className="rounded-xl overflow-hidden ">
                  <div className="aspect-[5/3]">
                    <img src={c.imageUrl} className="object-cover" />
                  </div>
                  <div className="pb-2">
                    <div className="font-extrabold text-xl text-gray-700">
                      {c.city}
                    </div>
                    <div className="text-sm text-gray-600">
                      {c.totalSpace} Storage Spaces
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
