import React, { useContext } from "react";
import { Context } from "../contex";
import Navbar from "../navbar/navbar";

function SectionTwo(props) {
  console.log(props);
  const { orders } = useContext(Context);
  return (
    <div className="flex flex-col w-full">
        <Navbar />
      {orders &&
        orders.map((item,key) => (
            <div key={key} className="flex w-full min-h-[90vh] border">
                <div className="pr-10 flex flex-col items-center justify-between border w-1/2 h-full border-gray-400">
                    <img src={item.images} className="h-2/3 w-full object-contain " />
                    <div className=" w-full py-2 px-5 flex flex-col items-start gap-3">
                        <small>Tavallud sanasi va O'lgan sanasi</small>
                        <h1 className="font-satisfy text-5xl mt-4">{item.year}</h1>
                        <small>Toshkent,Uzbekistan</small>
                    </div>
                </div>
                <div className="border py-10 pl-5 flex flex-col items-start w-1/2 h-full ">
                    <h1 className="text-6xl font-satisfy">{item.name}</h1>
                    <p className="flex-wrap mt-5">{item.desc}</p>
                    <p>{item.books}</p>
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