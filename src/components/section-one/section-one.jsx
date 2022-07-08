import React, { useContext, useState } from "react";
import Navbar from "../navbar/navbar";
import SectionOneSwiper from "./section-one-assets/section-one-swiper/swiper";
import "./section-one.css";
import jadidAdabiyoti from "../../data";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import cardImage from "../assets/images/sectionOneCardImage.png";
import { Link } from "react-router-dom";
import { Context } from "../contex";
import Tablar from "./cardtab/tabs";
import Card from "./cardtab/card";
import Card1 from "./cardtab/Alltab";
import SectionTwo from "../section-two/section-two";

function SectionOne() {
  const [search, setSearch] = useState("");
  const {orders, setOrders} = useContext(Context);
  const qidiruv = (e) => {
    setSearch(e.target.value);
  };
  let DataSearch = jadidAdabiyoti.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });
  return (
    <div id="sectionOne" className="w-full flex flex-col items-center ">
      <Navbar />
      <div className="mt-10  w-11/12">
        <SectionOneSwiper />
        <div
          id="search-div"
          className="py-8 px-2 w-11/12 relative -top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end gap-5 sm:px-7 md:px-14 md:py-14 lg:px-28"
        >
          <h1 className="font-satisfy text-3xl">Qidirish</h1>
          <form
            action="search"
            className="w-full flex flex-col items-center gap-5 md:flex-row "
          >
            <input
              onChange={qidiruv}
              maxLength={30}
              value={search}
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              className="w-60 py-2 px-5 rounded-lg bg-gray-600 border-none outline-none sm:w-11/12"
            />
            <button className=" rounded-lg bg-orange-400 py-1 px-7 font-satisfy text-xl">
              Qidirish
            </button>
          </form>
        </div>
        <div className="w-full h-[600px] flex flex-col items-center">
          <h1 className="font-satisfy text-3xl text-center">
            Asosiy kategoriyalar
          </h1>
          <Tablar />
          <Link to="/SectionTwo">
                <Card />
                <Card1 />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
