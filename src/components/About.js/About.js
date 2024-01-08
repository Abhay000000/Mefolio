import React from "react";

export default function About() {
  return (
    <div className=" w-9/12 justify-center m-auto mt-28   " id="About">
      <div className=" grid grid-cols-1 md:grid-cols-2 ">
        <div className="items-center flex m-0 lg:mx-5 ">
          <img
            className="w-full"
            src="https://www.knstek.com/wp-content/uploads/2020/04/learning_img.png"
            alt="hii"
          ></img>
        </div>
        <div className=" m-0 lg:mx-5 items-center flex">
          <div>
            <span className="block w-24 p-2 my-4 border-s-2 border-slate-800 bg-slate-200">
              ABOUT ME
            </span>
            <h3 className=" text-3xl  font-bold my-4">
              Creative Independent Web Developer based in Australia
            </h3>

            <p className=" text-slate-600">
              I'm web designer, and I'm very passionate and dedicated to my
              work. With 20 years experience as a professional web developer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </p>
            <button className=" bg-black text-white p-4 hover:bg-slate-300 hover:text-black  my-4 ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
