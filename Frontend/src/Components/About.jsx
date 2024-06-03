/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import lightImg from "../assets/images/svg/light.svg";
import aboutOne from "../assets/images/all-img/about1.png";
import targetImg from "../assets/images/svg/target.svg";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <img src={aboutOne} alt="aboutOne" className=" mx-auto" />
          </div>
          <div>
            <div className="mini-title">About Edumim</div>
            <h4 className="column-title ">
              The Place Where You Can
              <span className="shape-bg">Achieve</span>
            </h4>
            <div>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </div>
            <ul className=" list-item space-y-6 pt-8">
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={lightImg}
                      alt="lightImg"
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Mission</h4>
                  <div>
                    There are many variations of passages of the Lorem Ipsum
                    available.
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="flex-none mr-6">
                  <div className="h-[72px] w-[72px] rounded-full">
                    <img
                      src={targetImg}
                      alt=""
                      className=" w-full h-full object-cover rounded-full block"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-xl mb-1">Our Vision</h4>
                  <div>
                    There are many variations of passages of the Lorem Ipsum
                    available.
                  </div>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <a href="#" className=" btn btn-primary">
                Read More Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
