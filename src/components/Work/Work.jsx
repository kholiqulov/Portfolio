import React from "react";
import { TfiGallery } from "react-icons/tfi";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";

// ------> Images
import Powermate from "../../Assets/Images/powermate.webp";
import VistaWave from "../../Assets/Images/vistawave.webp";
import Optimum from "../../Assets/Images/optimum.webp";
import Product from "../../Assets/Images/product.webp";
import IApply from "../../Assets/Images/IApply.webp";
import Rental from "../../Assets/Images/rental.webp";
import Coffeeroaster from "../../Assets/Images/Coffeeroaster.webp";
import Intex from "../../Assets/Images/intex.webp";
import Bito from "../../Assets/Images/bito.webp";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
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
    text: "PowerMet International is expert in importing and installing generator systems to keep your business running smoothly and produces innovative generators.",
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
  {
    id: 5,
    title: "Car rental - Rent a car appropriately.",
    text: "We provide our customers with the most incredible driving emotions. That is why there are only world-class cars in our fleet and you can find any cars.",
    image: Rental,
    alt: "Rental",
    link: "https://cheery-haupia-8e0c06.netlify.app/",
  },
  {
    id: 6,
    title: "Product - Work at the speed of thought",
    text: "Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.",
    image: Product,
    alt: "Product",
    link: "https://nodirbek-my-product.netlify.app/",
  },
  {
    id: 7,
    title: "Coffeeroasters - Great coffee made simple",
    text: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    image: Coffeeroaster,
    alt: "Coffeeroaster",
    link: "https://nodirbek-coffe-maket.netlify.app/",
  },
  {
    id: 8,
    title: "Optimum - Transportation Services",
    text: "Optimum Auto Transport is a vehicle shipping company in the USA. We make sure that our professional drivers serve customers with very high quality.",
    image: Optimum,
    alt: "Optimum",
    link: "https://transportation-services.vercel.app/",
  },
  {
    id: 9,
    title: "VISTAWAVE - IT company in Uzbekistan",
    text: "VistaWave is an experienced and passionate group of designers, developers and project managers. Every client we work with becomes a part of the team.",
    image: VistaWave,
    alt: "VistaWave",
    link: "https://vistawaves.uz/",
  },
  {
    id: 10,
    title: "Powerful - industial diesel generators",
    text: "PowerMet International is expert in importing and installing generator systems to keep your business running smoothly and produces innovative generators.",
    image: Powermate,
    alt: "Powermate",
    link: "https://www.generatoruz.com/uz",
  },
  {
    id: 11,
    title: "INTEX - Pools from intex in Tashkent",
    text: "Swimming pools from intex are affordable, high-quality, reliable and environmentally friendly products that are designed for a pleasant stay for the whole family.",
    image: Intex,
    alt: "Intex",
    link: "https://new-intex.vercel.app/",
  },
  {
    id: 12,
    title: "Bito - Automate your business with us",
    text: "Everything you need in one system: sales, procurement, warehouse, finance, customers and suppliers.",
    image: Bito,
    alt: "Bito",
    link: "https://bito-landing-page.vercel.app/",
  },
  {
    id: 13,
    title: "IApply - Your gateway to studying abroad",
    text: "Get free consultation about studying abroad ... Our dedicated team at iApply.org is here to offer personalized advice, guiding you towards your ideal university.",
    image: IApply,
    alt: "IApply",
    link: "https://iapply.org/",
  },
  {
    id: 14,
    title: "Car rental - Rent a car appropriately.",
    text: "We provide our customers with the most incredible driving emotions. That is why there are only world-class cars in our fleet and you can find any cars.",
    image: Rental,
    alt: "Rental",
    link: "https://cheery-haupia-8e0c06.netlify.app/",
  },
  {
    id: 15,
    title: "Product - Work at the speed of thought",
    text: "Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.",
    image: Product,
    alt: "Product",
    link: "https://nodirbek-my-product.netlify.app/",
  },
  {
    id: 16,
    title: "Coffeeroasters - Great coffee made simple",
    text: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    image: Coffeeroaster,
    alt: "Coffeeroaster",
    link: "https://nodirbek-coffe-maket.netlify.app/",
  },
  {
    id: 17,
    title: "Optimum - Transportation Services",
    text: "Optimum Auto Transport is a vehicle shipping company in the USA. We make sure that our professional drivers serve customers with very high quality.",
    image: Optimum,
    alt: "Optimum",
    link: "https://transportation-services.vercel.app/",
  },
];

function Work() {
  return (
    <section id="work" className="pt-[80px] sm:pt-[120px]">
      <div className="container">
        <h2 className="flex items-center justify-center text-xl sm:text-2xl text-white">
          <span className="inline-block w-14 sm:w-40 h-[1px] bg-[rgba(100,255,218,0.1)] rounded-full mr-5"></span>{" "}
          Portfolio
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
          className="swiper-container mt-12 relative"
          navigation={false}
          pagination={false}
          effect="coverflow"
          grabCursor="true"
          centeredSlides="true"
          loop="true"
          slidesPerView={"auto"}
          // spaceBetween={50}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, EffectCoverflow]}
        >
          <div>
            {data?.map((item) => (
              <SwiperSlide
                key={item?.id}
                className="left-[-60px] sm:left-[-20px]"
              >
                <div className="card">
                  <img src={item?.image} alt="content_image" />
                  <div className="card-content">
                    <h2 className="text-lg font-extrabold">{item?.title}</h2>
                    <p className="!mb-3 font-normal text-[14px] text-[#f4f4f4]">
                      {item?.text}
                    </p>
                    <a
                      target="_blank"
                      aria-label="seeproject"
                      rel="noreferrer"
                      href={item?.link}
                      className="inline-flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-[#64ffda] border-[#64ffda] border group transition ease-in-out delay-200"
                    >
                      <span className="block text-[#64ffda] group-hover:text-[#0a192f]">
                        See project
                      </span>
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-[#64ffda] group-hover:text-[#0a192f]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
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
