import React from "react";

const Card = ({ image, name, bio }) => {
  return (
    <div className=" h-[380px] border-b-4  border-indigo-700 bg-slate-300 mt-10 rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-slate-800/50">
      <div className=" bg-indigo-700   h-[200px] border-b-8 flex justify-center items-center border-b-slate-700 overflow-hidden   text-black w-full rounder-b-xxl ">
        <img src={image} alt="" className="w-[150px] h-[150px] rounded-full" />
      </div>
      <div className="my-4">
        <p className=" text-center font-bold text-2xl ">{name}</p>
      </div>
      <div className="my-4">
        <p className=" text-center text-lg ">{bio}</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="mx-10 px-10 py-2 rounded-xl bg-blue-800 hover:bg-indigo-400 hover:text-blue-900 font-bold  text-white text-xl ">
          Click
        </button>
      </div>
    </div>
  );
};

export default Card;
