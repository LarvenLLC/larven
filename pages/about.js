import Layout from "../components/Layout";

export default function About({}) {
  return (
    <Layout title="About Us">
      {/* purpose section */}
      <section className="text-center">
        <h2>Our Purpose</h2>
        <p>To uplift mankind with technology they can own</p>
        <p>
          We embrace the power of technology to bring happiness to our clients,
          people and communities.
        </p>
      </section>
      {/* numbers section */}
      {/* values section */}
      <section className="flex flex-wrap justify-center gap-10">
        <div className="">
          <h2>Our Values</h2>
          <ul>
            <li>Team Work</li>
            <li>Innovation</li>
            <li>Individual Development</li>
          </ul>
        </div>
        {/* pillars section */}
        <div>
          <h2>Our Pillars</h2>
          <ul>
            <li>Human Centered Design</li>
            <li>Humane Development</li>
            <li>Specialization &amp; Division of Labour</li>
          </ul>
        </div>
      </section>
      {/* accomplishments section */}
      {/* how we work section */}
      <section>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <h1>How we work</h1>
          <ul>
            <li>Total inclusiveness &amp; Extreme feedback</li>
            <li>User &amp; Business Centric</li>
            <li>Research &amp; Design Focused</li>
          </ul>
        </div>
      </section>
      {/* awards & recognition section */}
    </Layout>
  );
}
