"use client"

import 'pure-react-carousel/dist/react-carousel.es.css';

import {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import {
  CarouselContext,
  Slider,
  Slide,
  DotGroup,
} from 'pure-react-carousel';

const data = [
  {
    src: '/images/testimonies/c4.jpg',
    containerClassName: 'relative top-56 z-10',
  },
  {
    src: '/images/testimonies/c1.jpg',
    containerClassName: '',
  },
  {
    src: '/images/testimonies/c5.jpg',
    containerClassName: 'relative top-36 z-10',
  },
  {
    src: '/images/testimonies/c2.jpg',
    containerClassName: '',
  },
  {
    src: '/images/testimonies/c3.jpg',
    containerClassName: 'relative top-56 z-10',
  },
];

function getImageClass(index : number) : string {
  if (index % 2 === 0) {
    return 'after:absolute after:top-[calc(50%-100px)] after:left-[calc(50%-100px)] after:h-[200px] after:w-[200px] after:border-2 after:border-primary after:rounded-full';
  }
  return 'relative after:absolute after:top-[calc(50%-100px)] after:left-[calc(50%-100px)] after:h-[200px] after:w-[200px] after:border-2 after:border-primary after:rounded-full';
}

/**
 * @description Carousel component
 * @param {object} props
 * @return {JSX}
 */
export default function Testimonials() {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(carouselContext?.state?.currentSlide);

  useEffect(() => {
    /**
     * @function onChange
     * @return {void}
     */
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <>
      <div className="row md:row-cols-5 text-center">
        {data.map(({ containerClassName, src }, index) => (
          <button
            key={src}
            type="button"
            className={`${containerClassName} ${currentSlide === index ? getImageClass(index) : '' }`}
            onClick={() => carouselContext.setStoreState({ currentSlide: index })}
          >
            <Image
              src={src}
              height={150}
              width={150}
              className="rounded-full mx-auto"
              alt=""
            />
          </button>
        ))}
      </div>
      <Slider classNameTray="mt-40 relative overflow-hidden w-100 p-0">
        <Slide index={0} className="p-0 my-0" style={{height: 'auto'}}>
          <div className="flex flex-col items-center text-center mx-auto w-1/2">
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Id fermentum cursus in lacus dignissim elementum vel. Risus egestas
            tellus vitae tincidunt. At arcu sed urna placerat. Hendrerit sodales vulputate viverra congue erat.
            </p>
            <h6 className="text-3xl text-primary">Adela Mtae</h6>
          </div>
        </Slide>
        <Slide index={1} className="p-0 my-0" style={{height: 'auto'}}>
          <div className="flex flex-col items-center text-center mx-auto w-1/2">
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Id fermentum cursus in lacus dignissim elementum vel. Risus egestas
            tellus vitae tincidunt. At arcu sed urna placerat. Hendrerit sodales vulputate viverra congue erat.
            </p>
            <h6 className="text-3xl text-primary">Adela Mtae</h6>
          </div>
        </Slide>
        <Slide index={2} className="p-0 my-0" style={{height: 'auto'}}>
          <div className="flex flex-col items-center text-center mx-auto w-1/2">
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Id fermentum cursus in lacus dignissim elementum vel. Risus egestas
            tellus vitae tincidunt. At arcu sed urna placerat. Hendrerit sodales vulputate viverra congue erat.
            </p>
            <h6 className="text-3xl text-primary">Adela Mtae</h6>
          </div>
        </Slide>
        <Slide index={3} className="p-0 my-0" style={{height: 'auto'}}>
          <div className="flex flex-col items-center text-center mx-auto w-1/2">
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Id fermentum cursus in lacus dignissim elementum vel. Risus egestas
            tellus vitae tincidunt. At arcu sed urna placerat. Hendrerit sodales vulputate viverra congue erat.
            </p>
            <h6 className="text-3xl text-primary">Adela Mtae</h6>
          </div>
        </Slide>
        <Slide index={4} className="p-0 my-0" style={{height: 'auto'}}>
          <div className="flex flex-col items-center text-center mx-auto w-1/2">
            <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Id fermentum cursus in lacus dignissim elementum vel. Risus egestas
            tellus vitae tincidunt. At arcu sed urna placerat. Hendrerit sodales vulputate viverra congue erat.
            </p>
            <h6 className="text-3xl text-primary">Adela Mtae</h6>
          </div>
        </Slide>
      </Slider>
      <DotGroup className="w-full bottom-8 text-center" />
    </>
  );
}