import React from "react";
import FilterSidebar from "../components/filters/FilterSidebar.jsx";
import ListingCard from "../components/ListingCard.jsx";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import { getParkingSpots, SERVICE } from "../utils/constants.jsx";

export default function ListingPage() {
  const [filterOptions, setFilterOptions] = React.useState();
  console.log(filterOptions?.sDate);
  const [listingPrakingSpaces, setListingPrakingSpaces] = React.useState([
    {
      id: 1,
      title: "Parking space in Banjara Hills, Hyderabad, Telangana, India",
      address: "Banjara Hills, Hyderabad, Telangana, India",
      badges: ["Floor: 2", "Floor: 1"],
      price: 132,
      priceUnit: "303 /day/space",
      available: 5,
      images: [
        "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60",
      ],
      vehicleTypes: ["Sedan", "Bus", "Truck", "Tempo"],
      amenities: [
        "Covered Parking",
        "CCTV surveillance",
        "Sufficient lighting",
      ],
      accessibility: "24X7 Access",
      host: {
        name: "Meena",
        avatar:
          "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
        details: ["Email address", "Phone number", "Govt ID"],
      },
      parkingSpaceType: ["covered"],
      facilityType: ["public", "commercial"],
    },
  ]);
  const filterListingData = (data) => {
    // console.log(data);
    setFilterOptions(data);

    //call the  backend call and pass the data to get the list card data
    let res = getParkingSpots(
      data.text1,
      data.sDate,
      data.eDate,
      data.vcl,
      data.space1,
      data.fac,
    );

    /*
  location,
  startDate,
  endDate,
  vehicleType,
  parkingSpaceType,
  facilityType,
 */
    // console.log(res);
    setListingPrakingSpaces(res);
  };

  return (
    <>
      <Navbar />
      <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
        <main className="container-px py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
            <aside>
              <FilterSidebar filterListingData={filterListingData} />
            </aside>

            <section>
              <div className="mb-4 text-sm text-neutral-600">
                <span className="font-semibold">Total Parkings</span> (
                {/*{SERVICE.get("parking").totalParking.length})*/}
                {listingPrakingSpaces.length})
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {/*{SERVICE.get("parking").totalParking.map((i) => (*/}
                {/*  <ListingCard key={i.id} item={i} />*/}
                {/*))}*/}

                {listingPrakingSpaces.map((i) => (
                  <ListingCard
                    key={i.id}
                    item={i}
                    sDate={filterOptions?.sDate}
                    eDate={filterOptions?.eDate}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>

        <FooterWide />
      </div>
    </>
  );
}
