"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore

const NavBar = () => {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row px-10 py-3 bg-white">
        <div className="flex items-center space-x-14 w-fit">
          <Image
            src="/larven-logo.png"
            className="w-[10%] md:w-[5.5%]"
            alt="Larven logo"
            width={0}
            height={0}
            sizes="100vw"
          />
          <ul className="flex space-x-7 text-black text-xs font-semibold">
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

        </div>
        <div className="w-full md:w-[60%]">
          {/* Wrap the button with an anchor tag */}
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
      </div>
      <hr className="border border-green-haze-500" />
    </>
  );
};

const Homepage = () => {
  return (
    <div className="bg-neutral-100">
      <NavBar />

      <section className="flex flex-col md:flex-row items-center bg-white">
        <div className="w-full md:w-[60%] bg-white h-full flex flex-col justify-center px-10 py-2 gap-y-5">
          <h1 className="text-3xl md:text-5xl font-bold">
            Unlock Your Potential with
            <br />
            Digital Solutions
          </h1>
          <p>
            We are here to assist you in transforming your business processes
            and operations so that you can accomplish more in less time while
            increasing your profitability.
          </p>
          <ul className="flex space-x-7 w-fit ">
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
        <div className="md:mr-10">
          <Image
            src="/images/Digital transformation-bro 1.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
      </section>

      <section>
        <div className="w-1/2 py-3 mx-auto bg-green-haze-700 flex justify-evenly -translate-y-8">
          <Image
            src="/images/logos/logoipsum1.svg"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[30%]"
          />
          <Image
            src="/images/logos/logoipsum2.svg"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[30%]"
          />
        </div>

        <div className="justify-evenly grid md:grid-cols-2 items-center mt-20">
          <Image
            src="/images/p3 img/graphic 1.png"
            alt="hellopic"
            width={599}
            height={383}
            sizes="100vw"
            className=""
          />
          <div className="space-y-5">
            <h3 className="font-bold text-2xl">Custom Software Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl dictum non odio velit
              tristique egestas. Tortor a dignissim dictum fames mauris odio
              sollicitudin.{" "}
            </p>
            <button
              type="button"
              className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-row-reverse grid md:grid-cols-2 justify-evenly items-center mt-20">
          <Image
            src="/images/p3 img/graphic 2.png"
            alt="hellopic"
            width={553}
            height={467}
            sizes="100vw"
            className=""
          />
          <div className="space-y-5">
            <h3 className="font-bold text-2xl">Application Service</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl dictum non odio velit
              tristique egestas. Tortor a dignissim dictum fames mauris odio
              sollicitudin.{" "}
            </p>
            <button
              type="button"
              className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-evenly items-center mt-20">
          <Image
            src="/images/p3 img/graphic 3.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[40%]"
          />
          <div className="w-[40%] space-y-5 ">
            <h3 className="font-bold text-2xl">
              Artificial intelligence & Data analytics
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl dictum non odio velit
              tristique egestas. Tortor a dignissim dictum fames mauris odio
              sollicitudin.
            </p>
            <button
              type="button"
              className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-evenly items-center mb-20 mt-20">
          <Image
            src="/images/p3 img/graphic 4.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[40%]"
          />
          <div className="w-[40%] space-y-5">
            <h3 className="font-bold text-2xl">Cyber Security</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisl dictum non odio velit
              tristique egestas. Tortor a dignissim dictum fames mauris odio
              sollicitudin.{" "}
            </p>
            <button
              type="button"
              className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* optimised */}
      <section className="h-[80vh] bg-white flex justify-center items-center mx-10">
        <div className="space-y-10">
          <h1 className="flex justify-center font-extrabold text-4xl">
            Unlock The Potential
          </h1>
          <ul className="flex gap-x-5">
            {[
              {
                icon: "/images/graphics/chat.svg",
                title: "Blockchain Technology",
                description:
                  "Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus morbi pellentesque tincidunt nulla.",
              },
              {
                icon: "/images/graphics/clip.svg",
                title: "Blockchain Technology",
                description:
                  "Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus morbi pellentesque tincidunt nulla.",
              },
              {
                icon: "/images/graphics/settings.svg",
                title: "Blockchain Technology",
                description:
                  "Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus morbi pellentesque tincidunt nulla.",
              },
              {
                icon: "/images/graphics/cloud.svg",
                title: "Blockchain Technology",
                description:
                  "Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus morbi pellentesque tincidunt nulla.",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="w-full space-y-6 px-5 py-4 bg-neutral-50"
              >
                <div className="p-3 rounded bg-neutral-200 w-fit">
                  <Image
                    src={item.icon}
                    className="w-7"
                    alt="Larven logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex justify-center h-[50vh] ">
        <div className="relative flex justify-center items-center w-full bg-black text-white px-10 overflow-hidden">
          <div className="w-[50%] mx-auto space-y-4 z-10">
            <p className="text-xs">REACH OUT TO US</p>
            <h3 className="font-bold text-3xl">Get a free consult</h3>
            <p>
              Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus
              morbi pellentesque tincidunt nulla
            </p>
          </div>
          <div className="w-[40%] mx-auto z-10">
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

      <section className="h-[60vh] my-10">
        <div className="w-[80%] mx-auto space-y-5">
          <div className="flex justify-between items-center space-x-14 w-fit">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/larven-logo.png"
                className="w-[5.5%]"
                alt="Larven logo"
                width={0}
                height={0}
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
          <div className="flex justify-between">
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
              <li className="text-lg font-bold">SERVICES</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing</li>
              <li>Computer Experience</li>
              <li>Aplicaion Services</li>
              <li>Automations</li>
              <li>Blockchain Technology</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-lg font-bold">SERVICES</li>
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
