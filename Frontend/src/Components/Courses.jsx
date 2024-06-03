/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { courseData } from "../constant/dummyData";
import Course from "./Course";
const Courses = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Popular Courses</div>
          <div className="column-title ">
            Choose Our Top <span className="shape-bg">Courses</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {courseData.map((course, index) => (
            <Course course={course} key={index} index={index} />
          ))}
        </div>
        <div className="text-center lg:pt-16 pt-10">
          <a href="#" className=" btn btn-primary">
            View All Courses
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
