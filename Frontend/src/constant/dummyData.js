import {
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  counter1,
  counter2,
  counter3,
  counter4,

} from "./images";

export const achivementCounter = [
  {
    icon: counter1,
    num: 82 + "k",
    sector: "Enrolled Students",
  },
  {
    icon: counter2,
    num: 460,
    sector: "Academic Programs",
  },
  {
    icon: counter3,
    num: 20,
    sector: "Certified Studens",
  },
  {
    icon: counter4,
    num: 200,
    sector: "Award Winnig",
  },
];



export const courseData = [
  {
    id: [1],
    subjectid: [1],
    post: "Thai",
    title: "Kru Somsri",
    price: "400/hr",
    img: c1,
    ratings: "4.5",
    time: "500 hrs",
    lesson: "500 Lessons",
   
  },
  {
    id: [2],
    subjectid: [2],
    post: "English",
    price: "500/hr",
    title: "Miss Jane",
    img: c2,
    ratings: "4.5",
    time: "800 hrs",
    lesson: "800 Lessons",
   
  },
  {
    id: [3],
    subjectid: [3],
    post: "Art",
    price: "350/hr",
    title: "Kru Pat",
    img: c3,
    ratings: "4.9",
    time: "200 hrs",
    lesson: "200 Lessons",
    
  },

  {
    id: [4],
    subjectid: [4],
    post: "Math",
    title: "Kru Pook",
    price: "450/hr",
    img: c5,
    ratings: "5.0",
    time: "390 hrs",
    lesson: "390 Lessons",
    
  },
  {
    id: [5],
    subjectid: [5],
    post: "Physics",
    title: "Kru Tor",
    price: "450/hr",
    img: c6,
    ratings: "4.8",
    time: "350 hrs",
    lesson: "350 Lessons",
    
  },

  {
    id: [6],
    subjectid: [6],
    post: "Korean",
    title: "Miss Kim",
    price: "500/hr",
    img: c4,
    ratings: "4.5",
    time: "500 hrs",
    lesson: "500 Lessons",
   
  },
  {
    id: [7],
    subjectid: [2],
    post: "English",
    title: "Kru Som",
    price: "450/hr",
    img: c4,
    ratings: "4.5",
    time: "500 hrs",
    lesson: "500 Lessons",
   
  },

  
];



export const scheduleData = [
  {
    id: 1,
    title: 'Kru Somsri',
    start: new Date(2024, 4, 6, 10, 0),
    end: new Date(2024, 4, 6, 12, 0),
    color:'#AD88C6',
    isBooked: false
  },
  {
    id: 2,
    title: 'Miss Jane',
    start: new Date(2024, 4, 7, 12, 0),
    end: new Date(2024, 4, 7, 15, 0),
    color:'#7469B6',
    isBooked: false
  },
  {
    id: 3,
    title: 'Kru Pat',
    start: new Date(2024, 4, 25, 13, 0),
    end: new Date(2024, 4, 25, 15, 0),
    color:'#7469B6',
    isBooked: false
  },
  {
    id: 4,
    title: 'Miss Kim',
    start: new Date(2024, 4, 23, 13, 0),
    end: new Date(2024, 4, 23, 15, 0),
    color:'#AD88C6',
    isBooked: false
  },
  {
    id: 5,
    title: 'Kru Pook',
    start: new Date(2024, 4, 24, 13, 0),
    end: new Date(2024, 4, 24, 15, 0),
    color:'#7469B6',
    isBooked: false
  },
  {
    id: 6,
    title: 'Kru Tor',
    start: new Date(2024, 4, 26, 13, 0),
    end: new Date(2024, 4, 26, 15, 0),
    color:'#AD88C6',
    isBooked: false
  },
  
];
