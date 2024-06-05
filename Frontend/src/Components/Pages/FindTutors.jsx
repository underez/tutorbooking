import React, { useState ,useEffect } from "react";
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
import SideBar from "./SideBar";
import axios from "axios";


const FindTutors = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    price: 2000,
    subjects: [],
  });
  const [filteredCourses, setFilteredCourses] = useState([]);
  const countSubjects = (courses) => {
    const counts = {};
    courses.forEach((course) => {
      const subject = course.subject;
      counts[subject] = (counts[subject] || 0) + 1;
    });
    return counts;
  };
  useEffect(() => {
    axios
      .get("http://localhost:4090/api/teachers")
      .then((response) => {
        setCourses(response.data);
        countSubjects(response.data); // เรียกใช้ฟังก์ชัน countSubjects
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  const filterCourses = () => {
    let filtered = courses;

    // Filter by keyword
    if (filters.keyword) {
      const regex = new RegExp(filters.keyword, "gi");
      filtered = filtered.filter(
        (course) =>
          regex.test(course.firstname) ||
          regex.test(course.lastname) ||
          regex.test(course.subject)
      );
    }

    // Filter by price
    filtered = filtered.filter((course) => course.rate <= filters.price);

    // Filter by subjects
    if (filters.subjects.length > 0) {
      filtered = filtered.filter((course) =>
        filters.subjects.includes(course.subject)
      );
    }

    setFilteredCourses(filtered);
  };

  useEffect(() => {
    filterCourses();
  }, [filters, courses]);




  return (
    <>
      <Header />
      <PageBanner title="Find Tutors" pageTitle="" />
      <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom">
        <div className="container">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="lg:col-span-8 col-span-12">
            <FilteredCourse
  classNameForTabOne={"grid md:grid-cols-2 grid-cols-1 gap-[30px]"}
  classNameForTabTwo={"grid grid-cols-1 gap-[30px]"}
  filteredCourses={filteredCourses} // เพิ่มบรรทัดนี้
  filters={filters}
/>
            </div>
            <div class="lg:col-span-4 col-span-12">
            <SideBar
                filters={filters}
                setFilters={setFilters}
                courses={courses} // ส่ง courses ไปยัง SideBar
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindTutors;