import React from "react";
import 'primeicons/primeicons.css';
import Iframe from "react-iframe";

const VideoPopup = ({ VideoUrl, show, close }) => {
  return (
    <div>
      {show && (
        <div className="fixed top-0 right-0 h-full w-full  flex items-center justify-center z-[999]">
          <div className="fixed top-0 right-0 h-full w-full z-[500] bg-black opacity-50"></div>

          <div className="z-[999] w-full flex">
            <div
              className=" text-amber-50 "
              onClick={() => close(false)}
            >
              <i className="pi pi-times text-2xl absolute top-[17%] right-[10%]"></i>
            </div>
            <Iframe
              title="ytvideo"
              className=" m-auto"
              width="75%"
              height="600"
              src={VideoUrl}
            ></Iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPopup;
