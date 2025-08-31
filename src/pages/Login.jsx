import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // TODO: call your auth API
    console.log({ email, user, pwd });
  }

  return (
    <div className="min-h-dvh bg-[#E9F6F9]">
      <div className="container-px py-10 md:py-16">
        <div className="flex flex-col gap-5 items-center">
          <div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-[#ff6b4a]" />
                <div className="text-4xl font-extrabold tracking-tight text-[#2d3e50]">
                  parkplus
                </div>
              </div>
              <div className="mt-2 text-[#425466]">
                A Storage &amp; Fulfillment Platform
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[640px]">
            <div className="rounded-[28px] bg-white shadow-[0_30px_80px_rgba(2,6,23,0.15)] border border-neutral-200 p-6 md:p-10">
              <h1 className="text-2xl md:text-[28px] font-extrabold text-center">
                Login
              </h1>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-600 mb-2">
                    Username
                  </label>
                  <input
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="username"
                    required
                    className="w-full h-12 rounded-full border border-neutral-300 px-4 outline-none focus:border-neutral-800 focus:ring-4 focus:ring-neutral-900/5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-600 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPwd ? "text" : "password"}
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full h-12 rounded-full border border-neutral-300 px-4 pr-12 outline-none focus:border-neutral-800 focus:ring-4 focus:ring-neutral-900/5"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-9 px-3 rounded-full text-sm text-neutral-600 hover:bg-neutral-100"
                      aria-label="Toggle password visibility"
                    >
                      {showPwd ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:from-red-600 hover:to-orange-600 shadow-md"
                >
                  Login
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-neutral-600">
                By continuing, you agree to our{" "}
                <Link to="#" className="underline">
                  Terms and conditions
                </Link>{" "}
                &{" "}
                <Link to="#" className="underline">
                  Privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
