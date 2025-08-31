import React from "react";

export default function ContactCTA() {
  return (
    <section className="bg-sky-900 text-white">
      <div className="container-px py-10">
        <div className="grid md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-3">
            <h3 className="text-2xl font-semibold mb-2">
              Still have questions?
            </h3>
            <p className="text-white/80">
              We’re here to help you find the right storage.
            </p>
            <div className="grid md:grid-cols-3 gap-3 mt-4">
              <input
                className="h-11 px-3 rounded-xl bg-neutral-200 text-neutral-900"
                placeholder="Name"
              />
              <input
                className="h-11 px-3 rounded-xl bg-neutral-200 text-neutral-900"
                placeholder="Phone"
              />
              <input
                className="h-11 px-3 rounded-xl bg-neutral-200 text-neutral-900"
                placeholder="Location"
              />
            </div>
          </div>
          <button className="btn-primary mt-4 md:mt-0">Get a callback</button>
        </div>
      </div>
    </section>
  );
}
