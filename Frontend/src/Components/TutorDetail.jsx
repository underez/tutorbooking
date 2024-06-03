/* eslint-disable jsx-a11y/anchor-is-valid */
import { Disclosure, Tab } from "@headlessui/react";
import React, { Fragment,useState } from "react";
import janepotter from "../assets/images/all-img/janepotter.png";
import { Calendar, momentLocalizer,TimeGrid } from 'react-big-calendar';
import moment from 'moment';
import { scheduleData as dummyScheduleData } from '../constant/dummyData';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal,Button } from 'antd'; 

import {
  
  camera,
  file2,
  fileIcon,
  headphone,
  laptop,
  lock,
  pencil,
  play,
  singleCourseThumb,
  starIcon,
  target,
  thumb,

  user,
  user2,
  ux,
  web,
  wifi,
  yt,
  rc1,
  rc2,
  rc3,
  clockIcon,
  cmnt1,
  cmnt2,
} from "../constant/images";
const localizer = momentLocalizer(moment);

const TutorDetail = () => {



  const [visible, setVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [scheduleData, setScheduleData] = useState(dummyScheduleData);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const events = [
  //   {
  //     id: 1,
  //     title: 'Meeting',
  //     start: new Date(2024, 4, 6, 10, 0),
  //     end: new Date(2024, 4, 6, 12, 0),
  //   },
  //   {
  //     id: 2,
  //     title: 'Conference',
  //     start: new Date(2024, 4, 7, 12, 0),
  //     end: new Date(2024, 4, 7, 15, 0),
  //     color:'#7469B6'
  //   },
  // ];

  const handleSelectEvent = (event) => {
    if (event.isBooked) {
      alert('This event has been booked and cannot be booked again.');
      return;
    }
  
    setSelectedEvent(event);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleBookEvent = () => {
    const updatedScheduleData = scheduleData.map((event) => {
      if (event.id === selectedEvent.id) {
        return {
          ...event,
          isBooked: true,
        };
      }
      return event;
    });
  
    setScheduleData(updatedScheduleData);
    setVisible(false);
  };

  const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm');
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: event.color,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '1px solid transparent',
    };
  
    if (event.isBooked) {
      style = {
        ...style,
        backgroundColor: 'gray',
      };
    }
  
    return {
      style: style,
      event: event.isBooked ? (
        <span>
        {event.title} <span style={{ fontWeight: 'bold' }}>Booked</span>
        </span>
      ) : (
        event.title
      ),
    };
  };

  return (
    <div className="nav-tab-wrapper tabs  section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8 col-span-12">
            <div className="single-course-details">
        
              <div className=" mb-6">
                <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white ">
                 English
                </span>
              </div>
        
              <div
                className="author-meta mt-6 sm:flex  lg:space-x-16 sm:space-x-5 space-y-5 
               sm:space-y-0 items-center"
              >
                <div className="flex space-x-4 items-center group">
               
                  <div className="flex-1">
                    <span className=" text-secondary  ">
                      Tutor
                      <a href="#" className=" text-black">
                        : Miss Jane Potter
                      </a>
                    </span>
                  </div>
                </div>
               
              </div>
              <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="nav-tab-wrapper mt-12">
                  <Tab.List as="ul" id="tabs-nav" className="course-tab mb-8">
                    {["Bio", "Subject", "Schedule", "Reviews"].map(
                      (item, index) => (
                        <Tab
                          as="li"
                          key={index}
                          className={({ selected }) =>
                            selected ? "active" : null
                          }
                        >
                          <a href={`#tab`}>{item}</a>
                        </Tab>
                      )
                    )}
                  </Tab.List>
                  <Tab.Panels id="tabs-content">
                    <Tab.Panel id="tab1" className="tab-content">
                      <div>
                        <h3 className=" text-2xl">Bio</h3>
                        <p className="mt-4">
                         แนะนำตัวเอง
                          <br /> <br /> ประสบการณ์สอน
                          มีประสบการณ์การสอนภาษาอังกฤษมากกว่า 8 ปี ทั้งการสอนในห้องเรียนและการสอนส่วนตัว
คุณวุฒิการศึกษา:

ปริญญาตรี ภาษาอังกฤษ จากมหาวิทยาลัยแคลิฟอร์เนีย ลอสแองเจลิส
ประกาศนียบัตรผู้สอนภาษาอังกฤษเป็นภาษาต่างประเทศ (TEFL)
                        </p>
                       
                        <div>
                          <h4 className=" text-2xl">เครื่องมือสอน</h4>
                          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                            <div className=" bg-white  rounded px-5 py-[18px] flex   shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={laptop} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                (Zoom/GoogleMeet)
                              </span>
                            </div>
                            <div className=" bg-white  rounded px-5 py-[18px] flex  shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={pencil} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Slides & Game
                              </span>
                            </div>
                            <div className=" bg-white  rounded px-5 py-[18px] flex  shadow-box2 space-x-[10px] items-center">
                              <span className="flex-none">
                                <img src={wifi} alt="" />
                              </span>
                              <span className="flex-1 text-black">
                                Online
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel id="tab2" className="tab-content">
                      <div>
                        <h3 className=" text-2xl">Subjects</h3>
                        <div className="md:flex md:space-x-10  space-x-3 flex-wrap mt-4 mb-6">
                          <span>English for Beginner </span>
                          <span>Conversation</span>
                          <span>Phonics</span>
                          <span>TOEIC</span>
                          <span>IELTS</span>
                          <span>TOEFL</span>
                        </div>
                     
                      </div>
                    </Tab.Panel>


                    <Tab.Panel id="tab3" className="tab-content">
                    <div className="schedule">
                        <Calendar
                localizer={localizer}
                events={scheduleData}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={eventStyleGetter}
                />

                    <Modal
                        title="Event Details"
                        visible={visible}
                        onCancel={handleCloseModal}
                    
                        footer={[
                        <Button key="cancel" onClick={handleCloseModal}>
                            Cancel
                        </Button>,
                        <Button key="book"  onClick={handleBookEvent}>
                            Book
                        </Button>,
                        ]}
                    >
                        {selectedEvent && (
                        <>
                            <p>Title: {selectedEvent.title}</p>
                            <p>Start Time: {formatDate(selectedEvent.start)}</p>
                            <p>End Time: {formatDate(selectedEvent.end)}</p>
                            
                        </>
                        )}
                    </Modal>


                     </div>
                    </Tab.Panel>



                    <Tab.Panel as="div" id="tab4" className="tab-content">
                    
                        <div className="grid grid-cols-12 gap-6">
                         
                         

                          <div className="md:col-span-6 col-span-12">
                            <div className="bg-white min-h-[219px] p-6 flex flex-col justify-center items-center shadow-box7 rounded space-y-3">
                              <h2>5.0</h2>
                              <div className="flex space-x-3">
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                                <iconify-icon
                                  icon="heroicons:star-20-solid"
                                  class="text-tertiary"
                                ></iconify-icon>
                              </div>
                              <span className=" block">(200 Reviews)</span>
                            </div>
                          </div>
                        </div>
                        
                      
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="sidebarWrapper space-y-[30px]">
              <div className="wdiget custom-text space-y-5 ">
                <a className="h-[220px]  rounded relative block" href="#">
                  <img
                    src={thumb}
                    alt=""
                    className=" block w-full h-full object-cover rounded "
                  />
                  <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src={janepotter} alt="janepotter"/>
                  </div>
                </a>
                <h3>500/hr</h3>
               
                <button className="btn btn-primary w-full text-center" onClick={() => setSelectedIndex(2)}>
                  Book Now
                </button>
              
            
                <ul className="list">
                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={user} alt="" />
                      <div className=" text-black font-semibold">
                        Instructor
                      </div>
                    </div>
                    <div className="flex-none">Jane Potter</div>
                  </li>

        
               
                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={starIcon} alt="" />
                      <div className=" text-black font-semibold">Enrolled</div>
                    </div>
                    <div className="flex-none">2k Students</div>
                  </li>

    
                  <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                    <div className="flex-1 space-x-3 flex">
                      <img src={web} alt="" />
                      <div className=" text-black font-semibold">Language</div>
                    </div>
                    <div className="flex-none">English</div>
                  </li>
                </ul>
               
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetail;
