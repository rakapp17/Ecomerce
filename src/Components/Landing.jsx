import React from "react";

function Landing() {
  return (
    <>
      <div className="px-8 flex container w-full h-[500px] bg-slate-100 mt-3">
        <div className="w-1/2 self-center items-center justify-item-center xl:pl-44">
          <h3 className="font-medium text-sm mb-2 ml-1 text-slate-700">
            SHOP ONLINE EXCLUSIVE
          </h3>
          <h1 className="text-5xl font-serif mb-12 text">
            Body <span className="text-teal-500">HandBags</span>
          </h1>
          <button className="bg-white border rounded-md px-7 py-2 text-sm w-auto font-semibold text-slate-600">
            SHOP NOW{" "}
          </button>
        </div>
        <div className="w-1/2 relative">
          <img
            className="absolute w-[300px] h-[300px] top-[16%]   z-10 xl:left-[25%]"
            src="../src/assets/tas.png"
            alt=""
          />
          <img
            className="absolute w-[300px] h-[300px] top-[16%] -z-6 xl:left-[25%]"
            src="../src/assets/bulet.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
{
  /* <div className="flex justify-between">
          <div className="h-full w-1/2 flex flex-col items-center justify-center justify-items-center px-4 py-2">
            <div className="self-center items-center justify-center">
              <h3 className="font-medium text-sm mb-2 ml-1 text-slate-700">
                SHOP ONLINE EXCLUSIVE
              </h3>
              <h1 className="text-5xl font-serif mb-12 text">
                Body <span className="text-teal-500">HandBags</span>
              </h1>
              <button className="bg-white border rounded-md px-7 py-2 text-sm w-auto font-semibold text-slate-600">
                SHOP NOW{" "}
              </button>
            </div>
          </div>
          
        </div> */
}
