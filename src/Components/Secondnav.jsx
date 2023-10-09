import React from "react";

function Secondnav() {
  return (
    <>
      <div className="flex justify-center gap-8 mt-10 font-semibold text-slate-600">
              <a className="hover:text-teal-500 hover:underline hover:duration-300" href="">All Item</a>
              <a className="hover:text-teal-500 hover:underline hover:duration-300" href="">Best Seller</a>
              <a className="hover:text-teal-500 hover:underline hover:duration-300" href="">New Products</a>
            <a className="hover:text-teal-500 hover:underline hover:duration-300" href="">Sales Products</a>
      </div>
    </>
  );
}

export default Secondnav;
