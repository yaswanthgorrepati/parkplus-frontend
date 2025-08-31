import React from "react";
import Navbar from "../components/Navbar.jsx";
import SearchPanel from "../components/SearchPanel.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import ReferBanner from "../components/ReferBanner.jsx";
import DealsStrip from "../components/DealsStrip.jsx";
import ListingsGrid from "../components/ListingsGrid.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import Reviews from "../components/Reviews.jsx";
import FAQ from "../components/FAQ.jsx";
import CityGallery from "../components/CityGallery.jsx";
import ContactCTA from "../components/ContactCTA.jsx";
import FooterWide from "../components/FooterWide.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchPanel />
      <CategoryGrid />
      <ReferBanner />
      <DealsStrip />
      <ListingsGrid />
      <HowItWorks />
      <WhyChoose />
      <Reviews />
      <FAQ />
      <CityGallery />
      <ContactCTA />
      <FooterWide />
    </>
  );
};

export default Home;
