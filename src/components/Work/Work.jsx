import React from "react";
import { TfiGallery } from "react-icons/tfi";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// ------> Images
import Powermate from "../../Assets/Images/powermate.png";
import VistaWave from "../../Assets/Images/vistawave.png";
import Intex from "../../Assets/Images/intex.png";
import Bito from "../../Assets/Images/bito.png";
import IApply from "../../Assets/Images/IApply.png";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./work.css";

// ------> data
const data = [
  {
    id: 0,
    title: "VISTAWAVE - IT company in Uzbekistan",
    text: "VistaWave is an experienced and passionate group of designers, developers and project managers. Every client we work with becomes a part of the team.",
    image: VistaWave,
    alt: "VistaWave",
    link: "https://vistawaves.uz/",
  },
  {
    id: 1,
    title: "Powerful - industial diesel generators",
    text: "Power Met International are experts in importing and installing generator systems to keep your business running smoothly.",
    image: Powermate,
    alt: "Powermate",
    link: "https://www.generatoruz.com/uz",
  },
  {
    id: 2,
    title: "INTEX - Pools from intex in Tashkent",
    text: "Swimming pools from intex are affordable, high-quality, reliable and environmentally friendly products that are designed for a pleasant stay for the whole family.",
    image: Intex,
    alt: "Intex",
    link: "https://new-intex.vercel.app/",
  },
  {
    id: 3,
    title: "Bito - Automate your business with us",
    text: "Everything you need in one system: sales, procurement, warehouse, finance, customers and suppliers.",
    image: Bito,
    alt: "Bito",
    link: "https://bito-landing-page.vercel.app/",
  },
  {
    id: 4,
    title: "IApply - Your gateway to studying abroad",
    text: "Get free consultation about studying abroad ... Our dedicated team at iApply.org is here to offer personalized advice, guiding you towards your ideal university.",
    image: IApply,
    alt: "IApply",
    link: "https://iapply.org/",
  },
];

function Work() {
  return (
    <section id="work" className="pt-[80px] sm:pt-[120px]">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Portfolio{" "}
          <span className="inline-block ml-2">
            <TfiGallery className="text-lg sm:text-xl" />
          </span>
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full ml-5"></span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-gray-300 text-center max-w-[600px] w-full mx-auto mt-8 sm:mt-12"
        >
          Here's a list of some projects I have done. I gained a lot of
          experience while doing these projects.
        </p>
        <Swiper
          className="mySwiper mt-12"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          navigation={true}
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Autoplay]}
        >
          <div>
            {data?.map((item) => (
              <SwiperSlide key={item?.id} className="">
                <div class="max-w-[280px] sm:max-w-[320px] h-[470px] sm:h-[450px] w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    class="rounded-t-lg w-full h-[170px] cursor-pointer object-cover"
                    src={item?.image}
                    alt={item?.alt}
                  />
                  <div class="p-5">
                    <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item?.title}
                    </h3>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item?.text}
                    </p>
                    <a
                      target="_blank"
                      aria-label="seeproject"
                      rel="noreferrer"
                      href={item?.link}
                      class="inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <span className="block">See project</span>
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Work;
