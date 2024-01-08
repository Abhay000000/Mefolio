import React from "react";

function Main() {
  return (
    <div>
      <section
        className=" grid  grid-cols-1 lg:grid-cols-2 w-full   h-screen "
        id="Home"
      >
        <div className=" items-center h-full m-auto flex w-3/4    absolute lg:relative">
          <div className=" ms-6">
            <h1 className=" text-5xl font-medium   text-black py-3">
              Admire Beautiful
            </h1>
            <span className="  font-bold text-2xl md:text-7xl  text-black	 py-3">
              Landscapes!
            </span>
            <p className="  text-black text-xl py-3 font-medium">
              {" "}
              choose one hiking tour and appreciate the breaking down!
            </p>
            <div>
              <button className=" border-2 text-2xl font-semibold p-3 border-neutral-700 hover:bg-slate-700 hover:text-white duration-500 ">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-img-2"></div>
      </section>
    </div>
  );
}

export default Main;
