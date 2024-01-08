import React from "react";

export default function News() {
  const news = [
    {
      img: "https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2019/june/burnout-man.jpg",
      title: "thumbDevelopers watch out for these burnout symptoms",
      name: "BY ALEX WATSON ",
      date: "20 MAY 2020",
    },
    {
      img: "https://qph.cf2.quoracdn.net/main-qimg-bc0307699a7a4c0aee84cf8f6c389062.webp",
      title: "thumbHow to be appreciated for your hard work as a developer",
      name: "BY BROOK KENNEDY  ",
      date: "07 APRIL 2020",
    },
    {
      img: "https://builtin.com/sites/www.builtin.com/files/2022-05/how-designers-work-with-developers.png",
      title: "How designers and developers can collaborate better",
      name: "BY PAOLA ATKINS ",
      date: "02 MARCH 2020",
    },
  ];
  return (
      <div className="w-[80%] m-auto py-24" id="News">
        <div>
          <span className="w-full  p-3 font-medium border-s-2 border-slate-800 bg-slate-200">
            NEWS
          </span>
          <h3 className="font-black text-3xl my-4">Latest Blog</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.map((article, index) => (
            <div key={index} className="p-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full hover:rotate-3 duration-1000 hover:scale-110"
                  src={article.img}
                  alt={article.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{article.title}</div>
                  <p className="text-gray-700 text-base"></p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{article.tags}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
