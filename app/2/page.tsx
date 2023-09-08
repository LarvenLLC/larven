"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const NavBar = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <div className="flex items-center justify-between px-10 py-2 bg-transparent relative z-50">
      <div className="flex items-center space-x-14 w-fit">
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
      <div className="md:hidden flex items-center ">
        <button
        type="button"
          onClick={() => setopenMenu(!openMenu)}
          className="text-xl text-white"
        >
          {/* <!-- Add your SVG icon here --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>

      {/* <!-- Navigation (center) --> */}
      <nav className="hidden md:flex justify-center items-center w-full text-white">
        <ul className="flex space-x-7 text-xs">
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
                  fill-rule="evenodd"
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
              <a href="https://www.larven.co.tz/">HACKATHONS</a>
            </li>
        </ul>
      </nav>

      {/* <div className="hidden md:flex"> */}
        <div className="hidden md:block w-full md:w-[60%]">
          <ul className="flex space-x-7 w-fit ml-auto">
            <li>
              <button
                type="button"
                className="px-5 py-2 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
              >
                Get free audit
              </button>
            </li>
            <li>
              <button
                type="button"
                className="px-5 py-2 text-xs text-green-haze-500 rounded-r-full rounded-bl-full bg-white border border-green-600 "
              >
                Brief Us
              </button>
            </li>
          </ul>
        </div>
      {/* </div> */}
      <nav className={`${!openMenu ? "hidden" : "md:hidden block"} absolute top-12 left-0 p-4 px-10 bg-white w-full`}>
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
                  fill-rule="evenodd"
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
              <a href="https://www.larven.co.tz/">HACKATHONS</a>
            </li>
        </ul>
      </nav>
    </div>
    // <div
    //   className="flex flex-col md:flex-row items-center px-10 py-2 bg-transparent relative z-50"
    // >
    //   <div className="flex items-center space-x-14 w-fit">
    //     <Image
    //       src="/larven-logo.png"
    //       className="w-[5.5%] "
    //       alt="Larven logo"
    //       width={0}
    //       height={0}
    //       sizes="100vw"
    //     />
    //     <ul className="flex space-x-7 text-xs text-white">
    //       <li>
    //         <p className="flex cursor-pointer">
    //           <span>SERVICES</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="ml-1"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    //             />
    //           </svg>
    //         </p>
    //       </li>
    //       <li>
    //         <a href="https://www.google.com">ABOUT</a>
    //       </li>
    //       <li>
    //         <a href="https://www.google.com">CONTACT</a>
    //       </li>
    //       <li>
    //         <a href="https://www.google.com">CAREERS</a>
    //       </li>
    //       <li>
    //         <a href="https://www.larven.co.tz/">HACKATHONS</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="w-[60%]">
    //     {/* Wrap the button with an anchor tag */}
    //     <ul className="flex space-x-7 w-fit ml-auto">
    //       <li>
    //         <button
    //           type="button"
    //           className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
    //         >
    //           Get free audit
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           type="button"
    //           className="px-5 py-3 text-xs text-green-haze-500 rounded-r-full rounded-bl-full bg-green-haze-50 "
    //         >
    //           Brief Us
    //         </button>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

