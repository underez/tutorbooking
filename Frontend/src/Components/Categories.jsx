import React from "react";
import ct1 from "../assets/images/icon/ct1.svg";
import ct2 from "../assets/images/icon/ct2.svg";
import ct3 from "../assets/images/icon/ct3.svg";
import ct4 from "../assets/images/icon/ct4.svg";
import ct5 from "../assets/images/icon/ct5.svg";
import ct6 from "../assets/images/icon/ct6.svg";
import { courseData } from "../constant/dummyData";

const getCategoryIcon = (index) => {
  const icons = [ct1, ct2, ct3, ct4, ct5, ct6];
  return icons[index % icons.length];
};

const CourseItem = ({ item, index }) => (
  <a
    className="rounded-[8px] transition-all duration-300 hover:shadow-box bg-white flex space-x-5 p-[30px] border-l-4 border-white hover:border-primary"
    href="#"
  >
    <div className="w-[72px] h-[72px] rounded bg-white relative group-hover:bg-[#FFE8E8]">
      <img
        src={getCategoryIcon(index)}
        alt={`${item.post} icon`}
        className="w-full h-full object-cover rounded"
      />
    </div>
    <div className="course-content">
      <h4 className="lg:text-2xl text-1xl mb-2 font-bold">
        {item.post}
      </h4>
      <p>{item.post} Tutors</p>
    </div>
  </a>
);

const Categories = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-6.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Check Out</div>
          <div className="column-title">
            วิชายอดฮิต <span className="shape-bg">Popular Subjects</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {courseData.slice(0, 6).map((item, index) => (
            <CourseItem item={item} index={index} key={index} />
          ))}
        </div>
        <div className="text-center pt-[70px]">
          <a href="/Findtutors" className="btn btn-primary">
            View All Subjects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
