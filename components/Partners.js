/**
 * Partners and clients showcasing component
 * @component
 * @return {function}
 */
export default function Partners() {
  return (
    <section className="">
      <div className="flex flex-row flex-wrap items-center justify-center">
        {/* TUWAMIF */}
        <div>
          <a href="#">
            <img
              width={300}
              src="/images/tuwamif.webp"
              className="opacity-100 hover:opacity-70"
              alt="TUWAMIF"
            />
          </a>
        </div>
        {/* LightHouse */}
        <div>
          <a href="#">
            <img
              width={300}
              src="/images/lighthouse.webp"
              className="opacity-100 hover:opacity-70"
              alt="LightHouse"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
