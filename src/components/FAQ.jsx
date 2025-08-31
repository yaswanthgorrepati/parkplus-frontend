import React from "react";

export default function FAQ() {
  const faqs = [
    "What types of storage spaces are available?",
    "How do I book a storage space?",
    "How do I calculate space needed?",
    "Can I access my stored items anytime?",
    "Is my storage space secure?",
    "Can I store bulk goods?",
    "Do you offer transport services?",
  ];
  return (
    <section className="bg-white">
      <div className="container-px py-10">
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {faqs.map((q) => (
            <details key={q} className="rounded-xl border p-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-neutral-600">
                Answer placeholder—customize for your business rules.
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
