import React from "react";
import { LuWheat } from "react-icons/lu";
function Composition() {
  const posts = [
    {
      title: "Bugʻdoy uni",
      desc: "Mahsulotlarimiz asosan qozog`iston bugʻdoy unidan                  tayyorlanadi.",
    },
    {
      title: "Energiya",
      desc: "Mahsulotlarimiz protein va yuqori tarkibli oziqlar orqali energiya beradi. U juda kuchli va toʻliq tabiiy energetik mahsulotdir.",
    },
    {
      title: "Vitamin va mineralar",
      desc: "Mahsulotlarimizda yuqori miqdorda vitaminlar (masalan, A, B2, B3, B5, B6, B7, B12, C, D) va mineral elementlar  bor.",
    },
  ];
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-2xl sm:text-4xl font-bold text-start text-gray-900  mb-1 sm:mb-5">
            Mahsulotlarimiz tarkibi
          </h2>
          <p className="mt-2 text-sm sm:text-lg leading-8 text-gray-600">
            Tabiiy bugʻdoy unidan tayyorlangan mahsulotlarimiz tarkibi juda
            zamonaviy va foydali. Uning asosiy tarkibi quyidagilar:
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:gap-y-16 border-t-4 border-primary pt-5 sm:mt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(({ title, desc }, ind) => (
            <article
              key={ind}
              className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 sm:text-2xl  font-semibold leading-6 text-gray-900 group-hover:text-gray-600 flex items-center gap-2">
                  <LuWheat className="text-primary" />
                  {title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Composition;
