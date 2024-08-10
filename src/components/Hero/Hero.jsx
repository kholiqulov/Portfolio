import React, { useEffect } from "react";
import { BsTelephoneOutbound } from "react-icons/bs";
import AOS from "aos";

// ------> Images
import Me from "../../Assets/Images/dev.png";

// ------> Css
import "./hero.css";

function Hero() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="home" className="mt-12 sm:mt-[70px] pt-[100px] sm:pt-[130px]">
      <div className="container flex flex-wrap justify-center lg:flex lg:items-center lg:justify-between">
        <div className="max-w-[500px] text-center lg:text-start">
          <div data-aos="fade-up" data-aos-duration="600" className="flex">
            <h2 className="flex mx-auto lg:mx-0 items-end font-semibold text-4xl sm:text-5xl text-white tracking-normal">
              Hi, I'm
              <ul id="enthusiasm" className="list flex items-center m-0 p-0">
                <li id="N" className="item">
                  N
                </li>
                <li id="O" className="item">
                  o
                </li>
                <li id="D" className="item">
                  d
                </li>
                <li id="I" className="item">
                  i
                </li>
                <li id="R" className="item">
                  r
                </li>
                <li id="B" className="item">
                  b
                </li>
                <li id="E" className="item">
                  e
                </li>
                <li id="K" className="item">
                  k
                </li>
                <li id="DOT" className="item">
                  .
                </li>
              </ul>
            </h2>
          </div>
          <strong
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="100"
            className="inline-block dev font-normal text-base sm:text-2xl mt-3 mb-3 sm:mt-2 sm:mb-3 text-gray-300 -z-20"
          >
            Frontend developer
          </strong>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="text-gray-300 text-base"
          >
            As a passionate and skilled Front End Developer, I bring over a year
            of experience in leveraging JavaScript, React.js, and Next.js to
            create exceptional products for customers. My expertise includes
            working collaboratively on GitHub, ensuring seamless team
            integration and responsibility for all my duties. In addition to my
            development work, I am the co-founder of CodeBridge School and
            VistaWave, where I have demonstrated my leadership and innovative
            capabilities. Looking ahead, I am excited about the prospect of
            establishing my own company and expanding it with a dedicated team
            of employees.
          </p>
          <a
            href="tel:+998970130322"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
            className="flex items-center mx-auto lg:mx-0 w-fit text-sm border border-[#64ffda] text-[#64ffda] rounded-[4px] hover:bg-[rgba(100,255,218,0.1)] py-2 px-4 duration-200 mt-6 group"
          >
            Contact Me <BsTelephoneOutbound className="ml-2 text-[#64ffda]" />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="250"
          className="relative sm:ml-5 mt-14 lg:mt-0"
        >
          <img
            className="max-w-[300px] sm:max-w-[420px] w-full h-[300px] sm:h-[420px] z-50 rounded-tl-[100px] sm:rounded-tl-[150px] rounded-br-[100px] sm:rounded-br-[150px] rounded-tr-[20px]"
            src={Me}
            alt="front-img"
          />
          <span className="absolute w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full bg-[#114b50] blur-2xl sm:blur-3xl -right-[10px] sm:-right-[0px] top-[0px] -z-10"></span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
