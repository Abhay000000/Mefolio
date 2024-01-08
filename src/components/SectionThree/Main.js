import React from "react";
import img1 from "../../asset/img/sec-3-img.avif";

function Main() {
  return (
    <div>
      <div className=" container m-auto">
        <section className=" grid  grid-cols-1 md:grid-cols-2 w-full h-3/4    lg:h-screen ">
          <div className=" items-center md:h-full m-auto flex   " id="Home">
            <div className=" ms-auto  my-5 relative ">
              <div className="relative">
                <div className="hero-text">
                  <h1 className=" font-light  text-4xl  md:text-5xl lg:text-8xl relative Richard mb-1">
                    Richard
                  </h1>
                  <h1 className=" font-bold  text-4xl  md:text-5xl lg:text-8xl mt-1">
                    Williams
                  </h1>
                  <p className=" font-light  text-4xl   text-gray-600 my-5">
                    UX/Ul Designer
                  </p>
                  <p>Loction: California , USA</p>
                  <div className=" flex my-10 ms-[-27px]">
                    <div className="-rotate-90 font-bold pt-9">
                      <h3>SKILLS</h3>
                    </div>
                    <div className="border-dashed border-2 border-grey-500 rounded-xl px-15">
                      <table>
                        <tr>
                          <td className=" p-2 px-4">ps</td>
                          <td className=" p-2 px-4">figma</td>
                          <td className=" p-2 px-4"> illustrtor</td>
                        </tr>
                        <tr>
                          <td className=" p-2">Tilda</td>
                          <td className=" p-2">Miro</td>
                          <td className=" p-2">Mqups</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" place-items-center grid   w-1/2 m-auto">
            <div className="  relative ">
              <img
                src={img1}
                alt=""
                className=" m-auto md:m-0  rounded-xl  "
                style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" }}
              ></img>
              <div className=" sec-3-img "></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
