import React, { useState } from "react";
import { Search, Person, X } from "react-bootstrap-icons";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [offerBox, setOfferBox] = useState(true);
  return (
    <>
      <nav>
        <h1 className="logo-text">NextFlix</h1>
        <div className="flex align">
          <h1 className="nav-items">Home</h1>
          <h1 className="nav-items">TV Shows</h1>
          <h1 className="nav-items">Movies</h1>
          <h1 className="nav-items">Kids</h1>
          <div className="nav-search-bar">
            <Search className="" color="white" />
          </div>
          <div
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            className="my-account"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <Person color="white" />
          </div>
          {openDropdown && (
            <div
              class="absolute right-2 z-10 mt-[42px] w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <p
                  class="text-gray-700 block px-4 mt-3 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  My account
                </p>
                <p
                  class="text-gray-700 block px-4 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Wishlist
                </p>
              </div>
              <div class="py-1" role="none">
                <p
                  class="text-gray-700 block px-4 mt-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  Help Center
                </p>
              </div>
              <div class="py-1" role="none">
                <p
                  class="text-gray-700 block px-4 mt-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-6"
                >
                  Sign out Nextflix
                </p>
              </div>
            </div>
          )}
        </div>
      </nav>
      {offerBox && (
        <div className="nav-bottom-box">
          <p>
            We have a limited offer for you, subscribe and choose a monthly
            pack.
          </p>
          <X
            onClick={() => setOfferBox(false)}
            className="mr-1 cursor-pointer"
            color="white"
          />
        </div>
      )}
      <BottomNavbar />
    </>
  );
};

export default Navbar;
