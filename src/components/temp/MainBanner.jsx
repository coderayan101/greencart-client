import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = [
  {
    desktop: "/banner-mini-0.png",
    mobile: "/banner-mobile2.png",
    title: "তাজা সবজি ও নিত্যপ্রয়োজনীয় পণ্য এখন আপনার দরজায়",
    subtitle: "চাষির কাছ থেকে সরাসরি আপনার জন্য সেরা মান, সেরা দাম, একদম ফ্রি ডেলিভারি।",
  },
  // {
  //   desktop: "/banner-mini-0.png",
  //   mobile: "/banner-mobile2.png",
  //   title: "Fresh Fruits Delivered",
  //   subtitle: "Farm Fresh Fruits at Your Doorstep",
  // },
  // {
  //   desktop: "/banner-mini-0.png",
  //   mobile: "/banner-mobile2.png",
  //   title: "Best Grocery Deals",
  //   subtitle: "Save More with Everyday Discounts",
  // },
];

const MainBanner = () => {
  return (
    <div className="relative">
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
        className="rounded-lg"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* Desktop Banner */}
              <img
                src={banner.desktop}
                alt="banner"
                className="hidden w-full rounded-lg md:block"
              />

              {/* Mobile Banner */}
              <img
                src={banner.mobile}
                alt="banner"
                className="w-full rounded-lg md:hidden"
              />

              {/* Banner Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:items-start md:pl-18 lg:pl-24">
                <h1 className="max-w-72 text-center text-3xl font-bold leading-tight md:max-w-80 md:text-left md:text-4xl lg:max-w-140 lg:leading-15">
                  {banner.title}
                </h1>

                <p className="mb-2 hidden text-sm md:flex md:text-base">
                  {banner.subtitle}
                </p>

                <div className="mt-6 flex items-center font-medium">
                  <Link
                    to="/products"
                    className="group hidden items-center gap-2 rounded bg-primary px-7 py-3 text-white transition hover:bg-primary-dull md:flex md:px-9"
                  >
                    Shop Now
                    {/* <img
                      src={assets.white_arrow_icon}
                      alt="arrow"
                      className="transition group-hover:translate-x-1"
                    /> */}
                  </Link>

                  <Link
                    to="/products"
                    className="group hidden items-center gap-2 px-9 py-3 md:flex"
                  >
                    Explore Deals
                    <img
                      src={assets.black_arrow_icon}
                      alt="arrow"
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous Button */}
      <button className="custom-prev absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-primary hover:text-white">
        <FaChevronLeft size={18} />
      </button>

      {/* Next Button */}
      <button className="custom-next absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-primary hover:text-white">
        <FaChevronRight size={18} />
      </button>
    </div>
  );
};

export default MainBanner;