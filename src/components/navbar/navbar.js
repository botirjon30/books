import React, { useState } from "react";
import NavbarCol from "./additional-navbar/column-navbar";
import NavbarFlex from "./additional-navbar/flex-navbar";
import UserProfile from "./additional-navbar/userProfile";
import "./navbar.css";
//assets
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="w-full h-20 flex items-center justify-between px-10 py-2 border-b border-gray-700">
      <h1 className="font-satisfy text-2xl">Badiiyat</h1>
      <div className="border-1 absolute top-7 right-20 flex flex-col items-end pr-5 md:hidden">
        <button
          onClick={() => settoggle(!toggle)}
          className="pb-8 px-1 border-none outline-none"
        >
          <span>
            {toggle?<CloseRoundedIcon />:<MenuRoundedIcon />}
          </span>
        </button>
        <NavbarCol toggler={toggle} />
      </div>
      <NavbarFlex />
      <UserProfile />
    </div>
  );
}
export default Navbar;
