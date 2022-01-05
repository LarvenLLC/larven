import 'pure-react-carousel/dist/react-carousel.es.css';
import Link from 'next/link';
// import Image from "next/image";

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

/**
 * @description Carousel component
 * @param {object} props
 * @return {JSX}
 */
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
        <Slide index={0} className="p-0 my-0" style={{height: 600}}>
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
        <Slide index={1} className="p-0 my-0" style={{height: 600}}>
          <Image
            src="/images/carousel4.jpg"
            className="object-cover object-center my-0"
            height={600}
            width={800}
            alt=""
          />
        </Slide>
        <Slide index={2} className="p-0 my-0" style={{height: 600}}>
          <Image
            src="/images/carousel3.jpg"
            className="object-cover object-center my-0"
            height={600}
            width={800}
            alt=""
          />
        </Slide>
      </Slider>
      <section className="absolute bottom-0 left-0 flex flex-col h-full w-full p-10 lg:px-48 bg-white bg-opacity-50">
        <h2 className="tracking-tight text-gray-900">
          <span className="text-4xl block font-extrabold">Digital Systems Centered on Your Success</span>
        </h2>
        <br/>
        <p className="text-3xl font-medium my-5">We are here to assist you in transforming your business processes
          and operations so that you can accomplish more in less time while increasing your
          profitability.
        </p>
        <br/>
        <br/>
        <div className="mt-8 lg:mt-0 lg:flex lg:items-center">
          <Link href="/contacts" passHref>
            <button className="button-primary px-10 py-5 text-xl mr-6">
                  Get Free Audit
            </button>
          </Link>
          <Link href="/contacts" passHref>
            <button className="button-primary-light px-10 py-5 text-xl">
                  Brief Us
            </button>
          </Link>
        </div>
      </section>
      <div>
        <DotGroup className="w-full absolute bottom-8 text-center" />
        <ButtonBack className="absolute rounded-full bottom-2/4 left-1 text-white hover:text-primary flex items-center justify-center h-12 w-12">
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
        <ButtonNext className="absolute rounded-full bottom-2/4 right-1 text-white hover:text-primary flex items-center justify-center h-12 w-12">
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
