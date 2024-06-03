import React, { useState } from 'react';
import search from '../assets/images/icon/search.svg';
import { courseData } from "../constant/dummyData";

const CourseSidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Function to count occurrences of each unique course ID
    
    const getCountById = subjectid => {
        return filteredCourses.filter(course => course.subjectid === subjectid).length;
    };
    



    const filteredCourses = courseData.filter(course => {
        const matchesSearch = course.post.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    // Function to filter out duplicate courses based on their IDs






    
    const uniqueCourses = [...new Map(courseData.map(course => [course.subjectid, course])).values()];

    return (
        <div className="sidebarWrapper space-y-[30px]">
            <div className="wdiget widget_search">
                <input
                    type="text"
                    placeholder="Search keyword..."
                    className="border-none focus:ring-0 bg-transparent"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <button className="btn btn-primary w-full">
                    <img src={search} alt="" />
                </button>
            </div>

            <div className="wdiget widget_catagory">
                <h4 className="widget-title">Subjects</h4>
                <ul className="list-item space-y-4">
                    {/* Render your unique course list */}


                    {uniqueCourses.length > 0 ? (
    uniqueCourses.map(course => (
        <li key={course.subjectid} className="block">
            <a
                href="#"
                className="flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all duration-150"
            >
                <span>{course.post} ({getCountById(course.subjectid)})</span> {/* Update this line */}
                <span className="text-2xl">
                    <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                </span>
            </a>
        </li>
    ))
) : (
    <li className="block">No courses found</li>
)}

                
                </ul>
            </div>
        </div>
    );
};

export default CourseSidebar;
