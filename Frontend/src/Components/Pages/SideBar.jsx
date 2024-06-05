import React, { useState, useEffect } from "react";
import {
  rating1,
  rating2,
  rating3,
  rating4,
  rating5,
  search,
  whiteCheck,
} from "../../constant/images";
import axios from "axios";

const SideBar = ({ filters, setFilters, courses }) => {
  const [subjectCounts, setSubjectCounts] = useState({});
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleKeywordChange = (e) => {
    setFilters({ ...filters, keyword: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, price: Number(e.target.value) });
  };

  const handleSubjectChange = (subject) => {
    // ถ้าคลิกที่รายวิชาที่เลือกแล้ว ให้ยกเลิกการเลือกและเปลี่ยนสีกลับไปเป็นแบบเดิม
    if (selectedSubject === subject) {
      setSelectedSubject(null);
    } else {
      setSelectedSubject(subject);
    }
  
    setFilters((prevFilters) => {
      const subjects = prevFilters.subjects.includes(subject)
        ? prevFilters.subjects.filter((s) => s !== subject)
        : [...prevFilters.subjects, subject];
      return { ...prevFilters, subjects };
    });
  };

  const countSubjects = (courses) => {
    const counts = {};
    courses.forEach((course) => {
      const subject = course.subject;
      counts[subject] = (counts[subject] || 0) + 1;
    });
    setSubjectCounts(counts);
  };

  useEffect(() => {
    countSubjects(courses);
  }, [courses]);

  return (
    <div className="sidebarWrapper space-y-[30px]">
      <div className="wdiget widget_search">
        <div className="bg-[#F8F8F8] flex rounded-md shadow-e1 items-center py-[4px] pl-3 relative">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search keyword..."
              className="border-none focus:ring-0 bg-transparent"
              onChange={handleKeywordChange}
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
        <input
          type="range"
          max={2000}
          min={200}
          className="slider-range"
          value={filters.price}
          onChange={handlePriceChange}
        />
        <div className="price_slider_amount">
          <div className="mt-6">
            <div className="flex space-x-2 text-xl font-medium text-black">
              <span className="flex-none">Price:</span>
              <input
                type="number"
                name="price"
                placeholder="Add Your Price"
                value={filters.price}
                disabled
                className="amount flex-1 border-none focus:outline-none focus:ring-0 p-0 text-xl font-medium text-black"
              />
            </div>
          </div>
        </div>
      </div>
  
      <div className="wdiget widget_catagory">
        <h4 className="widget-title">Subjects ค้นหาตามวิชา</h4>
        <ul className="list-item space-y-4">
          {Array.from(new Set(courses.map((course) => course.subject))).map(
            (subject) => (
              <li key={subject} className="block">
                <a
                  href="#"
                  className={`flex justify-between py-[17px] px-5 rounded transition-all duration-150 ${
                    selectedSubject === subject
                      ? "bg-primary text-white"
                      : "bg-[#F8F8F8] hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => handleSubjectChange(subject)}
                >
                  <span>
                    {subject} ({subjectCounts[subject] || 0})
                  </span>
                  <span className="text-2xl">
                    <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;