import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {
  FaChevronLeft,
  FaChevronRight,
  FaLeaf,
  FaTruck,
  FaTags,
  FaWhatsapp,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = [
  {
    desktop: "/banner-mini-00.png",
    mobile: "/banner-mobile1.png",
    title: (
      <>
        <span className="text-primary">
          তাজা সবজি ও নিত্যপ্রয়োজনীয়
        </span>
        <br />
        <span className="text-gray-900">
          পণ্য এখন আপনার
        </span>
        <br />
        <span className="text-primary">
          দরজায়
        </span>
      </>
    ),
    subtitle:
      "চাষির কাছ থেকে সরাসরি আপনার জন্য – সেরা মান, সেরা দাম, একদম ফ্রি ডেলিভারি।",
    button1: "এখনই অর্ডার করুন",
    button2: "সব পণ্য দেখুন",
    badge: "প্রথম অর্ডারে\n২০% ছাড়",
  },
  {
    desktop: "/banner-mini-00.png",
    mobile: "/banner-mobile2.png",
    title: (
      <>
        <span className="text-primary">
          কৃষকের কাছ থেকে
        </span>
        <br />
        <span className="text-gray-900">
         সরাসরি সংগ্রহ করা
        </span>
        <br />
        <span className="text-primary">
          তাজা পণ্য।
        </span>
      </>
    ),
    subtitle:
      "চাষির কাছ থেকে সরাসরি আপনার জন্য – সেরা মান, সেরা দাম, একদম ফ্রি ডেলিভারি।",
    button1: "এখনই অর্ডার করুন",
    button2: "সব পণ্য দেখুন",
    badge: "প্রথম অর্ডারে\n২০% ছাড়",
  },
  {
    desktop: "/banner-mini-00.png",
    mobile: "/banner-mobile3.png",
    title: (
      <>
        <span className="text-primary">
          দৈনন্দিন বাজার
        </span>
        <br />
        <span className="text-gray-900">
         এখন আরও সহজ
        </span>
        <br />
        <span className="text-primary">
          ও সাশ্রয়ী
        </span>
      </>
    ),
    subtitle:
      "চাষির কাছ থেকে সরাসরি আপনার জন্য – সেরা মান, সেরা দাম, একদম ফ্রি ডেলিভারি।",
    button1: "এখনই অর্ডার করুন",
    button2: "সব পণ্য দেখুন",
    badge: "প্রথম অর্ডারে\n২০% ছাড়",
  },
];

const MainBanner = () => {
  return (
    <section className="relative md:mb-12 lg:mb-4">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
      >
        {banners.map((banner, index) => (

          <SwiperSlide key={index}>

            <div className="relative">

              <img
                src={banner.desktop}
                alt=""
                className="hidden md:block w-full"
              />

              <img
                src={banner.mobile}
                alt=""
                className="block md:hidden w-full"
              />

              <div className="absolute inset-0 flex items-center">

                <div className="w-full md:w-[60%] px-6 md:px-12 lg:px-20">

                  <h1 className="text-2xl md:text-2xl lg:text-4xl font-extrabold leading-normal">
                    {banner.title}
                  </h1>

                  <p className="hidden md:block mt-8 max-w-xl text-lg text-gray-700 leading-8">
                    {banner.subtitle}
                  </p>

                  <div className="hidden lg:flex items-center gap-8 mt-8">

                    <div className="flex items-center gap-2">
                      <FaLeaf className="text-primary text-xl"/>
                      <span>তাজা পণ্য</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaTags className="text-primary text-xl"/>
                      <span>সেরা দাম</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaTruck className="text-primary text-xl"/>
                      <span>ফ্রি ডেলিভারি</span>
                    </div>

                  </div>

                  <div className="hidden md:flex items-center gap-4 lg:gap-5 mt-8 lg:mt-10">

                    <Link
                      to="/products"
                      className="flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dull px-5 md:px-6 lg:px-8 py-3 lg:py-4 text-white font-semibold text-sm lg:text-base"
                    >
                      <FaWhatsapp className="text-2xl"/>

                      {banner.button1}
                    </Link>

                    <Link
                      to="/products"
                      className="rounded-xl border border-gray-300 bg-white px-5 md:px-6 lg:px-8 py-3 lg:py-4 font-semibold hover:bg-gray-100 transition"
                    >
                      {banner.button2}
                    </Link>

                  </div>

                </div>
                                {/* Discount Badge */}
                <div className="hidden lg:flex absolute right-12 bottom-12 z-20">
                  <div className="h-44 w-44 rounded-full border-[6px] border-yellow-500 bg-yellow-200 shadow-2xl flex items-center justify-center">
                    <div className="text-center whitespace-pre-line">
                      <h2 className="text-3xl font-extrabold text-primary">
                        {banner.badge}
                      </h2>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </SwiperSlide>

        ))}
      </Swiper>

      {/* Previous Button */}
      <button className="custom-prev hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-primary hover:text-white transition-all">
        <FaChevronLeft size={18} />
      </button>

      {/* Next Button */}
      <button className="custom-next hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-primary hover:text-white transition-all">
        <FaChevronRight size={18} />
      </button>
    </section>
  );
};

export default MainBanner;