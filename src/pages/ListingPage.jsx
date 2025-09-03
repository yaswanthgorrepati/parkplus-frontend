import React, {useState} from "react";
import FilterSidebar from "../components/filters/FilterSidebar.jsx";
import ListingCard from "../components/ListingCard.jsx";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import {
    GET_TOKEN,
    LISTING_SEARCH_URL,
} from "../utils/constants.jsx";

export default function ListingPage() {
    const [filterOptions, setFilterOptions] = React.useState();

    const [listingPrakingSpaces, setListingPrakingSpaces] = React.useState([
        {
            badgeTypes: ['Floor: 1', 'Near Elevator'],
            basePricePerDayPaise: 19900,
            capacitySpaces: 5,
            city: "Pune",
            currency: "INR",
            id: "4c611b65-931e-4542-b2a9-e821ebf2dde7",
            imgUrl: "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60",
            state: "MH",
            title: "Covered Parking near Kharadi",
        }
    ]);

    const [error, setError] = useState(null);

    const filterListingData = (data) => {

        setFilterOptions(data);
        // console.log(new URLSearchParams(window.location.search).toString());
        // console.log(new URLSearchParams().);

        //call the  backend call and pass the data to get the list card data
        // const URL = `${LISTING_SEARCH_URL}?${new URLSearchParams(window.location.search).toString()}`

        const params = new URLSearchParams(window.location.search);

        if (params.has("vcl")) {
            params.set("vehicleTypes", params.getAll("vcl")?.join(","));
            params.delete("vcl")
        }

        if (params.has("space")) {
            params.set("spaceTypes", params.getAll("space")?.join(","));
            params.delete("space")
        }

        if (params.has("fac")) {
            params.set("facilityTypes", params.getAll("fac")?.join(","));
            params.delete("fac")
        }

        if(params.has("text")){
            params.set("city", params.get("text"));
            params.delete("text")
        }

        if(params.has("type")){
            params.set("type", params.get("type").toUpperCase());
        }

        // console.log(URL);
        fetch(`${LISTING_SEARCH_URL}?${params.toString()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${GET_TOKEN()}`,
            },
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch listings");
            }
            return res.json();
        }).then((data) => {
            // console.log("fertching again");
            setListingPrakingSpaces(data.content || []);
        }).catch((err) => {
            console.log("error", err);
            setError(err.message)
        })
    };

    if (error) return <p style={{color: "red"}}>{error}</p>;

    return (
        <>
            <Navbar/>
            <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
                <main className="container-px py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
                        <aside>
                            <FilterSidebar filterListingData={filterListingData}/>
                        </aside>

                        <section>
                            <div className="mb-4 text-sm text-neutral-600">
                                <span className="font-semibold">Total Parkings</span> (
                                {listingPrakingSpaces.length})
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
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

                <FooterWide/>
            </div>
        </>
    );
}
