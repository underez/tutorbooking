import React from "react";
import ManOne from "../assets/images/banner/man1.png";


const Banner = () => {
  return (
    <section
      className={`xl:min-h-screen bg-[url('../images/banner/1.png')] bg-cover bg-no-repeat bg-center overflow-hidden`}
    >
      <div className="container relative">
        <div className="max-w-[570px] xl:pt-[297px] md:pt-20 md:pb-20 pt-28 pb-14 xl:pb-40 space-y-8">
          <h1>
            One-on-One{" "}
            <span className=" text-secondary inline-block bg-[url('../images/banner/shape.svg')]  bg-no-repeat bg-bottom">
              Tutor
            </span>{" "}
            For Everyone
          </h1>
          <div className=" plain-text text-gray leading-[40px]">
            เรียนออนไลน์ตัวต่อตัวกับติวเตอร์มืออาชีพ ครบครันทุกวิชา
          </div>
      
           
          

            <a href="/SignIn" className="btn btn-primary w-full lg:w-auto">
  Get Started Now
</a>
            
          </div>
        </div>
        <div className="imge-box absolute xl:right-[-260px]  hidden xl:block   bottom-0  ">
          <img src={ManOne} alt="manOne" />
        </div>
      
    </section>
  );
};

export default Banner;
