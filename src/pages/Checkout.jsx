import React, {useEffect, useMemo, useState} from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import VehicleModal from "../components/VehicleModal.jsx";
import {openRazorpayCheckout} from "../utils/razorpay.js";
import {
    BOOKING_CREATE_URL,
    CREATE_ORDER_URL, GET_TOKEN,
    getParkingSpotsById,
    LISTING_BY_ID_URL,
    VERIFY_SIGNATURE_URL
} from "../utils/constants.jsx";
import SpaceBookingDetails from "../components/SpaceBookingDetails.jsx";
import FullPageLoader from "../components/FullPageLoader.jsx";

export default function Checkout() {
    const [freq, setFreq] = useState("");
    const [vehicles, setVehicles] = useState([]);
    const [vehicleOpen, setVehicleOpen] = useState(false);
    const [emailDone] = useState(true);
    const [phoneDone, setPhoneDone] = useState(false);
    const [profileDone, setProfileDone] = useState(false);
    const [bookingCreate, setBookingCreate] = useState({});

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const {id} = useParams();
    const [parkingSpot, setParkingSpot] = useState(null);


    const profileComplete = emailDone && phoneDone && profileDone;

    useEffect(() => {
        // console.log(URL);
        fetch(`${LISTING_BY_ID_URL}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GET_TOKEN()}`,
            },
        }).then((res) => {
            console.log(res);
            if (!res.ok) {
                throw new Error("Failed to fetch listings");
            }
            return res.json();
        }).then((data) => {
            // console.log("fertching again");
            console.log(data);
            setParkingSpot(data);
        }).catch((err) => {
            console.log("error", err);
        })
    }, [id]);

    console.log(vehicles.map(v => {
        return {vehicleType: v.type, registrationNumber: v.registrationNumber}
    }));


    async function handleRequestToBook(sDate, eDate, requiredSpace) {

        setLoading(true);

        try {
            //call the booking create api
            const cb = await createBooking(sDate, eDate, requiredSpace);
            console.log(cb);

            //creating the order
            const co = await createOrder(cb.id);
            console.log(co);

            //razor payment
            const razorPayPayment = createRazorPayment(co.orderId, co.amount);
            console.log(razorPayPayment);

        } finally {
            setLoading(false);
        }


    }


    async function createBooking(sDate, eDate, requiredSpace) {
        try {
            const response = await fetch(BOOKING_CREATE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + GET_TOKEN(),
                },
                body: JSON.stringify({
                    listingId: parkingSpot.id,
                    startDate: sDate,
                    endDate: eDate,
                    spacesQty: requiredSpace,
                    vehicles: vehicles.map(v => {
                        return {vehicleType: v.type, registrationNumber: v.registrationNumber}
                    }),
                }),
            })
            if (!response.ok) {
                throw new Error("Failed to create booking: " + response.status);
            }

            const data = await response.json();
            return data;
        } catch (err) {
            console.error("Error creating booking:", err);
            alert("Error: " + err.message);
        }
        return null;
    }

    const createOrder = async (bId) => {
        try {
            const response = await fetch(CREATE_ORDER_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + GET_TOKEN(),
                },
                body: JSON.stringify({
                    bookingId: bId
                }),
            })
            if (!response.ok) {
                throw new Error("Failed to create order: " + response.status);
            }

            const data = await response.json();
            // console.log("Order created:", data);
            return data;
        } catch (err) {
            console.error("Error creating order:", err);
            alert("Error: " + err.message);
        }
        return null;
    }

    const createRazorPayment = async (oId, amountInPaise) => {
        try {
            await openRazorpayCheckout({
                amountInPaise,
                orderId: oId,
                customer: {
                    name: "Ramesh",
                    email: "ramesh@example.com",
                    phone: "9999999999",
                },
                notes: {bookingId: "DEV-" + Date.now()},
                onSuccess: (resp) => {
                    // console.log(resp);
                    verifySignature(resp.razorpay_order_id, resp.razorpay_payment_id, resp.razorpay_signature);

                },
                onClose: () => console.log("Checkout closed"),
            });
        } catch (e) {
            console.error(e);
            alert("Unable to start payment. Please try again.");
        }
    }

    const verifySignature = async (oId, pId, sign) => {
        try {
            const response = await fetch(VERIFY_SIGNATURE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + GET_TOKEN(),
                },
                body: JSON.stringify({
                    orderId: oId,
                    paymentId: pId,
                    signature: sign
                }),
            })
            if (!response.ok) {
                throw new Error("Failed to verify signature: " + response.status);
            }

            const data = await response.json();
            console.log(data?.ok)
            if (data?.ok) {
                navigate("/user/bookings");
            } else {
                console.error("Signature verification failed");
            }
        } catch (err) {
            console.error("Error verify signature:", err);
            alert("Error: " + err.message);
        }
        return null;
    }

    return (
        <>
            {loading && <FullPageLoader/>}
            <Navbar/>
            <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
                <main className="container-px py-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to={`/space/${parkingSpot?.id}`}>
                            <button className="h-9 w-9 grid place-content-center rounded-full hover:bg-neutral-200">
                                <span className="text-2xl">く</span>
                            </button>
                        </Link>
                        <h1 className="text-[28px] md:text-[32px] font-semibold">
                            Checkout
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_380px] gap-6 mt-4">
                        <div className="space-y-5">
                            <section
                                className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                                <header className="px-5 py-4 border-b border-neutral-200 font-semibold">
                                    Booking details
                                </header>

                                <div className="p-5 space-y-5">
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-2">
                                            How often you want to access your space?{" "}
                                            <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative inline-block">
                                            <select
                                                value={freq}
                                                onChange={(e) => setFreq(e.target.value)}
                                                className="appearance-none h-11 w-64 rounded-xl border border-neutral-300 bg-white px-3 pr-9 outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-500"
                                            >
                                                <option value="">Select frequency</option>
                                                <option>Daily</option>
                                                <option>Weekly</option>
                                                <option>Monthly</option>
                                            </select>
                                            <span
                                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-3/5 text-neutral-500 text-2xl">
                        ▾
                      </span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex flex-col  justify-between">
                                            <div className="flex row justify-between">
                                                <div>
                                                    <div className="font-semibold">List of vehicles</div>
                                                    <div className="text-sm text-neutral-600">
                                                        Please select which vehicle you want to park{" "}
                                                        <span className="text-red-500">*</span>
                                                    </div>
                                                </div>
                                                <button
                                                    className="text-sm font-semibold text-neutral-700 hover:bg-green-600 hover:text-white bg-green-400 p-3 rounded-lg"
                                                    onClick={() => setVehicleOpen(true)}
                                                >
                                                    Add vehicle
                                                </button>
                                            </div>
                                            <div className="mt-3 rounded-xl border border-neutral-200 overflow-hidden">
                                                {vehicles.length === 0 ? (
                                                    <button
                                                        onClick={() => setVehicleOpen(true)}
                                                        className="h-11 w-full text-left px-4 text-neutral-600 hover:bg-neutral-50"
                                                    >
                                                        <span className="mr-2">＋</span>Add vehicle details
                                                    </button>
                                                ) : (
                                                    <div className="divide-y">
                                                        <div
                                                            className="grid grid-cols-[140px_1fr_160px_80px] px-4 py-3 text-sm font-medium text-neutral-500 bg-neutral-50">
                                                            <span>Select</span>
                                                            <span>Registration No</span>
                                                            <span>Vehicle type</span>
                                                            <span></span>
                                                        </div>
                                                        {vehicles.map((v) => (
                                                            <div
                                                                key={v.id}
                                                                className="grid grid-cols-[140px_1fr_160px_80px] items-center px-4 py-3 text-sm"
                                                            >
                                                                <input type="checkbox" className="h-5 w-5"/>
                                                                <span className="font-semibold">{v.reg}</span>
                                                                <span>{v.type}</span>
                                                                <button
                                                                    className="text-rose-600 hover:underline"
                                                                    onClick={() =>
                                                                        setVehicles((list) =>
                                                                            list.filter((x) => x.id !== v.id),
                                                                        )
                                                                    }
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section
                                className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                                <header className="px-5 py-4 border-b border-neutral-200 font-semibold">
                                    Profile overview
                                </header>

                                <div className="p-5 space-y-3">
                                    <ProfileItem
                                        ok={emailDone}
                                        title="Email address"
                                        desc="ramesh@gmail.com"
                                        actionLabel="Edit"
                                    />

                                    <ProfileItem
                                        ok={phoneDone}
                                        title="Phone number"
                                        desc="Please add phone number"
                                        actionLabel="Add"
                                        onAction={() => setPhoneDone(true)}
                                    />

                                    <ProfileItem
                                        ok={profileDone}
                                        title="Personal details"
                                        desc="Ramesh ramesh"
                                        actionLabel="Add"
                                        onAction={() => setProfileDone(true)}
                                    />
                                </div>
                            </section>
                        </div>

                        <aside className="lg:sticky lg:top-20 h-fit">
                            <div
                                className="bg-white rounded-2xl border border-neutral-200 p-3 flex items-center gap-3 shadow-[0_8px_24px_rgba(2,6,23,0.06)]">
                                <img
                                    src={parkingSpot?.images[0]}
                                    alt=""
                                    className="h-16 w-16 rounded-lg object-cover"
                                />
                                <div className="flex-1">
                                    <div className="font-semibold truncate">
                                        {parkingSpot?.host?.name}'s Parking Space
                                    </div>
                                    <div className="text-xs text-neutral-500">Host approval</div>
                                </div>
                            </div>

                            <SpaceBookingDetails
                                parkingSpot={parkingSpot}
                                isCheckOutPage={true}
                                profileComplete={profileComplete}
                                handleRequestToBook={handleRequestToBook}
                            />
                            {!profileComplete && (
                                <div
                                    className="mt-3 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl p-3 text-sm">
                                    Please complete your profile to continue.
                                </div>
                            )}
                        </aside>
                    </div>
                </main>
            </div>
            <FooterWide/>
            <VehicleModal
                open={vehicleOpen}
                onClose={() => setVehicleOpen(false)}
                onSave={(veh) => setVehicles((prev) => [...prev, veh])}
            />
        </>
    );
}

function Row({label, value}) {
    return (
        <div className="flex items-center justify-between py-1">
            <span>{label}</span>
            <span>{value}</span>
        </div>
    );
}

function ProfileItem({ok, title, desc, actionLabel, onAction}) {
    return (
        <div className="rounded-xl border border-neutral-200 p-3 flex items-center gap-3">
            <div
                className={`h-9 w-9 rounded-full grid place-content-center text-white
        ${ok ? "bg-emerald-500" : "bg-rose-500"}`}
                aria-hidden
            >
                {ok ? "✓" : "!"}
            </div>
            <div className="flex-1">
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-neutral-600">{desc}</div>
            </div>
            <button
                className="h-9 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm"
                onClick={onAction}
            >
                {actionLabel}
            </button>
        </div>
    );
}
