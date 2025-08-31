import React from "react";

export default function ReferBanner() {
  return (
    <section className="container-px py-6">
      <div className="rounded-2xl border bg-gradient-to-r from-pink-50 to-sky-50 p-6">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Refer & Earn Exciting Cashback",
            "Host Cashback",
            "User Cashback",
          ].map((t) => (
            <div key={t} className="rounded-xl bg-white p-4 border">
              <p className="font-semibold">{t}</p>
              <p className="text-sm text-neutral-600">Details placeholder.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
