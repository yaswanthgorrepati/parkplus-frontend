import React, { useContext } from "react";
import { SERVICE } from "../utils/constants.jsx";
import ServiceContext from "../utils/ServiceContext.jsx";

export default function CategoryGrid() {
  const { serviceName } = useContext(ServiceContext);
  return (
    <section className="container-px py-10 ">
      <h2 className="text-3xl font-bold mb-4">
        {SERVICE.get(serviceName).searchText}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICE.get(serviceName).categories.map((category) => (
          <div key={category.t} className="card p-4">
            <div className="aspect-[4/3] rounded-xl bg-neutral-200 mb-3">
              <img
                src={category.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-semibold mb-2">{category.t}</p>
            <div className="flex flex-wrap gap-2">
              {category.b.map((x) => (
                <span key={x} className="chip">
                  {x}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
