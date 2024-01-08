import React, { useState } from "react";
import Iframe from "react-iframe";

export default function Contact() {
  const [content, setcontent] = useState(false);
  return (
    <div className=" pt-10" id="Contact">
      <div className="footer-img h-[100vh] grid place-items-center">
        <div className=" text-center ">
          <h1 className=" text-7xl font-extrabold text-white">
            Let's work together!
          </h1>
          <button
            onClick={() => setcontent(true)}
            className=" p-5 bg-white text-lg m-8 hover:bg-transparent hover:text-white hover:border"
          >
            Make an enquiry
          </button>
        </div>
      </div>
      <div className=" bg-black text-center py-10">
        <h3 className=" text-white font-semibold">
          © 2023 By Kalathiya Infotech
        </h3>
      </div>
      {content ? (
        <div className=" w-full  h-full bg-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  fixed  w-full h-full lg:p-[180px]  top-[57%] md:top-2/4 left-2/4 -translate-x-1/2  -translate-y-1/2 rgba-bg-color ">
            <div className=" items-center lg:flex  hidden ">
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.9653025025127!2d-101.3719368735586!3d39.78533404382562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8774e048562297cf%3A0x293b4669c6472fad!2sMcDonald%2C%20KS%2067745%2C%20USA!5e0!3m2!1sen!2sin!4v1699066767811!5m2!1sen!2sin"
                width="100%"
                height="80%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                className=" "
                referrerpolicy="no-referrer-when-downgrade"
              ></Iframe>
            </div>
            <div class="container   ">
              <div class="row">
                <h1 className="contact">
                  contact us{" "}
                  <button
                    className=" text-black text-5xl bg-white p-3  cursor-pointer z-10"
                    onClick={() => setcontent(false)}
                  >
                    &times;
                  </button>
                </h1>
              </div>

              <div class="row input-container items-center flex">
                <div className=" w-full">
                  <div class="col-xs-12">
                    <div class="styled-input wide">
                      <input type="text" required />
                      <label>Name</label>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                      <input type="text" required />
                      <label>Email</label>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="styled-input">
                      <input type="text" required />
                      <label>Phone Number</label>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <div class="styled-input wide ">
                      <textarea className="min-h-[80%]" required></textarea>
                      <label>Message</label>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <button class="btn-lrg submit-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
