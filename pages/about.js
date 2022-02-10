import Layout from '../components/Layout';
import { InnovationSVG, SelfDevelopmentSVG, TeamworkSVG } from '../components/Svgs';

/**
 * The about page
 * @param {object} props
 * @return {JSX}
 */

const valuesStyle = { width: "33%", alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' };
export default function About() {
  return (
    <Layout title="About Us" className="">
      <section>
        <h1 className='mb-0'>About Larven</h1>
      </section>
      {/* purpose section */}
      <section className="text-left px-4">
        <h2>We Are Larven</h2>
        <p> A technology firm focused on the consultation and development of digital systems for the success of your business. Our journey began in 2019, and we are committed to creating the technological solutions that you seek. We provide a variety of services ranging from application and software development to consultation and training.</p>

        <h3>We make it a point to work closely with clients</h3>
        <p>
          We want to understand your problems, objectives, and desired outcomes; our dedication is to provide you with the bespoken solution centered on your customers and business.
        </p>

        <h2 className="text-center">We Value</h2>
        <div className="d-flex flex-row justify-space-around w-100" style={{ display: "flex" }}>

          <div className="text-center" style={valuesStyle}>
            <TeamworkSVG />
            <h3>Teamwork</h3>
            <p> We collaborate and communicate effectively to provide you with high-quality service. </p>
          </div>
          <div className="text-center" style={valuesStyle}>
            <InnovationSVG />
            <h3>Innovation</h3>
            <p>We believe in developing and introducing new things.</p>
          </div>
          <div className="text-center" style={valuesStyle}>
            <SelfDevelopmentSVG />
            <h3>Individual Development</h3>
            <p>A great team, we believe, begins with great individuals. We are constantly improving ourselves to serve you with excellence.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 >Meet Our Team</h2>
          <p>A perfect blend of creativity and technical prowess.</p>
        </div>
      </section>

    </Layout>
  );
}
