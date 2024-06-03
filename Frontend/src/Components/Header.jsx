import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/prepmeelogo.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null); // เพิ่ม state สำหรับเก็บ token

  const scrollNav = useRef(null);

  useEffect(() => {
    // Check if the user is logged in
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken); // เซ็ตค่า token ใน state ในกรณีที่มี token ใน localStorage
    } else {
      setIsLoggedIn(false);
      setToken(null);
    }

    // Scrolling nav
    const handleScroll = () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current.classList.toggle("rt-sticky-active", windowScroll);
      scrollNav.current.classList.toggle("sticky", windowScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // ลบ token ออกจาก localStorage
    setIsLoggedIn(false);
    setToken(null);
    window.location.href = '/SignIn'; // ออกจากระบบและ redirect ไปที่หน้า sign in
  };

  return (
    <>
      <header
        className="site-header home-one-header top-0 w-full z-[999] rt-sticky"
        ref={scrollNav}
      >
        <div className="main-header py-6">
          <div className="container">
            <div className="flex items-center justify-between">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]"
              >
                <img src={logo} alt="logo" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classes">
                    <li>
                      <a href="/" className="home">Home</a>
                    </li>
                    <li>
                      <a href="/FindTutors">Find Tutors</a>
                    </li>
                    <li>
                      <Link to={"/ContactUs"}>
                        Contacts
                      </Link>
                    </li>
                    <li>
                      <Link to={"/ApplyToteach"}>
                        Apply to Teach
                      </Link>
                    </li>
                    {isLoggedIn && (
                      <li>
                        <Link to={"/StudentPage"}>
                          Profile
                        </Link>
                      </li>
                    )}
                     {isLoggedIn && (
                      <li>
                        <Link to={"/StudentPage"}>
                          Balance : 0.00 ฿
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className="hidden lg:block">
                    {isLoggedIn ? (
                      <button className="btn btn-primary py-[15px] px-8" onClick={handleLogout}>
                        Logout
                      </button>
                    ) : (
                      <a href="/SignIn" className="btn btn-primary py-[15px] px-8">
                        Start Booking
                      </a>
                    )}
                  </div>
                  <div className="block lg:hidden">
                    <button
                      type="button"
                      className="text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;