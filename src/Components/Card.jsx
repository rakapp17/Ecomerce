import React from "react";
import ProductList from "./Product";

function Card(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-[200px] h-[250px] bg-slate-300"
        src={props.image}
        alt=""
      />
      <span className="mt-4 text-center">{props.title}</span>
      <span className="mt-2 font-semibold  text-center mb-6">
        ${props.price}
      </span>
    </div>
  );
}

export default Card;
