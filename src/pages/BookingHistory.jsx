import React, {useEffect} from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import {BOOKING_HISTORY_URL, GET_TOKEN, LISTING_SEARCH_URL} from "../utils/constants.jsx";

export default function BookingHistory() {

    const [bookingHistory, setBookingHistory] = React.useState([]);
    useEffect(() => {

        fetch(BOOKING_HISTORY_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GET_TOKEN()}`,
            },
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch booking history");
            }
            return res.json();
        }).then((data) => {
            console.log(data.content);
            setBookingHistory(data.content || []);
        }).catch((err) => {
            console.log("error", err);
        })
    }, []);

    return (
        <>
            <Navbar/>
            <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
                <main className="container-px py-6">
                    {/* Profile card */}
                    <section
                        className="bg-white rounded-2xl justify-between border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-4 md:p-5 flex ">
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
                                <span>🧾</span> Bookings{" :"}
                                <span className="font-semibold">{bookingHistory?.length}</span>
                            </button>
                        </div>
                    </section>

                    <section className="mt-6 border-t border-neutral-200">
                        <h2 className="text-[22px] md:text-[24px] font-extrabold mb-3 text-center">
                            Booking History
                        </h2>
                        <div className="space-y-6">
                            {bookingHistory.map((b) => (
                                <div
                                    key={b.bookingId}
                                    className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] overflow-hidden">

                                    <div
                                        className="flex flex-wrap justify-between items-center border-b border-neutral-300 px-4 py-3 text-sm">
                                        <div>
                                            <div className="text-neutral-600">
                                                ORDER PLACED{" "}
                                                <span className="font-medium">{b.startDate}</span>
                                            </div>
                                            <div className="text-neutral-600">
                                                TOTAL{" "}
                                                <span className="font-medium">₹{(b.totalCents / 100).toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-neutral-600">
                                                BOOKING REF:{" "}
                                                <span className="font-medium">{b.referenceCode}</span>
                                            </div>
                                            <div className="text-neutral-600">
                                                STATUS:{" "}
                                                <span
                                                    className={`font-medium ${
                                                        b.status === "PAID" ? "text-emerald-600" : "text-amber-600"}`}>
                                                    {b.status}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap p-4 gap-4">
                                        <img
                                            src={b.listing.imgUrl}
                                            alt={b.listing.title}
                                            className="w-28 h-28 rounded-lg object-cover"/>
                                        <div className="flex-1 min-w-[250px]">
                                            <h2 className="font-medium">{b.listing.title}</h2>
                                            <p className="text-sm text-neutral-600">
                                                {b.listing.city}, {b.listing.state}
                                            </p>
                                            <p className="text-sm mt-1">
                                                Dates: {b.startDate} → {b.endDate}
                                            </p>
                                            <p className="text-sm">
                                                Spaces: <span className="font-medium">{b.spacesQty}</span>
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-2 text-sm">
                                            <button className="mt-3 h-11 w-full rounded-xl font-semibold bg-orange-600 hover:bg-red-600 text-gray-900 hover:text-neutral-100 hover:cursor-pointer">
                                                Cancel / Modify
                                            </button>
                                            <button className="text-sm font-semibold text-gray-900 hover:bg-green-700 hover:text-neutral-100 bg-green-400 p-3 rounded-lg hover:cursor-pointer">
                                                Leave feedback
                                            </button>
                                        </div>
                                    </div>

                                    <div className="border-t border-neutral-300 px-4 py-3 text-sm text-neutral-600">
                                        Payment:{" "}
                                        <span className="font-medium">
                  {b.payment?.status || "Not Paid"}
                </span>{" "}
                                        | Order ID: {b.payment?.orderId} | Payment ID:{" "}
                                        {b.payment?.paymentId || "-"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
            <FooterWide/>
        </>
    );
}
