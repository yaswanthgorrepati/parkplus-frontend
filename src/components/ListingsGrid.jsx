import React from "react";
import ListingCard from "./ListingCard.jsx";
import { SERVICE } from "../utils/constants.jsx";

export default function ListingsGrid() {
  return (
    <section className="container-px py-10">
      <h2 className="text-xl font-semibold mb-4">
        Frequently Booked Storage Spaces
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICE.get("parking").frequentlyBookedSpaces.map((m) => (
          <ListingCard key={m.id} item={m} />
        ))}
      </div>
    </section>
  );
}
