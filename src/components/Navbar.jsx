import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu.jsx";
import { ScrollToTop } from "../utils/constants.jsx";

const Navbar = () => {
  return (
    <>
      <ScrollToTop />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="container-px h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-orange-500" />
            <span className="font-semibold font-sans z-1 ml-[-20px] text-lg">
              {" "}
              Park+
            </span>
          </Link>
          {/*<nav className="hidden md:flex items-center gap-6 ml-60 text-sm">*/}
          {/*    <Link to="#" className="text-neutral-700 hover:text-neutral-900">Storage</Link>*/}
          {/*    /!*<Link to="#" className="text-neutral-700 hover:text-neutral-900">Movers & Packers</Link>*!/*/}
          {/*    <Link to="#" className="text-neutral-700 hover:text-neutral-900">Parking</Link>*/}
          {/*    <Link to="#" className="text-neutral-700 hover:text-neutral-900">Luggage</Link>*/}
          {/*</nav>*/}

          <div className="flex items-center gap-2 ">
            <Link to="#" className="btn-ghost hidden sm:inline-flex">
              List Your Space
            </Link>
          </div>
          {/*<div>*/}
          {/*  <Link to="#" className="btn-primary">*/}
          {/*    Login / Sign up*/}
          {/*  </Link>*/}
          {/*</div>*/}
          <div>
            <AccountMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
