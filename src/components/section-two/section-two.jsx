import React, { useContext } from "react";
import { Context } from "../contex";
import Navbar from "../navbar/navbar";

function SectionTwo(props) {
  console.log(props);
  const { orders } = useContext(Context);
  return (
    <div className="flex flex-col w-full h-screen">
        <Navbar />
      {orders &&
        orders.map((item) => (
            <div className="flex w-full border">
                <div className="flex flex-col items-center border w-1/2 border-gray-400">
                    <img src={item.images} className="h-5/6 w-full" />
                    <div className="w-full py-2 px-5 flex flex-col items-start gap-3">
                        <small>Tavallud sanasi va O'lgan sanasi</small>
                        <h1 className="font-satisfy text-5xl">{item.year}</h1>
                        <small>Toshkent,Uzbekistan</small>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}

export default SectionTwo;
{/* <div className="bg-white" key={"aliffdf"}>
<h1>{item.name}</h1>
<img src={item.images} alt="" />
</div> */}