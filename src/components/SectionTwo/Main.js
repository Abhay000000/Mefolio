import React from "react";

function Main() {
  return (
    <div>
      <section className=" grid  grid-cols-1 lg:grid-cols-2 w-full   h-screen ">
        <div
          className=" items-center h-0 md:h-full m-auto flex     lg:relative"
          id="Home"
        >
          <div className=" ms-6 my-5 relative">
            <div className="relative">
              <div className="hero-text">
                <h1 className=" font-bold  text-4xl  md:text-5xl lg:text-6xl">
                  I Have
                  <span className=" ms-5 text-orange-900">
                    Creative Design
                  </span>{" "}
                  Experience
                </h1>
                <p className=" font-bold  text-xl   text-gray-600 my-5">
                  {" "}
                  I am Malik, 20 years old, from Gaza, Palestine. I study
                  information technology, majoring in multimedia, at the
                  University of Palestine. My hobby is programming and ui/ux
                  design
                </p>
              </div>
            </div>

            <div>
              <button className=" text-2xl bg-orange-900 text-white  rounded-lg font-semibold py-1 px-3  hover:bg-slate-700 my-9   lg:my-20 hover:text-black duration-500">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className=" sec-2-hero-img"></div>
      </section>
    </div>
  );
}

export default Main;
