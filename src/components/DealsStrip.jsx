import React from "react";

export default function DealsStrip() {
  return (
    <section className="container-px py-4">
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Deal {i}</p>
                <p className="text-xs text-neutral-600">Limited time offer</p>
              </div>
              <span className="chip">20% off</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
