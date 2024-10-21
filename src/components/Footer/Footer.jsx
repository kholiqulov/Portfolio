import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";

// ------> Images
import Me from "../../Assets/Images/me.png";

function Footer() {
  return (
    <footer className="mt-[80px] sm:mt-[120px]">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              className="h-[40px] w-[40px] rounded-full z-50"
              src={Me}
              alt="front-img"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
                Academic skills
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-2">
                <li data-aos="fade-up" data-aos-duration="600">
                  <p>Math</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                >
                  <p>Physics</p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <p>English</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
                Passion projects
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 space-y-2">
                <li data-aos="fade-up" data-aos-duration="600">
                  <a
                    href="https://www.linkedin.com/company/codebridge-schooll"
                    className="hover:underline"
                    rel="noreferrer"
                    alt="codebridgeschool"
                    target="_blank"
                  >
                    CodeBridge School
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                >
                  <a
                    href="https://www.vistawaves.uz/"
                    className="hover:underline"
                    rel="noreferrer"
                    alt="vistawave"
                    target="_blank"
                  >
                    VistaWave
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <a
                    href="https://iapply.org/"
                    className="hover:underline"
                    rel="noreferrer"
                    alt="IApply"
                    target="_blank"
                  >
                    IApply
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 space-y-2">
                <li data-aos="fade-up" data-aos-duration="600">
                  <a href="/" className="hover:underline" alt="link">
                    Privacy Policy
                  </a>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                >
                  <a href="/" className="hover:underline" alt="link">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 " /> */}
        <div className="sm:flex sm:items-center sm:justify-between sm:flex-row-reverse mt-10 md:mt-6">
          <ul className="flex items-center space-x-4 ">
            <li>
              <a
                href="https://www.linkedin.com/in/nodirbek-kholiqulov-67a712246/"
                target="_blank"
                rel="noreferrer"
                alt="linkedIn"
              >
                <CiLinkedin className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/khn_dev"
                target="_blank"
                rel="noreferrer"
                alt="telegram"
              >
                <FaTelegramPlane className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/khn_dev/"
                rel="noreferrer"
                alt="instagram"
              >
                <FaInstagram className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                alt="facebook"
                href="https://www.facebook.com/profile.php?id=100079926716522&mibextid=ZbWKwL"
              >
                <FiFacebook className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                alt="github"
                href="https://github.com/node-nodir"
              >
                <FaGithub className="text-white w-7 h-7" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                alt="gitlab"
                href="https://gitlab.com/kholiqulov_nodirbek"
              >
                <FiGitlab className="text-white w-7 h-7" />
              </a>
            </li>
          </ul>
          <span className="inline-block text-sm text-gray-500 dark:text-gray-400 my-5">
            © 2022 . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
