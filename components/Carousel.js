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
        <Slide index={0} className="p-0 my-0" style={{height: 800}}>
          <Image
            src="/images/carousel1.jpg"
            // layout="fill"
            // layout="responsive"
            // objectFit="cover"
            className="object-cover object-center my-0"
            height={800}
            width={800}
            alt=""
          />
        </Slide>
        <Slide index={1} className="p-0 my-0" style={{height: 800}}>
          <Image
            src="/images/carousel4.jpg"
            className="object-cover object-center my-0"
            height={800}
            width={800}
            alt=""
          />
        </Slide>
        <Slide index={2} className="p-0 my-0" style={{height: 800}}>
          <Image
            src="/images/carousel3.jpg"
            className="object-cover object-center my-0"
            height={800}
            width={800}
            alt=""
          />
        </Slide>
      </Slider>
      <section
        className="absolute bottom-0 left-0 flex flex-col h-full w-full justify-center p-10 lg:p-20
        bg-white bg-opacity-50"
      >
        <div className='sm:px-10 sm:border-l-[10px] lg:border-l-[14px] border-primary'>
          <h2 className="tracking-tight text-gray-900 mt-0">
            <span className="text-4xl lg:text-6xl block font-extrabold">
              Digital Systems Centered on Your Success
            </span>
          </h2>
          <br className='hidden sm:inline' />
          <p className="text-3xl lg:text-4xl font-medium my-5">
            We are here to assist you in transforming your business processes and operations so that
            you can accomplish more in less time while increasing your profitability.
          </p>
          <br className='hidden sm:inline' />
          <br />
          <div className="mt-8 mb-2 lg:mt-0 lg:flex lg:items-center grid gap-4">
            <Link href="/contacts" >
              <button className="button-primary px-10 py-5 text-xl">
                  Get Free Audit
              </button>
            </Link>
            <Link href="/contacts" >
              <button className="button-primary-light px-10 py-5 text-xl">
                  Brief Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div>
        <DotGroup className="w-full absolute bottom-8 text-center" />
        <ButtonNext
          className="absolute rounded-full bottom-2/4 right-1 text-white hover:text-primary flex items-center justify-center h-12 w-12"
        >
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
