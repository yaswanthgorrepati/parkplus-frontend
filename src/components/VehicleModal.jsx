import React, { useEffect, useId, useRef, useState } from "react";

export default function VehicleModal({ open, onClose, onSave }) {
  const [reg, setReg] = useState("");
  const [type, setType] = useState("");
  const [err, setErr] = useState("");
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    if (open) {
      setReg("");
      setType("");
      setErr("");

      setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  if (!open) return null;

  function handleSave() {
    const trimmed = reg.trim();
    if (!trimmed || !type) {
      setErr("Please enter registration and select vehicle type.");
      return;
    }
    onSave({ id: Date.now(), reg: trimmed, type });
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="absolute inset-0 grid place-items-center px-4">
        <div
          ref={dialogRef}
          className="w-full max-w-4xl  bg-white rounded-2xl shadow-[0_24px_64px_rgba(2,6,23,0.25)] border border-neutral-200"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2
              id={titleId}
              className="text-2xl font-bold flex items-center gap-3"
            >
              <span className="text-neutral-700">🚗</span> Add vehicle
            </h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="h-10 w-10 grid place-content-center rounded-full hover:bg-neutral-100"
            >
              ✕
            </button>
          </div>

          <div className="px-6 py-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-500 font-medium mb-2">
                  Vehicle registration number
                </label>
                <input
                  value={reg}
                  onChange={(e) => setReg(e.target.value.toUpperCase())}
                  placeholder="e.g. MH39J5008"
                  className="w-full h-12 rounded-xl border border-neutral-300 px-4 outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="block text-neutral-500 font-medium mb-2">
                  Vehicle type
                </label>
                <div className="relative">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="appearance-none w-full h-12 rounded-xl border border-neutral-300 bg-white px-4 pr-10 outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-500"
                  >
                    <option value="">Select type</option>
                    <option>SUV</option>
                    <option>Hatchback</option>
                    <option>Sedan</option>
                    <option>Motorcycle</option>
                    <option>Truck/Bus</option>
                    <option>Tempo/pickup</option>
                    <option>Auto rickshaw</option>
                    <option>Minibus</option>
                  </select>

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-3/5 text-neutral-500 text-2xl">
                    ▾
                  </span>
                </div>
              </div>
            </div>

            {err && <div className="mt-3 text-sm text-rose-600">{err}</div>}

            <div className="mt-6">
              <button
                onClick={handleSave}
                className="h-11 px-6 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold"
              >
                Save vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
