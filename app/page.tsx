import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center px-10 py-2">
      <div className="flex items-center space-x-14 w-fit">
        <Image
          src="/larven-logo.png"
          className="w-[5.5%]"
          alt="Larven logo"
          width={0}
          height={0}
          sizes="100vw"
        />
        <ul className="flex space-x-7">
          <li>
            <a href="https://www.google.com">SERVICES</a>
          </li>
          <li>
            <a href="https://www.google.com">ABOUT</a>
          </li>
          <li>
            <a href="https://www.google.com">CONTACT</a>
          </li>
          <li>
            <a href="https://www.google.com">CAREERS</a>
          </li>
          <li>
            <a href="https://www.larven.co.tz/">CASE STUDIES</a>
          </li>
        </ul>
      </div>
      <div className="w-[20%]">
        {/* Wrap the button with an anchor tag */}

        <button
          type="button"
          className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
        >
          Hire Your Technicians
        </button>
      </div>
    </div>
  );
};

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
      <NavBar />

      <section className="h-[85vh] flex items-center">
        <div className="w-1/2 bg-green-haze-50 rounded-br-[150px] h-full flex flex-col justify-center px-10 py-2 gap-y-5">
          <h1 className="text-4xl font-bold">
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
        <div>
          <Image
            src="/images/strip2.png"
            alt="hellopic"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[50%]"
          />
        </div>
      </section>

      <section className="relative h-screen py-20">
        <div className="absolute -z-10 w-[80%] right-0 h-[85%] bg-green-haze-50 rounded-br-[150px]" />
        <div className="grid grid-cols-3 gap-7 w-[90%] ml-10 py-20">
          {servicesData.map((service, index) => (
            <div
              className="p-5 space-y-2 bg-white shadow-md w-fit "
              key={index}
            >
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
              <h3 className="font-bold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
          <div className="translate-x-20">
            <h3 className="text-sm font-bold text-green-haze-600">
              WHAT WE DO
            </h3>
            <h2 className="my-2 text-2xl font-bold ">
              Discover What We Can Do <br />
              <span className="text-lg font-normal">For You!</span>
            </h2>
            <button
              type="button"
              className="px-5 py-3 mt-5 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 w-fit"
            >
              Explore All
            </button>
          </div>
        </div>
      </section>

      <section className="relative my-10 overflow-hidden">


        <div className="absolute -z-10">
          <Image
            src="/images/deco1.png"
            alt="vidole decoration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>

        <div className="absolute bottom-0 right-0 -z-10">
          <Image
            src="/images/deco2.png"
            alt="vidole decoration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
        {/* <div className="absolute h-24 rotate-45 rounded-r-full top-32 -translate-x-[150px] w-[600px] bg-neutral-900/25 -z-10" />
        <div className="absolute h-24 rotate-45 rounded-r-full top-[256px] -translate-x-[230px] w-[600px] bg-green-haze-500/25 -z-10" />
        <div className="absolute h-24 -rotate-[140deg] rounded-r-full right-0 bottom-32 translate-x-[150px] w-[600px] bg-neutral-900/25 -z-10" />
        <div className="absolute h-24 -rotate-[140deg] rounded-r-full right-0 bottom-[256px] translate-x-[230px] w-[600px] bg-green-haze-500/25 -z-10" /> */}
        {/* <Image
          src="/images/strip3.png"
          alt="hellopic"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute w-[20%] -z-10"
        /> */}
        <h4 className="font-bold text-center text-green-haze-500">
          How We Works
        </h4>
        <h2 className="text-xl font-bold text-center">
          Discover The Steps We Take
        </h2>
        <h3 className="text-xl text-center">To Ensure Your Success</h3>

        <div className="grid w-[90%] grid-cols-6 my-3 mx-auto gap-y-6">
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
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
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
      </section>

      <section className="flex items-center h-screen">
        <div className="absolute -z-10 w-[80%] h-[85%] bg-green-haze-50 rounded-bl-[150px]" />
        <div className="flex flex-col justify-center w-1/4 h-full px-10 py-2 gap-y-2">
          <h3 className="text-sm font-bold text-green-haze-600">
            WHO WE WORK WITH
          </h3>
          <h2 className="my-2 text-2xl font-bold ">
            Discover What We Work With{" "}
            <span className="font-normal">To Achieve Your Goals</span>
          </h2>
          <button
            type="button"
            className="px-5 py-3 mt-5 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 w-fit"
          >
            Hire Your Technician
          </button>
        </div>
        <div className="grid w-1/2 grid-cols-2 gap-8 mx-auto">
          <div className="relative">
            <p className="absolute px-5 py-1 text-sm font-bold -translate-x-32 bg-white shadow-md rounded-l-xl rounded-tr-xl top-2 text-green-haze-600">
              Early Stage Startup
            </p>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="People working"
              width={0}
              height={0}
              className="w-[300px] rounded-lg"
              sizes="100vw"
            />
          </div>
          <div className="relative">
            <p className="absolute right-0 px-5 py-1 text-sm font-bold translate-x-20 bg-white shadow-md rounded-r-xl rounded-bl-xl bottom-2 text-green-haze-600">
              Funded Startups
            </p>
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="People working"
              width={0}
              height={0}
              className="w-[300px] rounded-lg"
              sizes="100vw"
            />
          </div>
          <div className="relative">
            <p className="absolute bottom-0 right-0 px-5 py-1 text-xs font-bold translate-x-2 translate-y-5 bg-white shadow-md rounded-r-xl rounded-bl-xl text-green-haze-600">
              Established (Traditional) Businesses
            </p>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="People working"
              width={0}
              height={0}
              className="w-[300px] rounded-lg"
              sizes="100vw"
            />
          </div>
          <div className="relative">
            <p className="absolute top-0 px-5 py-1 text-sm font-bold -translate-x-2 -translate-y-2 bg-white shadow-md rounded-l-xl rounded-tr-xl text-green-haze-600">
              Enterprises
            </p>
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="People working"
              width={0}
              height={0}
              className="w-[300px] rounded-lg"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section>
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
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">Relative to your needs</td>
              <td className="px-6 py-3  bg-white">Enterprise costs for everyone</td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3 ">PROCESS</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">Clear and documented</td>
              <td className="px-6 py-3">Full of surprises</td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3  bg-white">SCALE</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">At your own pace, your own way</td>
              <td className="px-6 py-3  bg-white">Vetting is necessary but costly in time, money, and efficiency.</td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3">HAND OVER STRATEGY</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">Each client set-up to fly on its own.</td>
              <td className="px-6 py-3">Create vendor dependency.</td>
            </tr>
            <tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3  bg-white">PRIVACY & SECURITY</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">Secure and dependable for clients.</td>
              <td className="px-6 py-3  bg-white">exploiting business data and involving third parties</td>
            </tr><tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3">TEAM</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">A recommended team based on needs of the project</td>
              <td className="px-6 py-3">Take what you are given without questions.</td>
            </tr><tr className="cursor-pointer bg-green-100 duration-300 hover:bg-green-200">
              <td className="px-6 py-3  bg-white">PROJECT MANAGEMENT</td>
              <td className="border-2 bg-green-500 px-6 py-3 text-fuchsia-50">Flexible and based on project needs.</td>
              <td className="px-6 py-3  bg-white">Biased towards own preference.</td>
            </tr>
          </tbody>
        </table>

      </section>
      <section className="h-screen w-full flex flex-col justify-center bg-gray-100">
        <h4 className="text-center font-bold text-green-500">TESTIMONIAL</h4>
        <h1 className="text-center font-bold text-black text-3xl">What Our customer Says</h1>
        <div className="flex justify-stretch my-10 mx-auto w-3/4 h-96">
          <div className="place-self-end">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 rounded-full"
              src="/images/c4.png"
              alt="just pic" />
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 rounded-full"
              src="/images/c1.png"
              alt="just pic" />
          </div>
          <div className="self-center w-1/2">
            <div className="flex justify-center items-center w-40 h-40 border-4 border-green-haze-700 rounded-full mx-auto">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="w-32 h-32 rounded-full"
                src="/images/c5.png"
                alt="just pic" />
            </div>
            <div className="space-y-3 text-center">
              <p >
                Lorem ipsum dolor sit amet consectetur. Id fermentum cursus in lacus dignissim elementum vel. Risus egestas tellus vitae tincidunt. At arcu sed urna placerat. Hendrerit sodales vulputate viverra congue erat.
              </p>
              <h3 className="text-green-haze-700 font-bold">Adela Mtae</h3>
              <div className="flex justify-evenly w-fit space-x-4 mx-auto">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <div className="w-2 h-2 bg-green-haze-500 rounded-full" />
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 rounded-full"
              src="/images/c2.png"
              alt="just pic" />
          </div>
          <div className="place-self-end">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-32 rounded-full"
              src="/images/c3.png"
              alt="just pic" />
          </div>
        </div>
      </section>

      <section className="h-screen my-5 space-y-5">
        <h4 className="text-center font-bold text-green-500">STORIES</h4>
        <h1 className="text-center font-bold text-black text-3xl">Our Most Popular Articles</h1>

        <div className="flex justify-evenly">

          <div className="w-[40%] space-y-10 shadow-lg rounded-lg">
            <Image
              src="/images/Frame 18.png"
              alt="UTOPOLO"
              width={0}
              height={0}
              className="w-full rounded-lg"
              sizes="100vw"
            />
            <div className="px-3 space-y-5">

            <h3 className="px-3 font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
            <p className="px-3">
              Lorem ipsum dolor sit amet consectetur. Elementum nec dictumst habitasse bibendum
              sit ut varius .Lorem ipsum dolor sit amet consectetur. Elementum .
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
             <p className="text-xs">
             Olivia Geroud
            </p>
            </div>
            </div>
          </div>

          <div className="w-[40%] space-y-10">
            <div className="flex items-center gap-x-5 ">
              <Image
                src="/images/Frame 11.png"
                alt="UTOPOLO"
                width={0}
                height={0}
                className="w-[300px] rounded-lg"
                sizes="100vw"

              />
              <div className="space-y-3">

                <h3 className="font-bold">As a startup should i use fire store for my app</h3>
                <p>
                  As a startup should i use fire store for my appLorem ipsum dolor sit amet
                </p>
                <p className="text-green-haze-500 text-end">
                  Gabriel Michael
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-5 ">
              <Image
                src="/images/Frame 11.png"
                alt="UTOPOLO"
                width={0}
                height={0}
                className="w-[300px] rounded-lg"
                sizes="100vw"

              />
              <div className="space-y-3">

                <h3 className="font-bold">As a startup should i use fire store for my app</h3>
                <p>
                  As a startup should i use fire store for my appLorem ipsum dolor sit amet
                </p>
                <p className="text-green-haze-500 text-end">
                  Gabriel Michael
                </p>
              </div>
            </div>

            <div className="flex items-center gap-x-5 ">
              <Image
                src="/images/Frame 11.png"
                alt="UTOPOLO"
                width={0}
                height={0}
                className="w-[300px] rounded-lg"
                sizes="100vw"

              />
              <div className="space-y-3">

                <h3 className="font-bold">As a startup should i use fire store for my app</h3>
                <p>
                  As a startup should i use fire store for my appLorem ipsum dolor sit amet
                </p>
                <p className="text-green-haze-500 text-end">
                  Gabriel Michael
                </p>
              </div>
            </div>



          </div>
        </div>
      </section>

    </>
  );
};

export default Homepage;
