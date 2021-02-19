import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
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
      className="relative"
    >
      <Slider classNameTray="m-0">
        <Slide
          index={0}
          style={{ height: 600 }}
          className="relative overflow-hidden w-100"
        >
          <Image
            src="/images/sample.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Slide>
        <Slide
          index={1}
          style={{ height: 600 }}
          className="relative overflow-hidden w-100"
        >
          <Image
            src="/images/sample1.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Slide>
        <Slide
          index={2}
          style={{ height: 600 }}
          className="relative overflow-hidden w-100"
        >
          <Image
            src="/images/sample.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Slide>
      </Slider>
      <div>
        <DotGroup />
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
