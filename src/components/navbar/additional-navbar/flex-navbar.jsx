import React from "react";
import { Link } from "react-router-dom";

function NavbarFlex() {
  return (
    <>
      <ul className="hidden md:flex gap-5 ml-auto mr-10">
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          <Link to="/">Bosh sahifa</Link>
        </li>
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Nasr
        </li>
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Nazm
        </li>
        <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          Maqolalar
        </li>
        {/* <li className="px-2 py-1 text-gray-300 rounded-lg duration-300 hover:text-yellow-500">
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </>
  );
}

export default NavbarFlex;
