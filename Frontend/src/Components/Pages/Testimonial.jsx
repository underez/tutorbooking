import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper";
import { t1 } from "../../constant/images";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

const Testimonial = () => {
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  return (
    <div className=" section-padding bg-[url('../images/all-img/section-bg-12.png')]  bg-no-repeat bg-cover">
      <Swiper
        navigation={{
          prevEl: ".slickprev",
          nextEl: ".slicknext",
        }}
        spaceBetween={30}
        loop
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
            opacity: [0],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Navigation, EffectCreative]}
        className="container"
      >
        <SwiperSlide className="grid  lg:grid-cols-2 grid-cols-1  xl:gap-[60px] gap-6">
          <div>
            <div className="slider-nav">
              <div className="single-item">
                <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px] rounded-md">
                  <img
                    src={t1}
                    alt=""
                    className=" object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mini-title">Testimonial</div>
            <h4 className="column-title ">
              Our Tallented Students Valuable
              <span className="shape-bg text-black">Feedback</span>
            </h4>
            <div className="slider-for mt-10">
              <div className="single-item">
                <div>
                  <h3 className=" text-2xl font-bold text-black mb-8">
                    “It’s Truly The Best Solution For Me”
                  </h3>
                  <div className="mb-8">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered. There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration.
                  </div>
                  <div>
                    <span className=" block  font-semibold text-black mb-1">
                      Alfred Helmerich
                    </span>
                    <span className=" block  font-semibold text-primary">
                      Executive Training Manager
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid  lg:grid-cols-2 grid-cols-1  xl:gap-[60px] gap-6">
          <div>
            <div className="slider-nav">
              <div className="single-item">
                <div className="xl:h-[593px] lg:h-[400px] h-[150px] lg:w-full w-[150px] rounded-md">
                  <img
                    src={t1}
                    alt=""
                    className=" object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mini-title">Testimonial</div>
            <h4 className="column-title ">
              Our Tallented Students Valuable
              <span className="shape-bg text-black">Feedback</span>
            </h4>
            <div className="slider-for mt-10">
              <div className="single-item">
                <div>
                  <h3 className=" text-2xl font-bold text-black mb-8">
                    “It’s Truly The Best Solution For Me”
                  </h3>
                  <div className="mb-8">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </div>
                  <div>
                    <span className=" block  font-semibold text-black mb-1">
                      Alfred Helmerich
                    </span>
                    <span className=" block  font-semibold text-primary">
                      Executive Training Manager
                    </span>
                  </div>
                  <br />
                  <div>
                    <span className=" block  font-semibold text-black mb-1">
                      Alfred Helmerich
                    </span>
                    <span className=" block  font-semibold text-primary">
                      Executive Training Director
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="space-x-5 flex justify-center lg:mt-10 mt-8">
          <button
            className="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                    hover:text-white shadow-box slickprev text-3xl text-primary"
            ref={prevBtn}
          >
            <iconify-icon icon="heroicons:arrow-left-20-solid"></iconify-icon>
          </button>
          <button
            className="lg:h-[64px] lg:w-[64px] h-12 w-12 flex flex-col items-center justify-center rounded-md bg-white hover:bg-primary
                    hover:text-white shadow-box slicknext text-3xl text-primary"
            ref={nextBtn}
          >
            <iconify-icon icon="heroicons:arrow-right-20-solid"></iconify-icon>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
