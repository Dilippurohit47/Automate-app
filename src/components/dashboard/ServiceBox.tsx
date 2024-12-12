import Image from "next/image";
import React from "react";

const ServiceBox = () => {
  return (
    <div className="bg-white  shadow-md cursor-pointer max-h-[15rem]  flex flex-col gap-2  rounded-b-md transition-all ease-in-out duration-300   max-w-[16rem] relative group ">
      <div className="absolute transition ease-in duration-200 bg-black opacity-0 group-hover:opacity-80 w-full h-full  group-hover:scale-100 z-10">
        {" "}
      </div>
      <div className="absolute  pointer-events-none   transition ease-in duration-500 px-4  font-bold text-2xl inset-0  z-50 flex items-start justify-center text-white opacity-0 translate-y-[6rem] group-hover:translate-y-0  group-hover:opacity-100 w-full h-full  flex-col">
        <h1> Form Filler </h1>
        <p className="text-gray-400 mt-1  leading-snug font-semibold text-[1rem] ">
          It will fill your form automatically with the help of ai and your
          ptofile just give from link .
        </p>
      </div>
      <div>
        <Image
          src={"/form.jpeg"}
          alt="form-img"
          height={200}
          width={200}
          className="h-[10rem] w-[15rem] rounded-md"
        />
      </div>
      <div className="flex px-3  flex-col gap-0 rounded-md  ">
        <h4 className="text-black  leading-0 text-[1.2rem] font-semibold">
          Automate Form filler
        </h4>
        <p className="text-gray-600 -mt-1  mb-2 font-normal ">
          Fill all your form automatically
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
