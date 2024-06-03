import React from "react";
import { achivementCounter } from "../constant/dummyData";
const Counter = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Some Fun Fact</div>
          <div className="column-title ">
            Our Great <span className="shape-bg">Achievement</span>
          </div>
        </div>
        <div className="grid  xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {achivementCounter.map((item, index) => (
            <div
              className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4"
              key={index}
            >
              <img
                src={item.icon}
                alt=""
                className=" absolute left-1/2 -translate-x-1/2 -top-10"
              />
              <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                <span className="counter">{item.num}</span> +
              </h4>
              <p>{item.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
