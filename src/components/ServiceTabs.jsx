import React, { useContext, useState } from "react";
import ServiceContext from "../utils/ServiceContext.jsx";

const TABS = [
  // { key: "storage", label: "Storage Space", icon: "📦" },
  { key: "parking", label: "Parking", icon: "🚗" },

  // {key: 'warehouse', label: 'Warehouse', icon:"🏭"},
  // { key: "luggage", label: "Luggage Storage", icon: "🧳" },
];
const TOP_OFFSET_CLASS = "top-16";

const ServiceTabs = () => {
  const [active, setActive] = useState("storage");
  const { setServiceName } = useContext(ServiceContext);

  return (
    <div className={`sticky ${TOP_OFFSET_CLASS} z-30`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="bg-white rounded-2xl shadow-lg border p-3 relative">
          <div className="flex flex-wrap gap-2 justify-around">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => {
                  setActive(t.key);
                  setServiceName(t.key);
                }}
                className={`px-3 py-2 rounded-lg text-sm border ${active === t.key ? "bg-red-500 text-white border-red-500" : "bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200"}`}
                aria-pressed={active === t.key}
              >
                <span className="text-xl">{t.icon + " "}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;
