/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/prepmeelogo.png";
import { fbIcon, twIcon, pnIcon, insIcon } from "../constant/images";

const MobileMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <>
      <div className="openmobile-menu fixed top-0 h-screen pt-10 pb-6 bg-white shadow-box2 w-[320px] overflow-y-auto flex flex-col z-[999] active-mobile-menu">
        <div className="flex justify-between px-6 flex-none">
          <Link to={"/react-templates/edumim/home"} className="brand-logo flex-none mr-10 ">
            <img src={logo} alt="logo" width={120} />
          </Link>
          <span
            className="text-3xl text-black cursor-pointer rt-mobile-menu-close"
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
          >
            <iconify-icon icon="fe:close"></iconify-icon>
          </span>
        </div>
        <div className="mobile-menu mt-6 flex-1">
          <ul className="menu-active-classNamees">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="/FindTutors">Find Tutors</Link>
            </li>
            <li>
              <Link to="/ApplyToTeach">Apply to Teach</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contacts</Link>
            </li>
            <li>
              <Link to="/StudentPage">Profile</Link>
            </li>
            <li>
              <Link to="/FindTutors">Book Now</Link>
            </li>
          </ul>
        </div>
        <div className="flex-none pb-4">
          <div className="text-center text-black font-semibold mb-2">
            Follow Us
          </div>
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={fbIcon} alt="fbIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={twIcon} alt="twiter" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={pnIcon} alt="pnIcon" />
              </a>
            </li>
            <li>
              <a href="#" className="flex h-10 w-10">
                <img src={insIcon} alt="insIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`rt-mobile-menu-overlay ${activeMenu && "active"}`}></div>
    </>
  );
};

export default MobileMenu;
