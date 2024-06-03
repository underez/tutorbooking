
import React, { useState } from "react";
import {
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
  search,
  whiteCheck,
} from "../../constant/images";
import FilteredCourse from "../FilteredCourse";
import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";
import CourseSidebar from "../CourseSidebar";


const FindTutors = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };



  return (
    <>
      <Header />
      <PageBanner title="Find Tutors" pageTitle="" />
      <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
              <FilteredCourse
                classNameForTabOne={
                  "grid md:grid-cols-2 grid-cols-1 gap-[30px]"
                }
                classNameForTabTwo={"grid  grid-cols-1 gap-[30px]"}
              />
            </div>
            <div class="lg:col-span-4 col-span-12">
              <CourseSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindTutors;

const SideBar = () => {
  const [priceVal, setPriceVal] = useState(0)
  return (
    <div className="sidebarWrapper space-y-[30px]">
      <div className="wdiget widget_search">
        <div className="bg-[#F8F8F8] flex  rounded-md shadow-e1 items-center  py-[4px] pl-3  relative">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search keyword..."
              className="border-none focus:ring-0 bg-transparent"
            />
          </div>
          <div className="flex-none">
            <button className="btn btn-primary">
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Price Filter</h4>
        {/* <div className="slider-range"></div> */}
    
        <input type="range" max={2000} min={200} className="slider-range" onChange={(e) => setPriceVal(e.target.value)} />
        <div className="price_slider_amount">
          <div className=" mt-6">
            <div className="flex space-x-2 text-xl font-medium text-black">
              <span className=" flex-none">Price:</span>
              <input
                type="number"
                name="price"
                placeholder="Add Your Price"
                value={priceVal}
                disabled
                className="amount flex-1 border-none focus:outline-none focus:ring-0 p-0 text-xl font-medium text-black"
              />
            </div>
          </div>
        </div>
      </div>
     
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Subjects ค้นหาตามวิชา</h4>

        <ul className=" list-item space-y-4">
          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>English (23)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span> Maths (45)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Science (14)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

     
          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Thai (28)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>

          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Physics(34)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>
          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Chemistry(34)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>
          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>Biology(34)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>
          <li className=" block">
            <a
              href="#"
              className=" flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all
                        duration-150"
            >
              <span>เตรียมสอบ English Tests(34)</span>
              <span className=" text-2xl">
                <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
              </span>
            </a>
          </li>
        </ul>
      </div>
    
     
  
    </div>
  );
};
