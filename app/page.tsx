import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/navbar";

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
          <path d="M0 0H1187V550C1187 688.071 1075.07 800 937 800H0V0Z" fill="#00AB44" fill-opacity="0.05"/>
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
            <div className="col row row-cols-1 md:row-cols-2 g-5 mt-0">
              <div className="mt-0">
                <div className="h-72 relative">
                  <p className="absolute top-2 -left-28 px-5 py-2 text-sm font-bold bg-white shadow-md rounded-l-xl rounded-tr-xl text-green-haze-600">
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
          <path d="M-1 0H1186V800H249C110.929 800 -1 688.071 -1 550V0Z" fill="#00AB44" fill-opacity="0.05"/>
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

      <section className="w-full flex flex-col justify-center bg-gray-100">
        <h4 className="text-center font-bold text-green-500">TESTIMONIAL</h4>
        <h1 className="text-center font-bold text-black text-3xl">
          What Our customer Says
        </h1>
        <div className="flex justify-stretch my-10 mx-auto w-3/4 h-96">
          <div className="place-self-end">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-32"
              src="/images/c4.png"
              alt="just pic"
            />
          </div>
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-32"
              src="/images/c1.png"
              alt="just pic"
            />
          </div>
          <div className="self-center w-1/2">
            <div className="flex justify-center items-center w-40 h-40 border-4 border-green-haze-700 rounded-full mx-auto">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="w-32"
                src="/images/c5.png"
                alt="just pic"
              />
            </div>
            <div className="space-y-3 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur. Id fermentum cursus in
                lacus dignissim elementum vel. Risus egestas tellus vitae
                tincidunt. At arcu sed urna placerat. Hendrerit sodales
                vulputate viverra congue erat.
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
              className="w-32"
              src="/images/c2.png"
              alt="just pic"
            />
          </div>
          <div className="place-self-end">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-32"
              src="/images/c3.png"
              alt="just pic"
            />
          </div>
        </div>
      </section>

      <section className="my-20">
        <h4 className="text-center font-bold text-green-500">STORIES</h4>
        <h1 className="text-center font-bold text-black text-3xl mb-10">
          Our Most Popular Articles
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mx-20">
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
                habitasse bibendum sit ut varius .Lorem ipsum dolor sit amet
                consectetur. Elementum .
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

      <section className="flex justify-center my-3">
        <div className="relative justify-center py-16 grid md:grid-cols-2 items-center w-full bg-black text-white px-10 overflow-hidden">
          <div className="z-1 absolute h-20 left-0 bottom-32 -rotate-45 rounded-r-full -translate-x-[100px] w-[300px] bg-green-haze-500/50" />
          <div className="z-1 absolute h-20 left-0 bottom-0 -rotate-45 rounded-r-full -translate-x-[100px] w-[300px] bg-green-haze-500/50" />
          <div className="z-1 absolute h-20 -rotate-45 rounded-l-full right-0 top-10 translate-x-[100px] w-[300px] bg-neutral-900" />
          <div className="z-1 absolute h-20 -rotate-45 rounded-l-full right-0 top-30 translate-x-[100px] w-[300px] bg-neutral-900" />
          <div className="mx-auto space-y-4 z-10">
            <p className="text-xs">REACH OUT TO US</p>
            <h3 className="font-bold text-2xl md:text-3xl">
              Want to Hire Great Technicians <br /> today!
            </h3>
            <p>
              Arcu viverra ut quis gravida luctus. Scelerisque elit massa purus
              morbi pellentesque tincidunt nulla
            </p>
          </div>
          <div className="mx-auto z-10 w-full mt-10 md:mt-0">
            <form className="items-center gap-x-4 grid md:grid-cols-2 space-y-3 md:space-y-0">
              <input
                type="email"
                placeholder="Email Address"
                className="grow p-2 rounded text-black outline-none text-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 w-fit ml-auto md:ml-0"
              >
                Get on the list
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-10 md:px-28">
        <div className="md:mx-auto space-y-5 mx-3">
          <div className="flex justify-between items-center space-x-14">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/larven-logo.png"
                className=""
                alt="Larven logo"
                width={1531 / 15}
                height={1678 / 15}
                sizes="100vw"
              />
            </Link>
            <ul className="flex space-x-7">
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </li>
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </li>
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </li>
              <li className="p-2 bg-green-haze-200 rounded-full cursor-pointer hover:bg-green-haze-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-green-haze-700"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </li>
            </ul>
          </div>
          <hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 justify-between">
            <ul className="space-y-3">
              <li className="text-lg font-bold">Larven</li>
              <li>Services</li>
              <li>About</li>
              <li>Hackathons</li>
              <li>Careers</li>
              <li>Core values</li>
              <li>Ecosystem Partners</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-lg font-bold">Technologies</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing</li>
              <li>Computer Experience</li>
              <li>Aplicaion Services</li>
              <li>Automations</li>
              <li>Blockchain Technology</li>
            </ul>
            <ul className="space-y-3">
              <li className="text-lg font-bold">Servises</li>
              <li>Cyber Security</li>
              <li>Data & analytics</li>
              <li>Infrastructure</li>
              <li>Consulting</li>
              <li>Training</li>
              <li>System Auditing</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
