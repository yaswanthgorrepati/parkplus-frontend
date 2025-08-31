import React from "react";

export default function Reviews() {
  const items = [
    { n: "Hind Nagsane", t: "Great service and secure spaces." },
    { n: "Mukilram Angadi", t: "Easy booking and helpful support." },
    { n: "Aasish Kumar", t: "Clean facilities and fair pricing." },
  ];
  return (
    <section className="bg-white">
      <div className="container-px py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">What customers say</h2>
          <div className="text-sm text-white/80 md:text-neutral-600 md:text-inherit">
            Google 4.8 ★★★★★
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.n} className="card p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-neutral-200" />
                <div>
                  <p className="font-medium">{i.n}</p>
                  <p className="text-xs text-neutral-500">Verified Reviewer</p>
                </div>
              </div>
              <p className="text-neutral-700 text-sm">{i.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
