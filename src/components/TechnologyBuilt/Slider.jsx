import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
// import sliderImg1 from "../../assets/images/slider-img1";
import sliderImg1 from "../../assets/images/slider-img1.jpg";
import sliderImg2 from "../../assets/images/slider-img2.jpg";
import sliderImg3 from "../../assets/images/slider-img3.jpg";
import sliderImg4 from "../../assets/images/slider-img4.jpg";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide className="ml-40 ">
          <h4 className="text-3xl font-bold mt-10 hidden xl:block">
            Customer focused
          </h4>
        </SwiperSlide>
        <SwiperSlide className="">
          <h4 className="text-3xl font-bold mt-10 hidden xl:block">
            Agile and adaptable
          </h4>
        </SwiperSlide>
        <SwiperSlide className="">
          <h4 className="text-3xl font-bold mt-10 hidden xl:block">
            Compliance ready
          </h4>
        </SwiperSlide>
        <SwiperSlide className="">
          <h4 className="text-3xl font-bold mt-10 hidden xl:block">
            Secure and safe
          </h4>
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        autoplay={{
          speed: 800,
          delay: 3000,
          disableOnInteraction: false,
          breakpoints: {
            600: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          },
        }}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="shadow-blue-400">
            <div className="  ">
              <div
                className=""
                style={{
                  filter:
                    "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                }}
              >
                <div className="grid xl:grid-cols-2 bg-white xl:mx-40  p-16 gap-10 rounded-2xl">
                  <div className="">
                    <p className="text-[#1F80F0]  font-bold uppercase monserret">
                      Customer focused
                    </p>
                    <h4 className="xl:text-[40px] monserret !leading-[1.4] text-2xl font-bold text-[#164377] py-5">
                      Purpose-built financial <br /> services
                    </h4>
                    <p className="text-[#164377] font-extrabold">
                      Elevate customer experience and achieve <br /> agile
                      financial product innovation with the world’s first,
                      <p>
                        consumer-centric, real-time transaction account
                        processing and <br />
                        credit limit system.
                      </p>
                    </p>
                    <p className="py-5 text-[#164377]">
                      Experience the advantages of integrated retail financial
                      services <br /> technology, real-time analysis of
                      <span>
                        transactional behaviour <br /> and product marketing
                        opportunities.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img className="w-full rounded-2xl" src={sliderImg1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-blue-400">
            <div className="  ">
              <div
                className=""
                style={{
                  filter:
                    "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                }}
              >
                <div className="grid xl:grid-cols-2 bg-white xl:mx-40  p-16 gap-10 rounded-2xl">
                  <div className="">
                    <p className="text-[#1F80F0] monserret  font-bold uppercase ">
                      Agile and adaptable
                    </p>
                    <h4 className="xl:text-[40px] monserret !leading-[1.4] text-2xl font-bold text-[#164377] py-5">
                      Agile and adaptable <br /> for growth
                    </h4>
                    <p className="text-[#164377] font-extrabold">
                      Innovate with evolving customer demands through <br />
                      our open platform-based technology architecture.
                      <p>
                        Stay ahead of the ever-changing financial landscape with
                        a <br /> strong focus on security, compliance and
                        performance.
                      </p>
                    </p>
                    <p className="py-5 text-[#164377]">
                      Optimise your offerings to unlock new revenue streams
                      <br />
                      and deliver an extraordinary customer experience,
                      <span>
                        with digitally designed <br /> core banking, payment
                        processing and lending capabilities.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img className="w-full rounded-2xl" src={sliderImg2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-blue-400">
            <div className="  ">
              <div
                className=""
                style={{
                  filter:
                    "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                }}
              >
                <div className="grid xl:grid-cols-2 bg-white xl:mx-40  p-16 gap-10 rounded-2xl">
                  <div className="">
                    <p className="text-[#1F80F0] monserret font-bold uppercase ">
                      Compliance ready
                    </p>
                    <h4 className="xl:text-[40px] monserret !leading-[1.4] text-2xl font-bold text-[#164377] py-5">
                      Manage compliance <br /> with ease
                    </h4>
                    <p className="text-[#164377] font-extrabold">
                      Navigate through the evolving regulatory landscape <br />
                      with confidence by streamlining compliance
                      <p>
                        management—through real-time risk monitoring <br />
                        solutions powered by AI and machine learning.
                      </p>
                    </p>

                    <p className="py-5 text-[#164377]">
                      Transform your compliance strategy with flexible and
                      <br />
                      diversified policy rules, powered by cutting-edge
                      <span>
                        technology that is <br />
                        designed for seamless integration with core banking and
                        card payment systems.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img className="w-full rounded-2xl" src={sliderImg3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-blue-400">
            <div className="  ">
              <div
                className=""
                style={{
                  filter:
                    "drop-shadow(rgba(207, 233, 247, 0.47) 0px 16px 21px)",
                }}
              >
                <div className="grid xl:grid-cols-2 bg-white xl:mx-40  p-16 gap-10 rounded-2xl">
                  <div className="">
                    <p className="text-[#1F80F0] monserret  font-bold uppercase ">
                      Secure and safe
                    </p>
                    <h4 className="xl:text-[40px] monserret text-2xl !leading-[1.4] font-bold text-[#164377] py-5">
                      Highly secure <br /> and safe
                    </h4>
                    <p className="text-[#164377]">
                      Discover unparalleled security trusted by financial <br />
                      institutions across the globe. Our applications are
                      <p>
                        meticulously developed in compliance with international
                        security <br /> standards, drawing on 20 years of
                        technical expertise.
                      </p>
                    </p>

                    <p className="py-5 text-[#164377]">
                      Join over 40 esteemed Fls, each serving more than 200
                      million customers,
                      <span>
                        and benefit from our secure, robust and reliable
                        infrastructure.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img className="w-full rounded-2xl" src={sliderImg4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
