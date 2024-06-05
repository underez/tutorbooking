import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  clock,
  file,
  review,
  star,
} from "../constant/images";

const FilteredCourse = ({ classNameForTabOne, classNameForTabTwo, filteredCourses }) => {
  const listIcon = [
    "clarity:grid-view-line",
    "ant-design:unordered-list-outlined",
  ];
  
  return (
    <Tab.Group>
      <div className="flex flex-wrap gap-5 justify-center items-center mb-14">
        <div className="flex-1 flex flex-wrap gap-5 space-x-6 items-center">
          <Tab.List as="ul" id="tabs-nav" className=" flex space-x-4 cata-Tbas">
            {listIcon.map((className, key) => (
              <Tab
                as="li"
                className={({ selected }) => (selected ? "active" : "")}
                key={key}
              >
                <a
                  href="#"
                  className=" h-[60px] w-[60px] flex flex-col justify-center items-center"
                >
                  <iconify-icon icon={className}></iconify-icon>
                </a>
              </Tab>
            ))}
          </Tab.List>
          <span>Showing {filteredCourses.length} courses</span>
        </div>
       
        
      </div>
      <Tab.Panels as="div" id="tabs-content">
        <Tab.Panel as="div" id="tab1" className="tab-content">
          <div className={classNameForTabOne}>
            {filteredCourses.map((item) => (
              <Link
                className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                to={`/TutorPage/${item.teacher_id}`}
                key={item.id}
              >
                <div className="course-thumb h-[248px] rounded-t-[8px] relative">
                  <img
                    src={process.env.PUBLIC_URL + `/images/`+item.img}
                    alt=""
                    className=" w-full h-full object-cover rounded-t-[8px]"
                  />
                  <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                    {item.subject}
                  </span>
                </div>
                <div className="course-content p-8">
                  <div className="text-secondary font-bold text-2xl mb-3">
                    {item.rate} / hr
                  </div>
                  <h4 className=" text-xl mb-3 font-bold">{item.firstname}  {item.lastname}</h4>
                  <div className="flex justify-between flex-wrap space-y-1 xl:space-y-0">
                    <span className=" flex items-center space-x-2 mr-3">
                      <img src={file} alt="" />
                      <span>2 Lessons</span>
                    </span>
                    <span className=" flex items-center space-x-2 mr-3">
                      <img src={clock} alt="" />
                      <span> {item.time} 4h 30m</span>
                    </span>
                    <span className=" flex items-center space-x-2 ">
                      <img src={star} alt="" />
                      <span>{item.ratings}4.5</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center pt-14">
            <a
              href="#"
              className=" btn btn-primary inline-flex items-center space-x-[10px]"
            >
              <span>Load More</span>
              <span className=" relative top-1">
                <iconify-icon icon="ion:reload-outline"></iconify-icon>
              </span>
            </a>
          </div>
        </Tab.Panel>
        <Tab.Panel id="tab2" className="tab-content">
        <div className={classNameForTabTwo}>
            {filteredCourses.map((item) => (
              <Link
                className=" bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent
            hover:shadow-box6 flex p-8 space-x-6"
                to={`/TutorPage/${item.teacher_id}`}
                key={item.id}
              >
                <div className="flex-none">
                  <div className="w-[159px] h-[159px] rounded relative">
                    <img
                      src={process.env.PUBLIC_URL + `/images/`+item.img}
                      alt=""
                      className=" w-full h-full object-cover rounded"
                    />
                  </div>
                </div>
                <div className="course-content flex-1">
                  <div className="text-primary font-bold text-2xl mb-2 flex justify-between">
                    <span className=" inline-block"> {item.rate} / hr </span>
                    <span className=" flex space-x-1">
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                      <span className="w-4 h-4 inline-block ">
                        <img
                          src={review}
                          alt=""
                          className=" w-full h-full block object-cover"
                        />
                      </span>
                    </span>
                  </div>
                  <h4 className=" text-2xl leading-[36px] mb-4 font-bold">
                  {item.firstname}  {item.lastname}
                  </h4>
                  <div className="flex space-x-6">
                    <span className=" flex items-center space-x-2">
                      
                      <span>{item.subject}</span>
                    </span>
                    <span className=" flex items-center space-x-2">
                      
                      <span>4k Lesson</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center pt-14">
            <a
              href="#"
              className=" btn btn-primary inline-flex items-center space-x-[10px]"
            >
              <span>Load More</span>
              <span className=" relative top-1">
                <iconify-icon icon="ion:reload-outline"></iconify-icon>
              </span>
            </a>
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FilteredCourse;