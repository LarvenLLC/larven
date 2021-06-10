import Link from "next/link";
// import Image from "next/image";

import Layout from "../components/Layout";
import Announcement from "../components/Announcement";
import Carousel from "../components/Carousel";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        {/* announcement section */}
        {/* <Announcement /> */}
        {/* carousel section */}
        <section className="pt-0 pb-12 px-0">
          <Carousel />
        </section>
        {/* testimonials section */}
        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gray-100 relative p-1 rounded-lg">
              <div className="relative overflow-hidden h-96 w-full rounded-lg bottom-4 left-4">
                <img
                  src="/images/ceo.jpg"
                  className="absolute object-cover object-center my-0"
                  // layout="fill"
                  // objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h1>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 612 612"
                  style={{ enableBackground: "new 0 0 612 612" }}
                  height={48}
                  width={48}
                >
                  <g>
                    <g>
                      <path
                        style={{ fill: "#010002" }}
                        d="M587.826,186.966c-16.116-37.332-37.944-69.768-65.484-97.308s-59.976-49.368-97.308-65.484
			S348.024,0,306,0c-28.152,0-55.284,3.672-81.396,11.016s-50.49,17.646-73.134,30.906s-43.248,29.172-61.812,47.736
			s-34.476,39.168-47.736,61.812c-13.26,22.646-23.562,47.022-30.906,73.134C3.672,250.716,0,277.848,0,306
			s3.672,55.284,11.016,81.396c7.344,26.11,17.646,50.487,30.906,73.134c13.26,22.644,29.172,43.249,47.736,61.812
			c18.564,18.564,39.168,34.478,61.812,47.736c22.644,13.26,47.022,23.561,73.134,30.906C250.716,608.328,277.848,612,306,612
			s55.284-3.672,81.396-11.016c26.111-7.346,50.488-17.646,73.135-30.906c22.644-13.259,43.249-29.172,61.812-47.736
			c18.564-18.563,34.478-39.168,47.736-61.812c13.26-22.646,23.561-47.023,30.906-73.135C608.328,361.284,612,334.152,612,306
			C612,263.976,603.942,224.298,587.826,186.966z M296.82,212.364c-2.04,2.855-4.284,4.284-6.732,4.284
			c-42.024,6.12-63.036,25.5-63.036,58.14h37.332c6.528,0,9.792,3.264,9.792,9.792v140.76c0,6.528-3.264,9.792-9.792,9.792H146.88
			c-6.528,0-9.792-3.264-9.792-9.792V303.552c0-95.88,46.92-146.268,140.76-151.164c2.448-0.408,4.59,0.204,6.426,1.836
			s3.162,3.672,3.978,6.12l9.792,44.676C298.86,207.876,298.452,210.324,296.82,212.364z M477.972,212.364
			c-1.632,2.855-3.876,4.284-6.729,4.284c-41.208,6.12-62.223,25.5-63.036,58.14h37.332c2.854,0,5.304,0.918,7.344,2.754
			s3.063,4.182,3.063,7.038v140.76c0,2.856-1.021,5.202-3.063,7.038s-4.489,2.754-7.344,2.754H328.644
			c-2.854,0-5.304-0.918-7.344-2.754s-3.06-4.182-3.06-7.038V303.552c0-95.88,47.124-146.268,141.372-151.164
			c2.445-0.408,4.59,0.204,6.426,1.836s3.163,3.672,3.978,6.12l9.792,44.676C480.624,207.876,480.012,210.324,477.972,212.364z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </h1>
              <h3>
                Technology and business are now inseparable. At Larven, we take
                the road less travelled to help businesses bridge the gap
                between business and technology. This way, we not only transform
                businesses, but we transform lives and communities.
              </h3>
              <h6>Adam Beleko</h6>
              <h6>CEO, Larven Technologies</h6>
            </div>
          </div>
        </section>
        {/* features section */}
        {/* <section className="pt-0 bg-white">
          <div className="mx-auto">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
                Transactions
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to send money
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Competitive exchange rates
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      No hidden fees
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Transfers are instant
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Mobile notifications
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section> */}
        {/* partners section */}
        <Partners />
        {/* testimonials section */}
        <section></section>
        {/* cta section */}
        <section className="px-10 bg-gray-50">
          <div className="mx-auto lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to transform your processes?</span>
              <span className="block text-primary">Join us now.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="/contacts">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link href="/about">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-indigo-50">
                    Learn more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
