import { useEffect } from "react";
import Link from "next/link";

import moment from "moment";

export default function Footer({}) {
  useEffect(() => {
    // https://www.tawk.to/software/live-chat/
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6085d1a55eb20e09cf3678b7/1f45bls3g";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <footer className="py-5 divide-y-2 divide-solid flex flex-col items-center">
      <div>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="">
            <h4>Services</h4>
            <ul className="">
              <li>Artificial Intelligence</li>
              <li>Application Services</li>
              <li>Automations</li>
              <li>Blockchain Technology</li>
            </ul>
          </div>
          <div className="">
            <h4>&ensp;</h4>
            <ul className="">
              <li>Cloud Computing</li>
              <li>Customer Experience</li>
              <li>Cyber Security</li>
              <li>Data &amp; Analytics</li>
            </ul>
          </div>
          <div className="">
            <h4>&ensp;</h4>
            <ul className="">
              <li>Infrastructure</li>
              <li>Consulting</li>
              <li>Training</li>
            </ul>
          </div>
          <div className="">
            <h4>Larven</h4>
            <ul className="">
              <li>
                <Link href="/contacts">
                  <a className="no-underline font-normal">Contacts</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="no-underline font-normal">About</a>
                </Link>
              </li>
              <li>Careers</li>
              <li>Ecosystem Partners</li>
            </ul>
          </div>
        </section>
        <Socials />
        <section className="grid grid-cols-1 md:grid-cols-2 pt-5">
          <div className="grid grid-flow-col auto-cols-auto md:auto-cols-max gap-5 md:gap-10">
            <small>
              <a href="#">Privacy Statement</a>
            </small>
            <small>
              <a href="#">Cookie policy</a>
            </small>
            <small>
              <a href="#">Terms &amp; Conditions</a>
            </small>
          </div>
          <small className="text-center md:text-right">
            © {moment().year()} Larven. All Rights Reserved.
          </small>
        </section>
      </div>
    </footer>
  );
}

function Socials({}) {
  return (
    <>
      <section className="grid grid-cols-5 gap-5 py-5">
        {/* linkedIn */}
        <div>
          <a href="https://linkedin.com/company/larven-technologies">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin mx-auto transform hover:text-blue-500 hover:scale-110 text-gray-600"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        {/* twitter */}
        <div>
          <a
            href="https://twitter.com/larven_tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter mx-auto transform hover:text-blue-500 hover:scale-110 text-gray-600"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
        {/* facebook */}
        <div>
          <a
            href="https://facebook.com/Larven-Technologies-115543110576262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-facebook mx-auto transform hover:text-blue-500 hover:scale-110 text-gray-600"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
        {/* instagram */}
        <div>
          <a
            href="https://instagram.com/larven.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram mx-auto transform hover:text-blue-500 hover:scale-110 text-gray-600"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        {/* youtube */}
        <div>
          <a
            href="https://youtube.com/channel/UCpBfhLgZAdEutZ7LHsuKvoQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-youtube mx-auto transform hover:text-blue-500 hover:scale-110 text-gray-600"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
