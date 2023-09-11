"use client"

import Link from "next/link";
import Image from "next/image"
import { useState } from "react"
import Dropdown from "./dropdown";
import ServiceNav from "./service_nav";

type PropsType = {
  hackathon: boolean
  page: number
}

const NavBar = (props: PropsType) => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <div className={`flex items-center justify-between px-10 py-3 relative z-50
    ${(props.page === 2) ? "bg-transparent" : (props.page === 1) ? "bg-white drop-shadow" : "bg-white border-b-2 border-green-haze-500"
      }
`}>
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
      <div className="md:hidden flex items-center ">
        <button
          onClick={() => setopenMenu(!openMenu)}
          className={`text - xl ${props.page === 2 ? "text-white" : "text-gray-600"} `}
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
      <nav className={`hidden md:flex justify - center items - center w - full ${props.page === 2 && "text-white"} `}>
        <ul className="flex space-x-7 text-xs">
          <li>
            <Dropdown content={
              <ServiceNav />
            }>
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
            </Dropdown>
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

      {
        props.page === 1 ?
          <div className="hidden md:flex w-[20%]">
            <button
              type="button"
              className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500"
            >
              Hire Your Technicians
            </button>
          </div>
          :
          <div className="hidden md:block w-[40%]">
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
      }

      {/* Nav on mobile */}
      <nav
        className={`${!openMenu ? "hidden" : "md:hidden block"
          } absolute top-12 left-0 p-4 px-10 bg-white w-full drop-shadow-lg`}
      >
        <ul className="space-y-7 text-sm font-bold underline">
          <li>
            <li className="flex cursor-pointer">
              <Link href='/services'>SERVICES</Link>
            </li>
          </li>
          <li>
            <Link href="https://www.google.com">ABOUT</Link>
          </li>
          <li>
            <Link href="/contact_us">CONTACT</Link>
          </li>
          <li>
            <Link href="https://www.google.com">CAREERS</Link>
          </li>
          <li>
            <Link href="https://www.larven.co.tz/">CASE STUDIES</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar