import React, { useState } from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";

const field =
  "h-11 w-full rounded-xl border border-neutral-300 bg-white px-3 outline-none focus:border-neutral-500 focus:ring-4 focus:ring-neutral-900/5";

export default function AccountPage() {
  const [name, setName] = useState("Ramesh");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("ramesh@gmail.com");
  const [altName, setAltName] = useState("");
  const [altPhone, setAltPhone] = useState("");

  return (
    <>
      <Navbar />
      <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
        <main className="container-px py-6 max-w-4xl">
          <div className="text-sm font-semibold text-neutral-700 mb-3 text-xl border-b border-neutral-200">
            Account Details
          </div>

          <section className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-4 md:p-5 flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-neutral-200 grid place-content-center text-2xl">
              👤
            </div>
            <div className="min-w-0">
              <div className="text-[18px] md:text-[20px] font-extrabold leading-tight">
                {name}
              </div>
              <div className="mt-1 flex items-center gap-5 text-sm text-neutral-700">
                <span className="inline-flex items-center gap-2">
                  ✉️ {email}
                </span>
                <span className="inline-flex items-center gap-2">
                  📞 {phone || "—"}
                </span>
              </div>
            </div>
          </section>

          <details className="mt-4 bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            <summary className="cursor-pointer select-none flex items-center justify-between px-4 md:px-5 h-12 font-semibold border-b border-neutral-200">
              <span className="inline-flex items-center gap-2">
                ⚙️ Personal Information
              </span>
              <span className="text-[11px] rounded-md bg-yellow-100 text-yellow-800 px-2 py-[2px]">
                Incomplete
              </span>
            </summary>

            <div className="px-4 md:px-5 pb-5 pt-2">
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ramesh"
                    className={field}
                  />
                </div>
              </div>

              <div className="mt-4">
                <button className="h-11 px-6 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold">
                  Save
                </button>
              </div>
            </div>
          </details>

          <details className="mt-4 bg-white rounded-2xl border border-neutral-200 overflow-hidden ">
            <summary className="cursor-pointer select-none flex items-center justify-between px-4 md:px-5 h-12 font-semibold border-b border-neutral-200">
              <span className="inline-flex items-center gap-2">
                📩 Contact Details
              </span>
              <span className="text-[11px] rounded-md bg-yellow-100 text-yellow-800 px-2 py-[2px]">
                Incomplete
              </span>
            </summary>

            <div className="px-4 md:px-5 pb-5 pt-2">
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 xxxxxxxxxx"
                    className={field}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={field}
                  />
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <div className="text-sm font-semibold mb-3">
                  Alternate contact details
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">
                      Name
                    </label>
                    <input
                      value={altName}
                      onChange={(e) => setAltName(e.target.value)}
                      className={field}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">
                      Phone
                    </label>
                    <input
                      value={altPhone}
                      onChange={(e) => setAltPhone(e.target.value)}
                      className={field}
                      placeholder="+xxxxxxxxxxxx"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="h-11 px-6 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold">
                  Save
                </button>
              </div>
            </div>
          </details>

          <details className="mt-4 bg-white rounded-2xl border border-neutral-200 overflow-hidden">
            <summary className="cursor-pointer select-none flex items-center justify-between px-4 md:px-5 h-12 font-semibold">
              <span className="inline-flex items-center gap-2">📍 Address</span>
              <span className="text-[11px] rounded-md bg-yellow-100 text-yellow-800 px-2 py-[2px]">
                Incomplete
              </span>
            </summary>
            {/* collapsed content placeholder */}
          </details>

          <div className="text-right text-sm mt-3">
            <button className="text-white hover:bg-red-600 bg-red-500 p-3 rounded-xl">
              Delete Account
            </button>
          </div>
        </main>
      </div>
      <FooterWide />
    </>
  );
}
