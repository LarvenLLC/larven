import { useEffect, useState } from "react";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

const MenuLink = ({ href, ...props }) => {
  return (
    <Link href={href} passHref>
      <Menu.Item as="a" {...props} />
    </Link>
  );
};

export default function Header({}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sticky top-0 relative bg-white z-10 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center md:justify-center md:space-x-10">
          <div className="flex justify-start">
            <Link href="/">
              <a>
                <span className="sr-only">Larven</span>
                <img
                  className="h-8 w-auto sm:h-10 my-3"
                  src="/apple-touch-icon.png"
                  alt="Larven"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Menu>
              <div className="relative">
                <Menu.Button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
                  Insights
                </Menu.Button>
              </div>
            </Menu>
            <Menu>
              <div className="relative">
                <Menu.Button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
                  Services{" "}
                  <svg
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
                <Menu.Items
                  as="div"
                  className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-4xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2  outline-none"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <div>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {/* active ? "text-gray-900" : "text-gray-500" */}
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Artificial Intelligence
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Make your software smart.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Application Services
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Build better software that is designed with your
                                users in mind.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Automations
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Understand your processes better and get
                                intelligent systems that work for you.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Blockchain Technology
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Secure and distribute your records better.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Cloud Computing
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Get better data storage and computing power
                                according to your needs.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                      </div>
                      <div>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Customer Experience
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Interact with customers in all phases of
                                consumption to ensure better customer
                                experience.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Cyber Security
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Protect yourself and your customers'
                                information.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Data &amp; Analytics
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Get organized and processed information to make
                                effective decisions.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Infrastructure
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Support your systems and ensure their
                                sustainability.
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                        <Menu.Item
                          as="a"
                          href="#"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Consulting &amp; Training
                              </p>
                              <p className="mt-1 mb-0 text-sm text-gray-500">
                                Understand the applications of technology in
                                your business
                              </p>
                            </div>,
                          ]}
                        </Menu.Item>
                      </div>
                    </div>
                    <Menu.Item
                      as="div"
                      className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                    >
                      {(active) => [
                        <div key={1} className="flow-root">
                          <Link href="/contacts">
                            <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                              <span className="ml-3">Contact Sales</span>
                            </a>
                          </Link>
                        </div>,
                      ]}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </div>
            </Menu>
            <Menu>
              <div className="relative">
                <Menu.Button className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none">
                  Industries{" "}
                  <svg
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
                <Menu.Items
                  as="div"
                  className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-4xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2  outline-none"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <div>
                        <MenuLink
                          href="/industry/e-commerce"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {/* active ? "text-gray-900" : "text-gray-500" */}
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                E-commerce
                              </p>
                            </div>,
                          ]}
                        </MenuLink>
                        <MenuLink
                          href="/industry/distribution-wholesale-retail"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Distribution, Wholesale &amp; Retail
                              </p>
                            </div>,
                          ]}
                        </MenuLink>
                        <MenuLink
                          href="/industry/transport-automobile-airlines"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Transport, Automobile &amp; Airlines
                              </p>
                            </div>,
                          ]}
                        </MenuLink>
                        <MenuLink
                          href="/industry/medicine-pharmacy-health"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Medicine, Pharmacy &amp; Health
                              </p>
                            </div>,
                          ]}
                        </MenuLink>
                      </div>
                      <div>
                        <MenuLink
                          href="/industry/banking-finance"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Banking &amp; Finance
                              </p>
                            </div>,
                          ]}
                        </MenuLink>
                        <MenuLink
                          href="/industry/restaurant-food-service"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {({ active }) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Restaurant &amp; Food Service
                              </p>
                            </div>,
                          ]}
                        </MenuLink>
                        <MenuLink
                          href="/industry/utilities"
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 focus:outline-none"
                        >
                          {(active) => [
                            <svg
                              key={1}
                              className="flex-shrink-0 h-6 w-6 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>,
                            <div key={2} className="ml-4">
                              <p className="m-0 text-base font-medium text-gray-900">
                                Utilities
                              </p>
                            </div>,
                          ]}
                        </MenuLink>
                      </div>
                    </div>
                    <Menu.Item
                      as="div"
                      className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
                    >
                      {(active) => [
                        <div key={1} className="flow-root">
                          <Link href="/contacts">
                            <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                              </svg>
                              <span className="ml-3">Contact Sales</span>
                            </a>
                          </Link>
                        </div>,
                      ]}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </div>
            </Menu>
            <Menu>
              <div className="relative">
                <Link href="/events" passHref>
                  <Menu.Button
                    as="a"
                    className="no-underline group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  >
                    ThinkTank
                  </Menu.Button>
                </Link>
              </div>
            </Menu>
            <Menu>
              <div className="relative">
                <Link href="/about" passHref>
                  <Menu.Button
                    as="a"
                    className="no-underline group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  >
                    About
                  </Menu.Button>
                </Link>
              </div>
            </Menu>
            <Menu>
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              {/* 'More' flyout menu, show/hide based on flyout menu state.
        
                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1" */}
              <div className="relative">
                <Link href="/careers" passHref>
                  <Menu.Button
                    as="a"
                    className="no-underline group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
                  >
                    Careers
                  </Menu.Button>
                </Link>
              </div>
            </Menu>
          </nav>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition-opacity duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Larven"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    onClick={toggleMenu}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Analytics
                    </span>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Engagement
                    </span>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Security
                    </span>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Integrations
                    </span>
                  </a>
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help Center
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Guides
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Security
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
