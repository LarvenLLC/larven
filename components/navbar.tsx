import Image from "next/image"

type PropsType = {
    hackathon: boolean
}

const NavBar = (props: PropsType) => {
    return (
      <>
        <div className="flex items-center px-10 py-3 bg-white">
          <div className="flex items-center space-x-14 w-fit">
            <Image
              src="/larven-logo.png"
              className="w-[5.5%]"
              alt="Larven logo"
              width={0}
              height={0}
              sizes="100vw"
            />
            <ul className="flex space-x-7 text-black text-xs font-semibold">
              <li>
                <p className="flex cursor-pointer">
                  <span>SERVICES</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </p>
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
                <a href="https://www.larven.co.tz/">{
                    props.hackathon === true ? "HACKATHONS" : "BLOG"
                }</a>
              </li>
            </ul>
          </div>
          <div className="w-[60%]">
            {/* Wrap the button with an anchor tag */}
            <ul className="flex space-x-7 w-fit ml-auto">
              <li>
                <button
                  type="button"
                  className="px-5 py-2 text-xs text-white rounded-r-full rounded-bl-full bg-green-haze-500 "
                >
                  Get free audit
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="px-5 py-2 text-xs text-green-haze-500 rounded-r-full rounded-bl-full bg-white border border-green-600 "
                >
                  Brief Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border border-green-haze-500" />
      </>
    );
  };

export default NavBar