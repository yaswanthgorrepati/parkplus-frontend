import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const popRef = useRef(null);

  useEffect(() => {
    function onDown(e) {
      if (!open) return;
      if (
        popRef.current?.contains(e.target) ||
        btnRef.current?.contains(e.target)
      )
        return;
      setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className="h-10 w-10 rounded-full bg-neutral-200 grid place-content-center text-neutral-700 hover:bg-neutral-300"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account"
      >
        👤
      </button>

      {open && (
        <div
          ref={popRef}
          className="absolute right-0 mt-2 w-64 bg-white border border-neutral-200 rounded-2xl shadow-[0_12px_30px_rgba(2,6,23,0.15)] overflow-hidden z-50"
          role="menu"
        >
          <div className="px-4 py-3 border-b">
            <div className="font-semibold">Ramesh ramesh</div>
            <div className="text-sm text-neutral-600 truncate">
              ramesh@gmail.com
            </div>
          </div>
          <nav className="p-1 text-sm">
            <Link
              className="flex items-center gap-2 px-3 h-10 rounded-lg hover:bg-neutral-100"
              to="/account"
            >
              👤 Account
            </Link>
            <Link
              className="flex items-center gap-2 px-3 h-10 rounded-lg hover:bg-neutral-100"
              to="/host"
            >
              🧑‍💼 Host Center
            </Link>
            <Link
              className="flex items-center gap-2 px-3 h-10 rounded-lg hover:bg-neutral-100"
              to="/account/bookings"
            >
              🧾 Bookings
            </Link>
            <Link
              className="flex items-center gap-2 px-3 h-10 rounded-lg hover:bg-neutral-100"
              to="/account/payments"
            >
              💳 Payments
            </Link>
            <button className="w-full text-left flex items-center gap-2 px-3 h-10 rounded-lg hover:bg-neutral-100">
              🚪 Sign Out
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
