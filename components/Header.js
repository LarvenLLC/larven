import {useMemo, useState} from 'react';

import {Tab, Transition} from '@headlessui/react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import headerStyles from '../styles/Header.module.css';
import buttonStyles from '../styles/Button.module.css';

const navLinks = [
  {href: '/services', label: 'Services'},
  {href: '/about', label: 'About Us'},
  {href: '/contacts', label: 'Contact Us'},
  {href: '/cases', label: 'Case Studies'},
];

/**
 * TabLink Component
 * @param {object} props
 * @param {string} props.href
 * @param {string} props.label
 * @param {boolean} props.disabled
 * @return {JSX}
 */
function TabLink({href, label, disabled}) {
  return (
    <Tab disabled={disabled} className="no-underline">
      {({selected}) => (
        <Link href={href}
          className={`${headerStyles.tablink} ${selected && headerStyles.tablinkActive }`}>
          {label}
        </Link>
      )}
    </Tab>
  );
}

/**
 * Header component
 * @param {Object} props
 * @return {React.Component}
 */
export default function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const defaultIndex = useMemo(() => {
    return navLinks.findIndex(({href}) => router.pathname == href);
  }, [router?.pathname]);

  /**
   * Toggle menu
   * @return {void}
   * @private
   */
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sticky top-0 relative bg-white z-10 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center md:space-x-10">
          <div className="flex justify-start">
            <Link href="/">
              <span className="sr-only">Larven</span>
              <img
                className="h-10 w-auto sm:h-20 my-3"
                src="/apple-touch-icon.png"
                alt="Larven"
              />
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
            {/* <Menu>
              <div className="relative">
                <Menu.Button className="menu-button">
                  Insights
                </Menu.Button>
              </div>
            </Menu> */}
            <Tab.Group defaultIndex={defaultIndex}>
              <Tab.List>
                {navLinks.map(({href, label}) => (
                  <TabLink key={href} href={href} label={label} disabled={defaultIndex === -1} />
                ))}
                {/* 'More' flyout menu, show/hide based on flyout menu state.

                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1" */}
              </Tab.List>
            </Tab.Group>
          </nav>
          <nav className="hidden md:flex space-x-10">
            <button type="button" className={`${buttonStyles.primary}`}>
              Hire Your Technicians
            </button>
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
        <div
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div
            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          >
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/apple-touch-icon.png"
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
                  <Link href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </Link>
                  <a
                    href='#'
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
                      Our Services
                    </span>
                  </a>
                  <Link href="/about"
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
                      About Us
                    </span>
                  </Link>
                  <Link href="/contacts"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Contact Us
                    </span>
                  </Link>
                  <Link href="/careers"
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
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Careers
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            {/* <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
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
                  Events
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </Transition>
    </div>
  );
}
