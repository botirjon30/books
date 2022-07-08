import React from "react";
import "../navbar.css"


function NavbarCol(props) {
  return (
    <ul id="column-navbar" className= {props.toggler?"flex flex-col text-end relative z-10":"hidden"}>
      <li className="relative z-10 px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Bosh sahifa</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Nasr</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Nazm</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Maqolalar</li>
      <li className="px-5 py-3 text-gray-400 rounded-lg duration-300 hover:bg-gray-700">Forum</li>
    </ul>
  );
}

export default NavbarCol;
