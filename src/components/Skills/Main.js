import React from "react";
import { useSpring, animated } from "react-spring";


const Skills = () => {
    const webDevelopmentProgress = useSpring({
        from: { width: "0%", value: 0 },
        to: async (next) => {
          await next({ width: "95%", value: 95 });
        },
        config: { duration: 3000 },
      });
    
      const brandIdentityProgress = useSpring({
        from: { width: "0%", value: 0 },
        to: async (next) => {
          await next({ width: "80%", value: 80 });
        },
        config: { duration: 3000 },
      });
    
      const logoDesignProgress = useSpring({
        from: { width: "0%", value: 0 },
        to: async (next) => {
          await next({ width: "85%", value: 85 });
        },
        config: { duration: 3000 },
      });
  return (
    
    <>
     <div className="  items-center grid xl:grid-cols-2 grid-cols-1 py-28  gap-4 w-9/12 m-auto">
        <img
          src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/shutterstock1914164533-1652959735.jpg&w=900&height=601"
          alt=""
        />
        <div>
          <div>
            <h1 className=" font-black text-3xl py-4">
              I have high skills in developing and programming
            </h1>
            <p className=" text-gray-500 font-medium py-2">
              I am working on a professional, visually sophisticated and
              technologically proficient, responsive and multi-functional
              personal portfolio template Shane.
            </p>
          </div>
          <div className="py-8">
            <div className="py-3">
              <div className="justify-between flex">
                <h3 className="text-black font-bold">Web Development</h3>

                <h3 className="text-black font-bold">
                  <animated.h3>
                    {webDevelopmentProgress.value.interpolate(
                      (value) => `${Math.round(value)}%`
                    )}
                  </animated.h3>
                </h3>
              </div>
              <div className="py-3">
                <div className="w-full rounded-lg h-2 bg-slate-200">
                  <animated.div
                    style={{ ...webDevelopmentProgress, height: "100%" }}
                    className="rounded-lg bg-gradient-to-r from-blue-500 to-green-400 flex"
                  ></animated.div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="justify-between flex">
                <h3 className="text-black font-bold">Brand Identity </h3>

                <h3 className="text-black font-bold">
                  <animated.h3>
                    {brandIdentityProgress.value.interpolate(
                      (value) => `${Math.round(value)}%`
                    )}
                  </animated.h3>
                </h3>
              </div>
              <div className="py-3">
                <div className="w-full rounded-lg h-2 bg-slate-200">
                  <animated.div
                    style={{ ...brandIdentityProgress, height: "100%" }}
                    className="rounded-lg bg-gradient-to-r from-blue-500 to-green-400 flex"
                  ></animated.div>
                </div>
              </div>
            </div>

            <div className="py-3">
              <div className="justify-between flex">
                <h3 className="text-black font-bold"> Logo Design </h3>

                <h3 className="text-black font-bold">
                  <animated.h3>
                    {logoDesignProgress.value.interpolate(
                      (value) => `${Math.round(value)}%`
                    )}
                  </animated.h3>
                </h3>
              </div>
              <div className="py-3">
                <div className="w-full rounded-lg h-2 bg-slate-200">
                  <animated.div
                    style={{ ...logoDesignProgress, height: "100%" }}
                    className="rounded-lg bg-gradient-to-r from-blue-500 to-green-400 flex"
                  ></animated.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
