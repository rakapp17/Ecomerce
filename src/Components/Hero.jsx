import React from "react";

function Newsletter() {
  return (
    <div className="text-center mt-12 text-slate-600">
      <h2 className="text-xl mb-10 text-slate-600">Newsletter</h2>
      <p className="text-sm text-slate-600 mb-5">Get timely unpates from your favorite products</p>
      <div className="flex justify-center gap-5 items-center">
        <input className="px-2 py-1 border-b-[2px] hover:border-slate-600 hover:transition hover:duration-300 w-[50%] focus:outline-none" type="email" placeholder="Enter your email address" />
        <button className="px-2 py-1 border-b-[2px] hover:border-slate-600 hover:transition hover:duration-300">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
