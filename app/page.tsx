"use client"

import Image from "next/image";
import {CarouselProvider} from 'pure-react-carousel';

import headingStyles from '@/styles/heading.module.css';
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Testimonials from '@/components/testimonials';

const servicesData = [
  {
    id: 1,
    title: "Cloud Computing",
    description:
      "wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.",
  },
  {
    id: 2,
    title: "Cloud Computing",
    description:
      "wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.",
  },
  {
    id: 3,
    title: "Cloud Computing",
    description:
      "wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.",
  },
  {
    id: 4,
    title: "Cloud Computing",
    description:
      "wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description:
      "wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.",
  },
];

const Homepage = () => {
  return (
    <>
      <NavBar page={1} hackathon={false} />

      <section className="w-full grid md:grid-cols-2 flex-col md:flex-row">
        <div className="bg-green-haze-50 rounded-br-[150px] flex flex-col justify-center px-10 py-20 gap-y-5">
          <h1 className="text-4xl font-bold mb-10">
            Unlock Your <span className="text-green-haze-500">Potential</span>{" "}
            <br />
            with Digital Solutions
          </h1>
          <p>
            We are here to assist you in transforming your business processes
            and operations so that you can accomplish more in less time while
            increasing your profitability.
          </p>
          <button
            type="button"
            className="px-5 py-3 mt-5 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 w-fit"
          >
            Hire Your Technicians
          </button>
        </div>
        {/* <div className="relative">
          <Image
            src="/images/1/team.png"
            alt="hellopic"
            width={397}
            height={195}
            sizes="100vw"
            className="top-0 w-full bottom-0 my-auto absolute z-50"
          />
          <Image
            src="/images/1/strip1.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute -translate-y-20"
          />
          <Image
            src="/images/1/strip2.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute right-0 -translate-y-44"
          />
          <Image
            src="/images/1/strip3.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="absolute translate-y-32 right-0 bottom-0"
          />
        </div> */}
        <div>
          <Image
            src="/images/right.png"
            className=""
            alt="Team Of People"
            width={752}
            height={960}
            sizes="100vw"
          />
        </div>
      </section>

      <section className="container-fluid relative overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              className="p-8 space-y-2 bg-white shadow rounded-md"
              key={index}
            >
              <div className="p-2 bg-orange-200 w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                </svg>
              </div>
              <h3 className="font-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
          <div className="">
            <h3 className="text-sm font-bold text-green-haze-600">
              WHAT WE DO
            </h3>
            <h2 className="my-2 text-2xl font-bold ">
              Discover What We Can Do
              <span className="block text-lg font-normal">For You!</span>
            </h2>
            <button
              type="button"
              className="px-5 py-3 mt-5 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 font-bold"
            >
              Explore All
            </button>
          </div>
        </div>
        <svg width="1187" height="800" viewBox="0 0 1187 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 bottom-0 right-0">
          <path d="M0 0H1187V550C1187 688.071 1075.07 800 937 800H0V0Z" fill="#00AB44" fillOpacity="0.05"/>
        </svg>
      </section>

      <section className="container-fluid relative overflow-hidden">
        <Image
          src="/images/deco1.png"
          alt=""
          width={534}
          height={858}
          sizes="100vw"
          className="absolute -top-10 left-0 -z-10"
        />
        <Image
          src="/images/deco2.png"
          alt=""
          width={536}
          height={858}
          sizes="100vw"
          className="absolute -bottom-10 right-0 -z-10"
        />
        <div className="container">
        <h4 className="font-bold text-center text-green-haze-500">
          How We Works
        </h4>
        <h2 className="text-xl font-bold text-center">
          Discover The Steps We Take
        </h2>
        <h3 className="text-xl text-center">To Ensure Your Success</h3>

        <div className="grid w-[90%] grid-cols-4 md:grid-cols-6 md:my-3 mx-auto gap-y-6">
          <div className="p-5 col-start-1 space-y-2 bg-white shadow-md w-[300px] rounded-r-3xl rounded-tl-3xl">
            <div className="p-2 bg-orange-200 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </div>
            <h3 className="font-bold">Planning</h3>
            <p className="text-sm">
              wuaiwb iabwuah ua owwuaonia wiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw.
            </p>
            <div className="w-5 h-5 -ml-5 rounded-full translate-y-14 bg-green-haze-700" />
          </div>
          <div className="p-5 col-start-5 space-y-2 bg-white shadow-md w-[300px] rounded-r-3xl rounded-tl-3xl">
            <div className="p-2 bg-orange-200 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 
                1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 
                1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 
                0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1
                 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2
                  11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5
                   0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5
                    1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 
                    0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6
                    .5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
                />
              </svg>
            </div>
            <h3 className="font-bold">Implementation</h3>
            <p className="text-sm">
              wuaiwb iabwuah ua owwuaon iawiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw.
            </p>
            <div className="w-5 h-5 -ml-5 rounded-full translate-y-[90px] bg-green-haze-700" />
          </div>
          <div className="col-start-1 col-end-7 border-2 border-green-haze-700" />
          <div className="p-5 col-start-3 space-y-2 bg-white shadow-md w-[300px] rounded-r-3xl rounded-bl-3xl">
            <div className="w-5 h-5 -ml-5 rounded-full -translate-y-14 bg-green-haze-700" />
            <div className="p-2 bg-orange-200 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </div>
            <h3 className="font-bold">Build Up</h3>
            <p className="text-sm">
              wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw.
            </p>
          </div>
          <div className="p-5 col-start-7 space-y-2 bg-white shadow-md w-[300px] rounded-r-3xl rounded-bl-3xl">
            <div className="w-5 h-5 -ml-5 rounded-full -translate-y-14 bg-green-haze-700" />
            <div className="p-2 bg-orange-200 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              </svg>
            </div>
            <h3 className="font-bold">Close Up</h3>
            <p className="text-sm">
              wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className="container-fluid relative overflow-hidden">
        <div className="container">
          <div className="row gx-5 items-center justify-center">
            <div className="md:col-4 space-y-2 order-last md:order-first mt-8 md:mt-0">
              <h3 className="text-sm font-bold text-green-haze-600">
                WHO WE WORK WITH
              </h3>
              <h2 className="my-2 text-2xl font-bold ">
                Discover What We Work With{" "}
                <span className="font-normal">To Achieve Your Goals</span>
              </h2>
              <button
                type="button"
                className="px-5 py-3 mt-5 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 font-bold"
              >
                Hire Your Technician
              </button>
            </div>
            <div className="col row row-cols-1 md:row-cols-2 md:gx-5 gy-5 mt-0">
              <div className="mt-0">
                <div className="h-72 relative">
                  <p className="absolute top-2 -left-6 md:-left-28 px-5 py-2 text-sm font-bold bg-white shadow-md rounded-l-xl rounded-tr-xl text-green-haze-600">
                    Early Stage Startup
                  </p>
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="People working"
                    className="rounded-lg object-cover -z-10"
                    sizes="100vw"
                    fill
                  />
                </div>
              </div>
              <div className="md:mt-0">
                <div className="h-72 relative">
                  <p className="absolute bottom-2 -right-4 px-5 py-2 text-sm font-bold bg-white shadow-md rounded-r-xl rounded-bl-xl text-green-haze-600">
                    Funded Startups
                  </p>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="People working"
                    className="rounded-lg object-cover -z-10"
                    sizes="100vw"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className="h-72 relative">
                  <p className="absolute -bottom-5 -right-4 px-5 py-2 text-xs font-bold bg-white shadow-md rounded-r-xl rounded-bl-xl text-green-haze-600">
                    Established (Traditional) Businesses
                  </p>
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="People working"
                    className="rounded-lg object-cover -z-10"
                    sizes="100vw"
                    fill
                  />
                </div>
              </div>
              <div>
                <div className="h-72 relative">
                  <p className="absolute -top-2 -left-4 px-5 py-2 text-sm font-bold bg-white shadow-md rounded-l-xl rounded-tr-xl text-green-haze-600">
                    Enterprises
                  </p>
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="People working"
                    className="rounded-lg object-cover -z-10"
                    sizes="100vw"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg width="1186" height="800" viewBox="0 0 1186 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -z-10 top-0 left-0">
          <path d="M-1 0H1186V800H249C110.929 800 -1 688.071 -1 550V0Z" fill="#00AB44" fillOpacity="0.05"/>
        </svg>
      </section>

      <section className="overflow-scroll">
        <table className="h-screen w-full table-auto bg-white">
          <thead>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200 py-6">
              <th className=" bg-white"></th>
              <th className=" bg-green-500">Larven</th>
              <th className=" bg-white">Others</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3 bg-white">COST</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">
                Relative to your needs
              </td>
              <td className="px-6 py-3  bg-white">
                Enterprise costs for everyone
              </td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3 ">PROCESS</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">
                Clear and documented
              </td>
              <td className="px-6 py-3">Full of surprises</td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3  bg-white">SCALE</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">
                At your own pace, your own way
              </td>
              <td className="px-6 py-3  bg-white">
                Vetting is necessary but costly in time, money, and efficiency.
              </td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3">HAND OVER STRATEGY</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">
                Each client set-up to fly on its own.
              </td>
              <td className="px-6 py-3">Create vendor dependency.</td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3  bg-white">PRIVACY & SECURITY</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">
                Secure and dependable for clients.
              </td>
              <td className="px-6 py-3  bg-white">
                exploiting business data and involving third parties
              </td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3">TEAM</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">
                A recommended team based on needs of the project
              </td>
              <td className="px-6 py-3">
                Take what you are given without questions.
              </td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3  bg-white">PROJECT MANAGEMENT</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">
                Flexible and based on project needs.
              </td>
              <td className="px-6 py-3  bg-white">
                Biased towards own preference.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* testimonials section */}
      <section
        className="container-fluid !px-0 !mx-0 max-w-none relative overflow-x-hidden"
        style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #FFFFFF'}}
      >
        <div className="container">
          <h1 className={headingStyles.title}>TESTIMONIALS</h1>
          <h2 className={headingStyles.heading}>
            What Our Customers Say
          </h2>
          <CarouselProvider
            isPlaying
            infinite
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={5}
            isIntrinsicHeight
            className="relative no-prose mt-28"
          >
            <Testimonials />
          </CarouselProvider>
        </div>
      </section>
      <section className="container">
        <h4 className="text-center font-bold text-green-500">STORIES</h4>
        <h1 className="text-center font-bold text-black text-3xl mb-10">
          Our Most Popular Articles
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-10 shadow-lg rounded-lg">
            <Image
              src="/images/Frame 18.png"
              alt="UTOPOLO"
              width={0}
              height={0}
              className="w-full rounded-lg"
              sizes="100vw"
            />
            <div className="p-3 space-y-5">
              <h3 className="px-3 font-bold">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <p className="px-3">
                Lorem ipsum dolor sit amet consectetur. Elementum nec dictumst
                habitasse bibendum sit ut varius. Lorem ipsum dolor sit amet
                consectetur. Elementum.
              </p>
              <div className="flex w-fit ml-auto items-center space-x-1 ">
                <Image
                  src="/images/Ellipse 1 (1).png"
                  alt="UTOPOLO"
                  width={0}
                  height={0}
                  className="w-fit rounded-full "
                  sizes="100vw"
                />
                <p className="text-xs">Olivia Geroud</p>
              </div>
            </div>
          </div>

          <div className="space-y-10 px-5">
            <div className="flex items-center gap-x-5 ">
              <Image
                src="/images/Frame 11.png"
                alt="UTOPOLO"
                width={0}
                height={0}
                className="w-[250px] rounded-lg"
                sizes="100vw"
              />
              <div className="space-y-3">
                <h3 className="font-bold">
                  As a startup should i use firestore for my app
                </h3>
                <p>
                  As a startup should i use firestore for my appLorem ipsum
                  dolor sit amet
                </p>
                <p className="text-green-haze-500 text-end">Gabriel Michael</p>
              </div>
            </div>

            <div className="flex items-center gap-x-5 ">
              <Image
                src="/images/Frame 11.png"
                alt="UTOPOLO"
                width={0}
                height={0}
                className="w-[250px] rounded-lg"
                sizes="100vw"
              />
              <div className="space-y-3">
                <h3 className="font-bold">
                  As a startup should i use fire store for my app
                </h3>
                <p>
                  As a startup should i use fire store for my appLorem ipsum
                  dolor sit amet
                </p>
                <p className="text-green-haze-500 text-end">Gabriel Michael</p>
              </div>
            </div>

            <div className="flex items-center gap-x-5 ">
              <Image
                src="/images/Frame 11.png"
                alt="UTOPOLO"
                width={0}
                height={0}
                className="w-[250px] rounded-lg"
                sizes="100vw"
              />
              <div className="space-y-3">
                <h3 className="font-bold">
                  As a startup should i use fire store for my app
                </h3>
                <p>
                  As a startup should i use fire store for my appLorem ipsum
                  dolor sit amet
                </p>
                <p className="text-green-haze-500 text-end">Gabriel Michael</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid relative overflow-hidden bg-black z-0">
        <div className="container justify-center grid md:grid-cols-2 items-center text-white">
          <div className="mx-auto space-y-4">
            <h4 className="text-xs">REACH OUT TO US</h4>
            <h3 className="font-bold text-2xl md:text-3xl">
              Want to Hire Great Technicians <br /> today!
            </h3>
            <p>
              Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus
              morbi pellentesque tincidunt nulla
            </p>
          </div>
          <div className="mx-auto w-full mt-10 md:mt-0">
            <form className="items-center gap-x-4 grid md:grid-cols-2 space-y-3 md:space-y-0">
              <input
                type="email"
                placeholder="Email Address"
                className="grow p-2 rounded text-black outline-none text-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 font-bold ml-auto md:ml-0"
              >
                Get on the list
              </button>
            </form>
          </div>
        </div>
        <svg width="165" height="313" viewBox="0 0 165 313" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 bottom-0 -z-10">
          <path d="M129.026 35.3553C109.5 15.8291 77.8413 15.8291 58.3151 35.3553L-164 257.67L-93.2893 328.381L129.026 106.066C148.552 86.5398 148.552 54.8816 129.026 35.3553Z" fill="#00AB44" fill-opacity="0.33"/>
          <path d="M129.182 212.19C109.655 192.664 77.997 192.664 58.4708 212.19L-68.4336 339.095L2.27708 409.805L129.181 282.901C148.708 263.375 148.708 231.717 129.182 212.19Z" fill="#00AB44" fill-opacity="0.33"/>
        </svg>
        <svg width="164" height="325" viewBox="0 0 164 325" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-0 -z-10">
          <path d="M35.5109 289.45C55.0371 308.977 86.6953 308.977 106.222 289.45L328.537 67.1352L257.826 -3.57543L35.5108 218.74C15.9846 238.266 15.9847 269.924 35.5109 289.45Z" fill="white" fill-opacity="0.5"/>
          <path d="M35.3551 112.615C54.8813 132.141 86.5396 132.141 106.066 112.615L232.97 -14.2896L162.26 -85.0002L35.3551 41.9042C15.8289 61.4304 15.8289 93.0887 35.3551 112.615Z" fill="white" fill-opacity="0.5"/>
        </svg>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
