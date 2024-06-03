/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { topicsData } from "../constant/dummyData";

const Topics = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Start Learning From Today</div>
          <div className="column-title ">
            Popular <span className="shape-bg">Topics</span> To Learn
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {topicsData.map((item, index) => (
            <a
              className=" rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#FFE8E8]  text-center px-6
            py-[65px] hover:-translate-y-2"
              href="#"
              key={index}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                <img
                  src={item.logo}
                  alt=""
                  className=" w-[32px] h-[32px] object-cover "
                />
              </div>
              <div className="course-content">
                <h4 className=" text-2xl  mb-2 font-bold">{item.title}</h4>
                <p>{item.quantity}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topics;