const Homepage = () => {
  return (
    <div className="bg-neutral-100">
      <section className="bg-black relative">
        <NavBar />
        <div className="absolute top-10 right-0">
          <Image
            src="/images/Background Lines.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full z-10"
          />
        </div>
        <div className="h-screen w-full flex items-center">
        <div className="w-full md:w-[50%] md:ml-40 h-full flex flex-col justify-center py-2 gap-y-5">
          <h1 className="text-4xl md:text-5xl text-center md:text-start font-bold text-white">
            Unlock Your <span className="text-green-haze-500">Potential</span>{" "}
            <br />
            with Digital Solutions
          </h1>
          <p className="text-sm md:text-base text-center md:text-start text-white">
            We are here to assist you in transforming your business processes
            and operations so that you can accomplish more in less time while
            increasing your profitability.
          </p>
          <div className="space-x-10 mb-10 w-fit mx-auto md:w-full">
            <button
              type="button"
              className="px-5 py-3 mt-5 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 w-fit"
            >
              Hire Your Technicians
            </button>
            <button
              type="button"
              className="px-5 py-3 mt-5 text-xs text-green-haze-500 rounded-r-full rounded-bl-full border border-green-haze-500 w-fit"
            >
              Hire Your Technicians
            </button>
          </div>
        </div>
        <div className="absolute w-full md:w-[72%] right-0 left-0 mx-auto bottom-0 z-50 translate-y-44">
          <Image
            src="/images/people.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
        </div>
      </section>

      <section className="py-10 mt-44 bg-white">
        <ul className="flex justify-evenly my-2 ml-0 md:ml-16 py-10 bg-neutral-100">
          <li className="bg-white p-2">
            <Image
              src="/images/logos/logoipsum1.svg"
              alt="hellopic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </li>
          <li className=" p-2">
            <Image
              src="/images/logos/logoipsum2.svg"
              alt="hellopic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </li>
          <li className=" p-2">
            <Image
              src="/images/logos/logoipsum3.svg"
              alt="hellopic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </li>
          <li className=" p-2">
            <Image
              src="/images/logos/logoipsum4.svg"
              alt="hellopic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </li>
        </ul>
      </section>

      <section className="bg-white w-full py-20">
        <div className="w-full md:w-[80%] mx-2 md:ml-auto space-y-4">
          <h2 className="font-bold text-3xl max-w-md">
            Browse through our list of services
          </h2>
          <ScrollMenu>
            {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
              <p
                className="w-[300px] mr-2 space-y-6 px-5 py-4 bg-neutral-50"
                key={i}
              >
                <div className="p-2">
                  <Image
                    src="/images/graphics/clip.svg"
                    className="w-7"
                    alt="Larven logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Blockchain Technology</h3>
                  <p>
                    Arcu viverra ut quis gravida luctus. Scelerisque elit massa
                    purus morbi pellentesque tincidunt nulla.
                  </p>
                </div>
              </p>
            ))}
          </ScrollMenu>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-[90%] ">
          <Image
            src="/images/Section.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
      </section>

      <section className="bg-white flex justify-center items-center py-20">
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full space-y-14 md:w-[80%] mx-10">
          <div className="space-y-5 w-full md:w-[40%]">
            <h1 className="font-bold text-3xl">
              We'll help you to unlock the{" "}
              <span className="text-green-haze-500">potentials</span>
            </h1>
            <p>
              [description goes in here] lorem ipsum is a placeholder text to
              demonstrate the visual form of a typeface without relying on very
              meaningful content like this one for example.
            </p>
            <button
              type="button"
              className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
            >
              Get In Touch
            </button>
            <div className="flex items-center w-3/4 justify-between">
              <div>
                <h2 className="font-bold text-xl text-green-haze-500">56</h2>
                <p>Projects</p>
              </div>
              <div>
                <h2 className="font-bold text-xl text-green-haze-500">80.5%</h2>
                <p>Description here</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 md:mt-0 relative">
            <Image
              src="/images/Rectangle 10.png"
              alt="hellopic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full md:w-1/2 mx-auto z-50 relative "
            />
            <div className="absolute top-2 right-20 w-56 h-64 border-4 z-0 -translate-y-10 border-green-haze-600" />
          </div>
        </div>
      </section>

      <section className="bg-white ">
        <div className="w-full relative h-full bg-white flex flex-col">
          <Image
            src="/images/Frame 138.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full top-0 absolute z-10"
          />
          <div className="z-50 w-[80%] mx-auto mt-10 space-y-10">
            <p className="text-white text-sm">SERVICES</p>
            <p className="text-3xl font-bold">
              Providing solutions that meet your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="border mb-10 min-h-[300px] bg-neutral-50 absolute w-full -z-10" />
                <div className="p-5 md:p-10 z-30 space-y-4">
                  <h3 className="font-bold">Blockchain Technology</h3>
                  <p className="text-sm md:text-base">
                    Arcu viverra ut quis gravida luctus. Scelerisque elit massa
                    purus morbi pellentesque tincidunt nulla.
                  </p>
                  <div>
                    <Image
                      src="/images/space 1.png"
                      className="w-full"
                      alt="Larven logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="border mb-10 min-h-[300px] bg-neutral-50 absolute w-full -z-10" />
                <div className="p-5 md:p-10 z-30 space-y-4">
                  <h3 className="font-bold">Blockchain Technology</h3>
                  <p className="text-sm md:text-base">
                    Arcu viverra ut quis gravida luctus. Scelerisque elit massa
                    purus morbi pellentesque tincidunt nulla.
                  </p>
                  <div>
                    <Image
                      src="/images/space 2.png"
                      className="w-full"
                      alt="Larven logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="border mb-10 min-h-[300px] bg-neutral-50 absolute w-full -z-10" />
                <div className="p-5 md:p-10 z-30 space-y-4">
                  <h3 className="font-bold">Blockchain Technology</h3>
                  <p className="text-sm md:text-base">
                    Arcu viverra ut quis gravida luctus. Scelerisque elit massa
                    purus morbi pellentesque tincidunt nulla.
                  </p>
                  <div>
                    <Image
                      src="/images/space 3.png"
                      className="w-full"
                      alt="Larven logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="border mb-10 min-h-[300px] bg-neutral-50 absolute w-full -z-10" />
                <div className="p-5 md:p-10 z-30 space-y-4">
                  <h3 className="font-bold">Blockchain Technology</h3>
                  <p className="text-sm md:text-base">
                    Arcu viverra ut quis gravida luctus. Scelerisque elit massa
                    purus morbi pellentesque tincidunt nulla.
                  </p>
                  <div>
                    <Image
                      src="/images/space 4.png"
                      className="w-full"
                      alt="Larven logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="items-center bg-white">
        <div className="text-center">
          <h1 className="font-normal text-xl pt-10 md:pt-0 text-green-haze-10">
            OUR PROJECTS
          </h1>
          <p className="font-extrabold text-3xl md:text-4xl font-serif">
            Recent Project we have <br></br> designed & Implement
          </p>
        </div>
        <div className="flex flex-col md:flex-row  md:w-3/4 mx-auto">
          <div className="relative">
            <div className="border mb-10 min-h-[300px] bg-neutral-50 absolute w-full -z-10" />
            <div className="p-10 z-30 space-y-4">
              <div className="">
                <Image
                  src="/images/iMac 24 inch.png"
                  className="w-full"
                  alt="Larven logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <h3 className="font-bold">Marra</h3>
              <p>
                Arcu viverra ut quis gravida luctus. Scelerisque elit massa
                purus morbi pellentesque tincidunt.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="border mb-10 min-h-[300px] bg-neutral-50 absolute w-full -z-10" />
            <div className="p-10 z-30 space-y-4">
              <div className="">
                <Image
                  src="/images/MacBook Pro 16.png"
                  className="w-full"
                  alt="Larven logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <h3 className="font-bold">MoneyPedia</h3>
              <p>
                Arcu viverra ut quis gravida luctus. Scelerisque elit massa
                purus morbi pellentesque tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="relative flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 items-center w-full bg-black text-white px-4 py-6 md:px-10 md:py-20 overflow-hidden">
          <div className="w-full md:w-[50%] mx-auto space-y-4 z-10">
            <p className="text-xs">REACH OUT TO US</p>
            <h3 className="font-bold text-2xl md:text-3xl">Get a free consult</h3>
            <p className="text-sm md:text-base">
              Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus
              morbi pellentesque tincidunt nulla
            </p>
          </div>
          <div className="w-full md:w-[40%] mx-auto z-10">
            <form className="flex items-center gap-x-4">
              <input
                type="email"
                placeholder="Email Address"
                className="grow p-2 rounded text-black outline-none text-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 w-fit"
              >
                Get on the list
              </button>
            </form>
          </div>
          <div className="absolute right-0">
            <Image
              src="/images/Background Lines.png"
              alt="hellopic"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:px-28">
        <div className="md:mx-auto space-y-5 mx-3">
          <div className="flex justify-between items-center space-x-14">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/larven-logo.png"
                className=""
                alt="Larven logo"
                width={1531/15}
                height={1678/15}
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
    </div>
  );
};

export default Homepage;
