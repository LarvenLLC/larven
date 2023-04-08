import 'pure-react-carousel/dist/react-carousel.es.css';

import {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import {
  CarouselContext,
  Slider,
  Slide,
  DotGroup,
} from 'pure-react-carousel';

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
        <div className={`relative top-56 ${currentSlide === 0 ?
           'after:absolute after:top-[calc(50%-100px)] after:left-[calc(50%-100px)] after:h-[200px] after:w-[200px] after:border-2 after:border-primary after:rounded-full' : '' }`}>
          <Image
            src="/images/testimonies/c4.jpg"
            height={150}
            width={150}
            className="rounded-full mx-auto"
            alt=""
          />
        </div>
        <div className={`${currentSlide === 1 ?
           'relative after:absolute after:top-[calc(50%-100px)] after:left-[calc(50%-100px)] after:h-[200px] after:w-[200px] after:border-2 after:border-primary after:rounded-full' : '' }`}>
          <Image
            src="/images/testimonies/c1.jpg"
            height={150}
            width={150}
            className="rounded-full mx-auto"
            alt=""
          />
        </div>
        <div className={`relative top-36 ${currentSlide === 2 ?
           'after:absolute after:top-[calc(50%-100px)] after:left-[calc(50%-100px)] after:h-[200px] after:w-[200px] after:border-2 after:border-primary after:rounded-full' : '' }`}>
          <Image
            src="/images/testimonies/c5.jpg"
            height={150}
            width={150}
            className="rounded-full mx-auto"
            alt=""
          />
        </div>
        <div className={`${currentSlide === 3 ?
           'relative after:absolute after:top-[calc(50%-100px)] after:left-[calc(50%-100px)] after:h-[200px] after:w-[200px] after:border-2 after:border-primary after:rounded-full' : '' }`}>
          <Image
            src="/images/testimonies/c2.jpg"
            height={150}
            width={150}
            className="rounded-full mx-auto"
            alt=""
          />
        </div>
        <div className={`relative top-56 ${currentSlide === 4 ?
          'after:absolute after:top-[calc(50%-100px)] after:left-[calc(50%-100px)] after:h-[200px] after:w-[200px] after:border-2 after:border-primary after:rounded-full' : '' }`}>
          <Image
            src="/images/testimonies/c3.jpg"
            height={150}
            width={150}
            className="rounded-full mx-auto"
            alt=""
          />
        </div>
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
