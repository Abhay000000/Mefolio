import React, { useState } from "react";

export default function Protfolio() {
  const [item, setitem] = useState("all");
  const data = [
    {
      id: 1,
      name: "My Story",
      type: "Design",
      img: "https://static-cse.canva.com/blob/691411/00gross_IG_hubs_adriansava.ed1f9f46.jpg",
    },
    {
      id: 2,
      name: "Design Trend",
      type: "Branding",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMdYQ4TQ2xDodcwKxS1y_3F3YXLz979UBEg&usqp=CAU",
    },
    {
      id: 3,
      name: "Soft Cream",
      type: "Photography",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KW92zkZ6U-S5UHSQGrVvk5XhwSBlWUBMiA&usqp=CAU",
    },
    {
      id: 4,
      name: "Shane Design",
      type: "Design",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT86vHQ9o8yKIO0jKKrjAKtc9HrEPeI0HOILA&usqp=CAU",
    },
    {
      id: 5,
      name: " Sweet Cherry",
      type: "Photography",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcQjYTQDmGYkKY_wDu8VIpDQWYTd1-13itA&usqp=CAU",
    },
    {
      id: 6,
      name: "Behance Shoot",
      type: "Branding",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRP8JreEX62fA6rZI-j2yNx20hiRaFVw0kA&usqp=CAU",
    },
  ];

  //   console.log({item});

  return (
    <div id="Portfolio">
      <div className="lg:flex  sm:block sm-w-9/12 justify-between  w-9/12 m-auto  py-14">
        <div className=" text-4xl font-extrabold">Creative Portfolio</div>
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-4 pt-7 md:p-0">
            <button
              className={`px-2  font-bold p-1 mx-2 opacity-20  duration-500 ${
                item === "all" ? "active-2" : ""
              }`}
              onClick={() => setitem("all")}
            >
              All
            </button>
            <button
              className={`px-2  font-bold p-1 mx-2 opacity-20  duration-500 ${
                item === "Design" ? "active-2" : ""
              }`}
              onClick={() => setitem("Design")}
            >
              Design
            </button>
            <button
              className={`px-2  font-bold p-1 mx-2 opacity-20  duration-500 ${
                item === "Branding" ? "active-2" : ""
              }`}
              onClick={() => setitem("Branding")}
            >
              Branding
            </button>
            <button
              className={`px-2 font-bold p-1 mx-2 opacity-20  duration-500 ${
                item === "Photography" ? "active-2" : ""
              }`}
              onClick={() => setitem("Photography")}
            >
              Photography
            </button>
          </ul>
        </div>
        {}
      </div>
      <div>
        <div className=" w-9/12 m-auto py-7 duration-700">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            {data
              .filter((name) => name.type === item || item === "all")
              .map((item, id) => (
                <div key={item.id} className="duration-700">
                  <div className=" static  xl:relative overflow-hidden hover-relative transition-all h-full mg:static">
                    <img
                      src={item.img}
                      className=" w-full h-full"
                      alt={item.key}
                    />
                    <div>
                      <div className="justify-between xl:flex px-6 absolute bottom-[-15%]  hover:bottom-[0] hover-absolute  w-full py-4 md:hidden sm:hidden">
                        <div className=" font-bold">{item.name}</div>
                        <div className=" font-bold">{item.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
