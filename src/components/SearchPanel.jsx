import React, { useContext, useState } from "react";
import ServiceTabs from "./ServiceTabs.jsx";
import ServiceContext from "../utils/ServiceContext.jsx";
import { SERVICE } from "../utils/constants.jsx";
import { useNavigate } from "react-router-dom";

const SearchPanel = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState({
    location: false,
    startDate: false,
    endDate: false,
  });

  // console.log(error);
  const { serviceName } = useContext(ServiceContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    let formError = {
      location: false,
      startDate: false,
      endDate: false,
    };
    // debugger;
    let isFromValid = true;
    if (location === null || location.length === 0) {
      formError.location = true;
      isFromValid = false;
    }
    if (startDate === null || startDate.length === 0) {
      formError.startDate = true;
      isFromValid = false;
    }
    if (endDate === null || endDate.length === 0) {
      formError.endDate = true;
      isFromValid = false;
    }

    setError((prevError) => {
      return { ...prevError, ...formError };
    });

    // console.log("form error " + JSON.stringify(formError));

    if (!isFromValid) {
      return;
    }
    // console.log(isFromValid);

    const params = new URLSearchParams();
    params.set("text", location);
    params.set("sDate", startDate);
    params.set("eDate", endDate);

    // console.log(params.toString());

    navigate(`/search?${params.toString()}`);
  };

  return (
    <section className="h-100 bg-neutral-100  bg-[url('https://aadefault.s3.ap-south-1.amazonaws.com/backgrounds/parking_bg.webp')] bg-cover bg-center bg-no-repeat">
      <div className="container-px py-6 md:py-10">
        <ServiceTabs />

        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg mt-[-15px]">
          <h2 className="text-center text-xl font-semibold text-gray-800">
            {SERVICE.get(serviceName).searchText}
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <input
              type="text"
              placeholder="Search city, state, pin code etc."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 ${error.location ? "border-2 border-red-400" : ""}`}
            />
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={`border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 ${error.startDate ? "border-2 border-red-400" : ""}`}
            />
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={`border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 ${error.endDate ? "border-2 border-red-400" : ""}`}
            />

            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-red-500 text-white  hover:bg-red-600 rounded-lg"
            >
              Search
            </button>
          </div>
          {error.startDate || error.endDate || error.location ? (
            <div className="mt-3 text-sm text-rose-600">
              * Please fill the highlighted details
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPanel;
