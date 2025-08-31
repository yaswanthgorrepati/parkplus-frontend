import React from "react";

export default function FooterWide() {
  return (
    <footer className="bg-neutral-100 mt-16 border-t">
      <div className="container-px py-10 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-orange-500" />
            <span className="font-semibold font-sans z-1 ml-[-20px] text-lg">
              {" "}
              Park+
            </span>
          </div>
          <div className="mt-4 space-y-2 text-neutral-600">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+919876543210" className="hover:underline">
                (91)9876543210
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:info@parkplus.com" className="hover:underline">
                info@parkplus.com
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-4 text-neutral-500">
            {["f", "i", "x", "l", "y", "t"].map((_, i) => (
              <div
                key={i}
                className="h-9 w-9 rounded-full bg-white border grid place-content-center"
              >
                ★
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-3">Pages</p>
          <ul className="space-y-2 text-neutral-600">
            <li>
              <a href="#" className="hover:text-neutral-900">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Links</p>
          <ul className="space-y-2 text-neutral-600">
            <li>
              <a href="#" className="hover:text-neutral-900">
                List your space
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900">
                Coupons & Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-900">
                Terms and conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <p className="font-semibold mb-3">Member of</p>
          <div className="h-16 w-36 bg-white border rounded-xl grid place-content-center">
            SSAA
          </div>
        </div>
      </div>
    </footer>
  );
}
