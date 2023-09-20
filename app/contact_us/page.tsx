"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div className="flex items-center justify-between px-10 py-2 bg-white drop-shadow-xl relative">
      <div className="md:w-fit">
        <Image
          src="/larven-logo.png"
          className="w-8 md:w-12"
          alt="Larven logo"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>

      {/* <!-- Mobile Menu Icon (top-right on small screens) --> */}
      <div className="md:hidden flex items-center  ">
        <button
          type="button"
          onClick={() => setopenMenu(!openMenu)}
          className="text-xl text-gray-600"
        >
          {/* <!-- Add your SVG icon here --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="text-black font-extrabold"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      {/* <!-- Navigation (center) --> */}
      <nav className="hidden md:flex justify-center items-center w-full">
        <ul className="flex space-x-7 text-xs font-extrabold text-black">
          <li>
            <p className="flex cursor-pointer">
              <span>SERVICES</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>
          </li>
          <li>
            <a href="https://www.google.com">ABOUT</a>
          </li>
          <li>
            <Link href="/contact_us">CONTACT</Link>
          </li>
          <li>
            <a href="https://www.google.com">CAREERS</a>
          </li>
          <li>
            <a href="https://www.larven.co.tz/">CASE STUDIES</a>
          </li>
        </ul>
      </nav>

      <div className="hidden md:flex">
        <button
          type="button"
          className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-600"
        >
          Hire Your Technicians
        </button>
      </div>
      <nav
        className={`${!openMenu ? "hidden" : "md:hidden block"
          } absolute top-12 left-0 p-4 px-10 bg-white w-full`}
      >
        <ul className="space-y-7 text-sm font-bold underline">
          <li>
            <p className="flex cursor-pointer">
              <span>SERVICES</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </p>
          </li>
          <li>
            <a href="https://www.google.com">ABOUT</a>
          </li>
          <li>
            <a href="https://www.google.com">CONTACT</a>
          </li>
          <li>
            <a href="https://www.google.com">CAREERS</a>
          </li>
          <li>
            <a href="https://www.larven.co.tz/">CASE STUDIES</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      <NavBar />

      <section className="relative my-10">
        <div className="absolute -z-10">
          <Image
            src="/images/deco1.png"
            alt="vidole decoration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>

        <div className="absolute bottom-0 right-0 -z-10">
          <Image
            src="/images/deco2.png"
            alt="vidole decoration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>

        <div className="my-20">
          <h4 className="text-center text-green-haze-600">CONTACT US</h4>
          <h2 className="text-4xl font-bold text-center">Get In Touch</h2>
          <h3 className="text-base text-center">
            We'd be delighted to hear from you. Here is how you can reach us
          </h3>
        </div>
        <section className="flex flex-col md:flex-row md:justify-evenly items-start gap-5 mx-3 md:mx-10">
          <form className="bg-green-haze-100 px-4 py-6 md:w-fit space-y-10 md:max-w-xl rounded-lg">
            <div className="space-y-2">
              <h3 className="text-green-haze-800 font-bold">
                For Service Inquiry
              </h3>
              <p className="text-sm">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="flex items-center gap-x-5 text-sm">
              <div>
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  className="block bg-transparent border-b-2 outline-none border-b-green-haze-600"
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  className="block bg-transparent border-b-2 outline-none border-b-green-haze-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company_name">Company Name</label>
              <input
                id="company_name"
                type="text"
                className="block w-full bg-transparent border-b-2 outline-none border-b-green-haze-600"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="block w-full bg-transparent border-b-2 outline-none border-b-green-haze-900"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-green-haze-800 font-semibold">
                What service do you need?
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <input
                    name="service"
                    type="radio"
                    id="project"
                    className="mr-1 cursor-pointer w-4 h-4 appearance-none rounded-full border-2 border-solid border-green-haze-700 checked:bg-green-haze-700"
                  />
                  <label htmlFor="project">
                    Software Project Implementation
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    name="service"
                    type="radio"
                    id="staff"
                    className="mr-1 cursor-pointer w-4 h-4 appearance-none rounded-full border-2 border-solid border-green-haze-700 checked:bg-green-haze-700"
                  />
                  <label htmlFor="staff">Staff Augmentation</label>
                </div>
                <div className="flex items-center">
                  <input
                    name="service"
                    type="radio"
                    id="automation"
                    className="mr-1 cursor-pointer w-4 h-4 appearance-none rounded-full border-2 border-solid border-green-haze-700 checked:bg-green-haze-700"
                  />
                  <label htmlFor="automation">Automation</label>
                </div>
                <div className="flex items-center">
                  <input
                    name="service"
                    type="radio"
                    id="consultation"
                    className="mr-1 cursor-pointer w-4 h-4 appearance-none rounded-full border-2 border-solid border-green-haze-700 checked:bg-green-haze-700"
                  />
                  <label htmlFor="consultation">Consultation</label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-10 py-3 float-right text-white rounded-r-full rounded-bl-full bg-green-haze-600"
            >
              Submit
            </button>
          </form>
          <div className="bg-white drop-shadow-md px-5 py-4 space-y-8 rounded-lg">
            <h1 className="text-green-haze-700 font-extrabold">
              For General Inquiry
            </h1>
            <p className="flex items-center gap-x-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-green-haze-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </span>
              <span>+255 (757) 590-414</span>
            </p>
            <p className="flex items-center gap-x-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-green-haze-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </span>
              <span>info@larven.co.tz</span>
            </p>
            <p className="flex items-center gap-x-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-green-haze-600"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </span>
              <span>
                Bagamoyo rd, Sayansi,Kijitonyama Dar es salaam Tanzania
              </span>
            </p>
          </div>
        </section>
      </section>

      <section className="py-10 md:px-28">
        <div className="md:mx-auto space-y-5 mx-3">
          <div className="flex justify-between items-center space-x-14">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/larven-logo.png"
                alt="Larven logo"
                width={1531 / 20}
                height={1678 / 20}
                sizes="100vw"
              />
            </Link>
            <ul className="flex space-x-7">
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </li>
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </li>
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </li>
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </li>
            </ul>
          </div>
          <hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 justify-between">
            <ul className="space-y-3">
              <li className="text-lg font-bold">Larven</li>
              <li>Services</li>
              <li>About</li>
              <li>Hackathons</li>
              <li>Careers</li>
              <li>Core values</li>
              <li>Ecosystem Partners</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-lg font-bold">Technologies</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing</li>
              <li>Computer Experience</li>
              <li>Aplicaion Services</li>
              <li>Automations</li>
              <li>Blockchain Technology</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-lg font-bold">Servises</li>
              <li>Cyber Security</li>
              <li>Data & analytics</li>
              <li>Infrastructure</li>
              <li>Consulting</li>
              <li>Training</li>
              <li>System Auditing</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
