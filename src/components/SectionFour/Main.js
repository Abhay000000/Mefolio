import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import img4 from "../../asset/img/sec-4-img.avif";
import img4a from "../../asset/img/h3-shape1.webp";
import signature from "../../asset/img/signature.png";
function Main() {
  return (
    <div>
      {" "}
      <div className=" container m-auto">
        <section
          className=" grid  grid-cols-1 md:grid-cols-2 w-full    h-screen "
          id="Home"
        >
          <div className=" items-center md:h-full m-auto flex   ">
            <div className=" ms-auto  my-5 relative ">
              <div className="relative">
                <div className="hero-text">
                  <h1 className=" font-semibold  text-4xl  md:text-5xl w-full lg:w-1/2 lg:text-8xl relative  mb-1">
                    Amazing Website Redesign
                  </h1>
                  <div className="  relative my-10">
                    <p className=" p-after ps-[30px]   font-medium text-lg  text-gray-800">
                      {" "}
                      Another project I worked on was an e-commerce website for
                      a local business. It included a fully functional online
                      store and payment gateway, resulting in increased sales
                      and customer satisfaction.
                    </p>
                  </div>

                  <div className=" flex">
                    <button className=" flex me-5 my-3  bg-purple-400 p-4   font-medium   text-white rounded-2xl place-items-center">
                      Let's Talk{" "}
                      <BsFillSendFill className=" mx-3 font-normal text-lg" />
                    </button>
                    <button className=" flex mx-5 my-3  p-4   bg-slate-100   font-bold  rounded-2xl">
                      {" "}
                      Portfolio{" "}
                      <BsArrowUpRight className=" mx-3 font-normal text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" place-items-center grid ">
            <div className="  relative ">
              <img
               
                src={img4}
                alt=""
                className=" m-auto md:m-0  rounded-xl  w-[60%] lg:w-full "
                style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
              ></img>
              <div className=" sec-4-img ">
                <img src={img4a} alt="" />
              </div>
              <div className="text-word">
                <img src={signature} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
