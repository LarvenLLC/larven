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
      <section className="my-10 text-center">
        <h4 className="font-bold text-green-haze-500">How We Works</h4>
        <h2 className="text-xl font-bold">Discover The Steps We Take</h2>
        <h3 className="text-xl">To Ensure Your Success</h3>

        <div className="grid w-[60%] grid-cols-2 py-3 mx-auto gap-y-10">
          <div className="p-5 space-y-2 bg-white shadow-md w-[300px]">
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
            <p>
              wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.
            </p>
          </div>
          <div className="p-5 space-y-2 bg-white shadow-md w-[300px]">
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
            <p>
              wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.
            </p>
          </div>
          <div className="col-span-2 border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t" />
          <div className="p-5 space-y-2 bg-white shadow-md w-[300px]">
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
            <p>
              wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.
            </p>
          </div>
          <div className="p-5 space-y-2 bg-white shadow-md w-[300px]">
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
            <p>
              wuaiwb iabwuah ua owwuaoniawiawjoaiwjoi aw awbwab aibwu
              abibaaowhuwa huaw huawhauw wbywa hwiaw iaybdwhab.
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center h-screen gap-x-32">
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
            <p className="absolute right-0 px-5 py-1 font-bold text-sm translate-x-20 bg-white shadow-md rounded-r-xl rounded-bl-xl bottom-2 text-green-haze-600">
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
            <p className="absolute bottom-0 right-0 px-5 py-1 text-sm font-bold translate-x-2 translate-y-5 bg-white shadow-md rounded-r-xl rounded-bl-xl text-green-haze-600">
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
    </>
  );
};

export default Homepage;
