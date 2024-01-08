import React, { useEffect } from "react";
import VideoPopup from "../../components/VideoPopup/Main";
import { useState } from "react";
import AOS from "aos";

const Delivering = () => {
  const [VideoPlay, setVideoPlay] = useState(false);
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div>
      <div className=" py-[80px]  grid place-items-center bg-img  bg-cover bg-center w-full  h-[80vh]">
        <div className=" ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-20 h-20 text-black  bg-white p-4   rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <h1 className=" font-black max-w-4xl	 text-3xl text-white xl:w-1/3 text-center lg:w-2/4">
          I am delivering beautiful digital products for my clients
        </h1>
        <button
          className=" text-lg  text-white  border-2 p-4"
          onClick={() => setVideoPlay(true)}
        >
          See More{" "}
        </button>
        <VideoPopup
          VideoUrl="https://www.youtube.com/embed/tgbNymZ7vqY"
          show={VideoPlay}
          close={setVideoPlay}
        />
      </div>
    </div>
  );
};

export default Delivering;
