import React from "react";

function Banner() {
  return (
    <div className="flex flex-row  justify-around items-center h-auto">
      
      <div >
        <div className="text-6xl flex-col gap-y-12">The lowest prices you<br></br> can find.</div>
        <div className="flex flex-col gap-y-12 mt-10">
          <div className="text-gray-500">Lorem ipsum dolor sitamet consectetur, adipisicing elit. Voluptatem, <br></br>itaque?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, itaque?
          </div>
          <div className="flex flex-row gap-x-5">
            <button className="bg-zinc-900 text-slate-50 w-28 h-9 hover:border-solid hover:border-2 hover:border-zinc-900 ">View All</button>
            <button className="border-solid border-2 border-zinc-900 w-28 h-9 hover:bg-zinc-900 hover:text-slate-50">Watch Now</button>
          </div>
        </div>
      </div>
      <div>
        <img src="Assets/banner.png" />
      </div>
    </div>
  );
}

export default Banner;
