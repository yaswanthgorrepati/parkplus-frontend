import React, { useEffect, useMemo, useState } from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import ListingCard from "../components/ListingCard.jsx";
import { useParams } from "react-router-dom";
import {
  getParkingSpotsById,
  getSimilarBookings,
} from "../utils/constants.jsx";
import { useUrlParam } from "../components/filters/useUrlParams.jsx";
import SpaceBookingDetails from "../components/SpaceBookingDetails.jsx";

const Dot = () => (
  <span className="inline-block h-[6px] w-[6px] rounded-full bg-emerald-500 mr-2" />
);

export default function SpaceDetails() {
  const [parkingSpot, setParkingSpot] = useState(null);
  const { id } = useParams();
  const [sDate] = useUrlParam("sDate", "");
  const [eDate] = useUrlParam("eDate", "");

  const [similarBookings, setSimilarBookings] = useState([]);

  useEffect(() => {
    const res = getParkingSpotsById(id);
    setParkingSpot(res[0]);
    setSimilarBookings(getSimilarBookings(res[0]?.address));
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="bg-neutral-50 text-neutral-900">
        <div className="container-px">
          <div className="flex items-center justify-between pt-6">
            <div>
              <h1 className="text-[40px] leading-tight font-extrabold tracking-tight">
                {parkingSpot?.host?.name}'s Parking Space
              </h1>
              <div className="mt-2 text-sm text-neutral-600 flex items-center gap-2">
                <span>📍</span>
                <span className="font-medium">{parkingSpot?.address}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="h-8 px-8 rounded-xl border border-red-500 bg-white hover:bg-red-100 text-red-500">
                ♡ Add to Wishlist
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-6 mt-5">
            <section>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="col-span-2 lg:col-span-3 rounded-2xl overflow-hidden">
                  {parkingSpot?.images?.length > 0 && (
                    <img
                      src={parkingSpot.images[0]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="col-span-1 lg:col-span-1 grid grid-rows-4 gap-3">
                  {parkingSpot?.images?.slice(1, 5).map((src) => (
                    <div
                      key={src}
                      className="rounded-2xl overflow-hidden relative"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="mt-6 text-2xl font-bold leading-snug max-w-3xl">
                {parkingSpot?.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {parkingSpot?.badges?.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-md bg-neutral-100 text-neutral-700 px-3 py-1 text-xs font-semibold border border-neutral-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm text-neutral-500">
                parking details will be shared later
              </p>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Vehicle Types Allowed</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                {parkingSpot?.vehicleTypes?.map((v) => (
                  <div key={v} className="flex items-center">
                    <Dot /> {v}
                  </div>
                ))}
              </div>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Amenities</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                {parkingSpot?.amenities?.map((v) => (
                  <div key={v} className="flex items-center">
                    <Dot /> {v}
                  </div>
                ))}
              </div>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Accessibility</h3>
              <div className="mt-2 text-sm font-semibold">
                {parkingSpot?.accessibility}
              </div>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Hosted by</h3>
              <div className="mt-3 bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-4 flex items-center gap-4">
                <img
                  src={parkingSpot?.host?.avatar}
                  alt={parkingSpot?.host?.name}
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold">{parkingSpot?.host?.name}</div>
                  <div className="mt-1 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-600">
                    {parkingSpot?.host?.details.map((d) => (
                      <span key={d} className="inline-flex items-center gap-2">
                        <span className="h-[6px] w-[6px] rounded-full bg-emerald-500 inline-block" />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <aside className="lg:sticky lg:top-20 h-fit">
              <SpaceBookingDetails parkingSpot={parkingSpot} />
              <div className="mt-4 rounded-2xl bg-neutral-100 border border-neutral-200 p-4 text-sm">
                <div className="font-semibold mb-1">Needs Host approval</div>
                <p className="text-neutral-600">
                  The host has to approve customer booking request to complete
                  the transaction
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-10">
            <h3 className="text-center text-3xl font-extrabold text-neutral-500">
              Similar spaces
            </h3>
            <hr className="mt-1 mb-6 border-neutral-200" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {similarBookings.map((item) => (
                <ListingCard
                  key={item.id}
                  item={item}
                  sDate={sDate}
                  eDate={eDate}
                />
              ))}
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
      <FooterWide />
    </>
  );
}
