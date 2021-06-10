import Link from "next/link";
// import Image from "next/image";

export default function Partners() {
  return (
    <section className="">
      <div className="flex flex-row flex-wrap items-center justify-center">
        <div>
          <a href="#">
            <img
              src="/images/tuwamif.png"
              className="filter contrast-0 opacity-100 hover:opacity-70"
              alt="TUWAMIF"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
