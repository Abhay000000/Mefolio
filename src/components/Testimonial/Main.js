import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";

const Testimonial = () => {
  const [animate, setAnimate] = useState(true);

  const TESTIMONIALS = [
    {
      id: 1,
      name: "Teodor Federico",
      body: "I purchased the theme a few weeks ago. I had some issues with the theme, I asked customer support to help me with and they were helpful and kind to help me with all my problems. I definitely recommend this theme to everyone.",
      img: "https://shanereact.ibthemespro.com/img/about/1.jpg",
      job: "Freelancer",
    },
    {
      id: 2,
      name: "Bauen Fernandes",
      body: "Really the Code, Support, and design are awesome and its good support they are giving. They give an instant solution to our needs. Really awesome. I will strongly recommend to my friends. Great template, even better service!",
      img: "https://shanereact.ibthemespro.com/img/about/2.jpg",
      job: "Web Developer",
    },
    {
      id: 3,
      name: "Justin Bieber",
      body: "We were looking for a logo with a touch of modernism. Arlo grasped our needs and produced a stunning design. Awesome to work with Arlo. Incredibly organized, easy to communicate with, responsive with next iterations.",
      img: "https://shanereact.ibthemespro.com/img/about/3.jpg",
      job: "Photographer",
    },
  ];
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 1,
      autoplay: 2000,
      animationDuration: 700,
      gap: 24,
      hoverpause: true,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    })
      .on("move", function () {
        setAnimate(false);
        setTimeout(() => {
          setAnimate(true);
        }, 500);
      })
      .mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className=" xl:w-[80%] xl:m-auto md:w-full ">
          <div className=" grid grid-cols-1 md:grid-cols-2 h-[70vh] items-center w-9/12 m-auto">
            <div>
              <span className="  w-full  p-3 font-medium border-s-2 border-slate-800 bg-slate-200">
                TESTIMONIALS
              </span>
              <h3 className=" font-black text-3xl my-4">
                What clients say about my portfolio template
              </h3>
            </div>
            <div>
              <div className="glide-01 relative w-full z-[998]">
                <div className="overflow-hidden " data-glide-el="track">
                  <ul className=" -z-10 whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                    {TESTIMONIALS.map((item) => (
                      <li key={item.id}>
                        <div>
                          <p className="leading-8 py-4 font-medium text-gray-600">
                            {" "}
                            {item.body}{" "}
                          </p>
                        </div>
                        {animate && (
                          <div className="flex">
                            <img
                              data-aos="zoom-in"
                              src={item.img}
                              className="rounded-full w-20"
                              alt=""
                            />
                            <div className="  items-center py-4 mx-4">
                              <h3
                                className=" font-bold text-lg"
                                data-aos="fade-up"
                              >
                                {item.name}
                              </h3>{" "}
                              <h3 data-aos="fade-up">{item.job}</h3>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
