import React from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";

const MOCK_ROWS = [
  {
    ref: "126",
    spaceId: "1",
    bookingDate: "today",
    bookingStartDate: "2025-10-10",
    bookingEndDate: "2025-10-12",
    totalAmount: "400.00",
    paymentStatus: "Success",
    status: "Booked",
  },
  {
    ref: "126",
    spaceId: "1",
    bookingDate: "today",
    bookingStartDate: "2025-10-10",
    bookingEndDate: "2025-10-12",
    totalAmount: "400.00",
    paymentStatus: "Pending",
    status: "Booked",
  },
  {
    ref: "126",
    spaceId: "1",
    bookingDate: "today",
    bookingStartDate: "2025-10-10",
    bookingEndDate: "2025-10-12",
    totalAmount: "400.00",
    paymentStatus: "Success",
    status: "Booked",
  },
];

function EmptyRow() {
  return (
    <div className="px-4 py-6 text-sm text-neutral-500">Showing 0 results</div>
  );
}

// <div className="grid grid-cols-[minmax(140px,1.2fr)_1fr_1fr_1fr_1fr_120px] px-4 py-3 text-sm font-semibold text-neutral-800 bg-neutral-50">
//         <div>Reference ID</div>
//         <div>Space</div>
//         <div>Booking date</div>
//         <div>Booking start date</div>
//         <div>Booking end date</div>
//         <div>Total Amount</div>
//         <div>Payment Status</div>
//         <div>Booking Status</div>
//       </div>
function Table({ rows }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
      <div className="grid grid-cols-8 px-4 py-3 text-sm font-semibold text-neutral-800 bg-neutral-50">
        <div>Reference ID</div>
        <div>Space</div>
        <div>Booking date</div>
        <div>Booking start date</div>
        <div>Booking end date</div>
        <div>Total Amount</div>
        <div>Payment Status</div>
        <div>Booking Status</div>
      </div>

      {rows.length === 0 ? (
        <EmptyRow />
      ) : (
        rows.map((r) => (
          <div
            key={r.id}
            className="grid grid-cols-8 px-4 py-3 text-sm border-t border-neutral-200"
          >
            <div className="font-mono">{r.ref}</div>
            <div>{r.spaceId}</div>
            <div>{r.bookingDate}</div>
            <div>{r.bookingStartDate}</div>
            <div>{r.bookingEndDate}</div>
            <div>{r.totalAmount}</div>
            <div>{r.paymentStatus}</div>
            <div>{r.status}</div>
          </div>
        ))
      )}
    </div>
  );
}

// ---------- page ----------
export default function BookingHistory() {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
        <main className="container-px py-6">
          {/* Profile card */}
          <section className="bg-white rounded-2xl justify-between border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-4 md:p-5 flex ">
            <div className="flex gap-2">
              <div className="h-16 w-16 rounded-full bg-neutral-200 grid place-content-center text-2xl">
                👤
              </div>
              <div className="flex items-center ">
                <div>
                  <div className="text-[22px] md:text-[24px] font-extrabold leading-tight">
                    Hi Ramesh ramesh
                  </div>
                  <div className="text-sm text-neutral-600">
                    <span>⚙️</span> Profile
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center text-lg">
              <button className="inline-flex items-center gap-1 text-neutral-700">
                <span>🧾</span> Bookings{" "}
                <span className="font-semibold">0</span>
              </button>
            </div>
          </section>

          <section className="mt-6 border-t border-neutral-200">
            <h2 className="text-[22px] md:text-[24px] font-extrabold mb-3 text-center">
              Booking History
            </h2>

            <div className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
              <Table rows={MOCK_ROWS} />
            </div>
          </section>
        </main>
      </div>
      <FooterWide />
    </>
  );
}
