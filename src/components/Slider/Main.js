import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Slider() {
  const logo = [
    {
      id: 1,
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top-1.png",
    },
    {
      id: 2,
      img: "https://shanereact.ibthemespro.com/img/partners/3.png",
    },
    {
      id: 3,
      img: "https://shanereact.ibthemespro.com/img/partners/5.png",
    },
    {
      id: 4,
      img: "https://shanereact.ibthemespro.com/img/partners/4.png",
    },
    {
      id: 5,
      img: "https://shanereact.ibthemespro.com/img/partners/2.png",
    },
    {
      id: 6,
      img: "https://shanereact.ibthemespro.com/img/partners/6.png",
    },
  ];
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 4,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 2,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-09 relative  overflow-hidden w-[80%] m-auto py-10">
        <div data-glide-el="track">
          <ul className="  whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {logo.map((item) => (
              <li key={item.id}>
                <img
                  src={item.img}
                  className="m-auto h-20 max-h-full w-auto max-w-full"
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
