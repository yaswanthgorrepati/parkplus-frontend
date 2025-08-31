import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUrlParam } from "./filters/useUrlParams.jsx";

const SpaceBookingDetails = ({
  parkingSpot,
  isCheckOutPage,
  profileComplete,
  handleRequestToBook,
}) => {
  const [sDate, setSDate] = useUrlParam("sDate", "");
  const [eDate, setEDate] = useUrlParam("eDate", "");
  const [paymentType, setPaymentType] = useUrlParam("pType", "full");
  const [price, setPrice] = useState(0);
  const [servicetax, setServicetax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [agree, setAgree] = useState(false);

  const [coupon, setCoupon] = useState("");

  const [requiredSpace, setRequiredSpace] = useUrlParam("rSpace", 1);

  const days = useMemo(() => {
    const a = new Date(sDate);
    const b = new Date(eDate);
    const ms = Math.max(0, b - a);
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  }, [sDate, eDate]);

  const greaterThan30 = days > 30;

  // Enforce rule: monthly only allowed if days > 30
  useEffect(() => {
    if (!greaterThan30 && paymentType === "month") {
      setPaymentType("full");
    }
  }, [greaterThan30, paymentType, setPaymentType]);

  useEffect(() => {
    setPaymentType("full");
    setRequiredSpace(1);
    let p = Number(parkingSpot?.priceUnit?.split("/")[0]).toFixed(2);
    let sTPrice = (p * 0.1).toFixed(2);
    let tPrice = (Number(p) + Number(sTPrice)).toFixed(2);
    setPrice(p);
    setServicetax(sTPrice);
    setTotalPrice(tPrice);
  }, [sDate, eDate, paymentType, price]);

  const canRequest = profileComplete && agree && days > 0;

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.08)] p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-neutral-600">Available Spaces</div>
        <div className="text-sm text-neutral-600">Price</div>
      </div>
      <div className="flex items-center justify-between font-semibold">
        <div>{parkingSpot?.available}</div>
        <div>{parkingSpot?.priceUnit}</div>
      </div>

      <div className="mt-4">
        <div className="text-sm text-neutral-600">
          Select booking duration
          <span className="block text-[11px] opacity-80">
            (Start Date → End Date)
          </span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <input
            type="date"
            className="h-11 rounded-xl border border-neutral-300 px-3"
            value={sDate}
            onChange={(e) => setSDate(e.target.value)}
          />
          <input
            type="date"
            className="h-11 rounded-xl border border-neutral-300 px-3"
            value={eDate}
            onChange={(e) => setEDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm text-neutral-700 font-medium pr-2">
          Required spaces
        </label>
        <input
          type="number"
          value={requiredSpace}
          min={1}
          max={parkingSpot?.available}
          onChange={(e) => setRequiredSpace(e.target.value)}
          className="mt-2 h-11 rounded-xl border border-neutral-300 px-3 w-24"
        />
        <div className="mt-2 text-[11px] text-neutral-500">
          Available booking spaces: 1
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="pay"
            checked={paymentType === "full"}
            onChange={() => setPaymentType("full")}
          />{" "}
          Full Payment
        </label>
        <label
          className={`flex items-center gap-2 ${greaterThan30 ? "" : "text-neutral-500"}`}
        >
          <input
            type="radio"
            name="pay"
            checked={paymentType === "month"}
            disabled={!greaterThan30}
            onChange={() => setPaymentType("month")}
          />{" "}
          Monthly payments
        </label>
        <p className="text-[11px] text-neutral-500">
          (Applicable for bookings of more than 30 days)
        </p>
      </div>

      {isCheckOutPage ? (
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <input
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon"
            className="h-11 rounded-xl border border-neutral-300 px-3"
          />
          <button className="h-11 px-4 rounded-xl bg-neutral-200 text-neutral-800 font-medium">
            Apply
          </button>
          <button className="col-span-2 h-10 rounded-xl bg-neutral-100 text-neutral-700 text-sm">
            View more coupons
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="mt-4 border-t border-neutral-200 pt-3 text-sm">
        <div className="flex items-center justify-between py-1">
          <span>Parking space rent</span>
          <span>₹{price}</span>
        </div>
        <div className="flex items-center justify-between py-1">
          <span>Service fees & Taxes</span>
          <span>₹ {servicetax}</span>
        </div>
        <div className="flex items-center justify-between py-2 font-semibold border-t mt-2">
          <span>Total rent</span>
          <span className="text-emerald-600">₹ {totalPrice}</span>
        </div>
      </div>

      {!isCheckOutPage ? (
        <Link
          to={`/checkout/${parkingSpot?.id}?${new URLSearchParams(window.location.search).toString()}`}
        >
          <button className="mt-3 h-11 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
            Proceed
          </button>
        </Link>
      ) : (
        ""
      )}

      {isCheckOutPage ? (
        <>
          <label className="mt-4 flex items-center gap-2 text-sm text-neutral-700">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            I agree to the{" "}
            <a className="underline" href="#">
              terms and conditions
            </a>
          </label>
          <button
            disabled={!canRequest}
            className={`mt-3 h-11 w-full rounded-xl font-semibold
                  ${canRequest ? "bg-red-500 hover:bg-red-600 text-white" : "bg-neutral-200 text-neutral-500 cursor-not-allowed"}`}
            onClick={() => handleRequestToBook(Number(totalPrice).toFixed(2))}
          >
            Request to book
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SpaceBookingDetails;
