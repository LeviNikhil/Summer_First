import React from "react";

function Card({ data, handleclick, index }) {
  const { image, artist, added, name } = data;

  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative">
      <div className="w-23 h-23 bg-orange-600 rounded-md">
        <img className="w-full h-full object-cover" src={image}></img>
      </div>
      <div className="">
        <h3 className="text-xl leading-none font-semibold text-rose-500 ">
          {name}
        </h3>
        <h6 className="text-sm text-lime-500">{artist}</h6>
      </div>
      <button
        onClick={() => handleclick(index)}
        className={`px-4  whitespace-nowrap ${
          added === false ? "bg-orange-600" : "bg-teal-600"
        } absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white text-sm rounded-full`}
      >
        {added === true ? "Added" : "Add to Favourites"}
      </button>
    </div>
  );
}

export default Card;
