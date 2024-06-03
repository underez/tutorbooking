/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courseData } from "../constant/dummyData";
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

const FilteredCourse = ({ classNameForTabOne }) => {
  const listIcon = ["clarity:grid-view-line", "bx:list-ul"];
  const [sortedCourses, setSortedCourses] = useState(courseData);

  const sortCourses = (sortBy) => {
    switch (sortBy) {
      case "popularity":
        setSortedCourses([...courseData].sort((a, b) => b.ratings - a.ratings));
        break;
      case "price":
        setSortedCourses([...courseData].sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""))));
        break;
      case "reviews":
        setSortedCourses([...courseData].sort((a, b) => b.ratings - a.ratings));
        break;
      default:
        setSortedCourses(courseData);
    }
  };

  return (
    <Tab.Group>
      <div className="flex flex-wrap gap-5 justify-center items-center mb-14">
        <div className="flex-1 flex flex-wrap gap-5 space-x-6 items-center">
          <Tab.List as="ul" id="tabs-nav" className="flex space-x-4 cata-Tbas">
            {listIcon.map((className, key) => (
              <Tab
                as="li"
                className={({ selected }) => (selected ? "active" : "")}
                key={key}
              >
                <a
                  href="#"
                  className="h-[60px] w-[60px] flex flex-col justify-center items-center"
                >
                  <iconify-icon icon={className}></iconify-icon>
                </a>
              </Tab>
            ))}
          </Tab.List>
          <span>Showing 12 Tutors of 52</span>
        </div>
        <div className="flex-0">
          <div className="min-w-[272px]">
            <select onChange={(e) => sortCourses(e.target.value.toLowerCase())}>
              <option value="popularity">Sort By:</option>
              <option value="subjects">Subjects</option>
              <option value="price">Price</option>
              <option value="reviews">Reviews</option>
            </select>
          </div>
        </div>
      </div>
      <Tab.Panels as="div" id="tabs-content">
        <Tab.Panel as="div" id="tab1" className="tab-content">
          <div className={classNameForTabOne}>
            {sortedCourses.map((item, index) => (
              <Link
                className="bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm"
                to={"/TutorPage"}
                key={item.id * index}
              >
                <div className="course-thumb h-[248px] rounded-t-[8px] relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover rounded-t-[8px]"
                  />
                  <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                    {item.post}
                  </span>
                </div>
                <div className="course-content p-8">
                  <div className="text-secondary font-bold text-2xl mb-3">
                    {item.price}
                  </div>
                  <h4 className="text-xl mb-3 font-bold">{item.title}</h4>
                  <div className="flex justify-between flex-wrap space-y-1 xl:space-y-0">
                    <span className="flex items-center space-x-2 mr-3">
                      <img src={file} alt="" />
                      <span>2 Lessons</span>
                    </span>
                    <span className="flex items-center space-x-2 mr-3">
                      <img src={clock} alt="" />
                      <span> {item.time} </span>
                    </span>
                    <span className="flex items-center space-x-2 ">
                      <img src={star} alt="" />
                      <span>{item.ratings}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center pt-14">
            <a
              href="#"
              className="btn btn-primary inline-flex items-center space-x-[10px]"
            >
              <span>Load More</span>
              <span className="relative top-1">
                <iconify-icon icon="ion:reload-outline"></iconify-icon>
              </span>
            </a>
          </div>
        </Tab.Panel>
        <Tab.Panel as="div" id="tab2" className="tab-content">
          <div className="space-y-4">
            {sortedCourses.map((item, index) => (
              <Link
                to={"/TutorPage"}
                key={item.id * index}
                className="bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm flex items-center"
              >
                <div className="course-thumb h-[100px] w-[180px] rounded-l-[8px] overflow-hidden relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
                    {item.post}
                  </span>

                  <span className="bg-secondary py-1 px-3 text-sm font-semibold rounded text-white absolute left-2 top-2">
                    {item.post}
                  </span>
                </div>
                <div className="course-content p-4 flex-1">
                  <div className="text-secondary font-bold text-lg mb-1">
                    {item.price}
                  </div>
                  <h4 className="text-base font-bold mb-2">{item.title}</h4>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center space-x-2">
                      <img src={file} alt="" />
                      <span>2 Lessons</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <img src={clock} alt="" />
                      <span>{item.time}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <img src={star} alt="" />
                      <span>{item.ratings}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default FilteredCourse;