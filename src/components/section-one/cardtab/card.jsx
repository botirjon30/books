import * as React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contex";
import "../section-one.css"

export default function Card(props) {
  const { orders, setOrders } = useContext(Context);
  const navigate = useNavigate()
  let name = props.name;
  let images = props.img;
  let year = props.year
  let desc = props.des
  let arr = [];
  const Yubor = () => {
    arr.push(...orders, { name, images, year, desc });
    setOrders(arr);
    navigate('/sectionTwo')
  };

  return (
    <div id="card" onClick={Yubor} className="card ml-6 w-[130px] h-[160px] flex flex-col rounded-xl text-center pb-3 gap-1">
      <img src={images} className="object-contain" />
      <h6 className="text-sm" >{name}</h6>
      <small>{year}</small>
    </div>
  );
}
