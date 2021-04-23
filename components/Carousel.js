import "pure-react-carousel/dist/react-carousel.es.css";
import Link from "next/link";
// import Image from "next/image";

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export default function Carousel() {
  return (
    <CarouselProvider
      isPlaying
      infinite
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={3}
      isIntrinsicHeight
      className="relative no-prose"
    >
      <Slider classNameTray="m-0 relative overflow-hidden w-100 p-0">
        <Slide index={0} className="p-0 mt-0" style={{ height: 500 }}>
          <Image
            src="/images/carousel1.jpg"
            // layout="fill"
            // layout="responsive"
            // objectFit="cover"
            className="object-cover object-center my-0"
            height={600}
            width={800}
            alt=""
          />
        </Slide>
        <Slide index={1} className="p-0 mt-0" style={{ height: 500 }}>
          <Image
            src="/images/carousel4.jpg"
            className="object-cover object-center my-0"
            height={600}
            width={800}
            alt=""
          />
        </Slide>
        <Slide index={2} className="p-0 mt-0" style={{ height: 500 }}>
          <Image
            src="/images/carousel3.jpg"
            className="object-cover object-center my-0"
            height={600}
            width={800}
            alt=""
          />
        </Slide>
      </Slider>
      <section className="absolute bottom-0 left-0 w-full px-10 bg-white bg-opacity-50">
        <div className="mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to transform your processes?</span>
            <span className="block text-primary">Join us now.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contacts">
                <a className="no-underline inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
                  Contact Us
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/about">
                <a className="no-underline inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-indigo-50">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div>
        <DotGroup className="w-full absolute bottom-1 text-center" />
        <ButtonBack className="absolute rounded-full bottom-2/4 left-1 text-white hover:text-blue-600 flex items-center justify-center h-12 w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </ButtonBack>
        <ButtonNext className="absolute rounded-full bottom-2/4 right-1 text-white hover:text-blue-600 flex items-center justify-center h-12 w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 w-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}
