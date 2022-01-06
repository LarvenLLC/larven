import Layout from '../components/Layout';
import Email from '../components/Email';

/**
 * The careers page
 * @param {object} props
 * @return {JSX}
 */
export default function Careers() {
  return (
    <Layout title="Careers">
      <section>
        <h1>Careers</h1>
        <div className='w-full'>
          <div className='sm:px-10 sm:border-l-[10px] lg:border-l-[14px] border-primary pb-1'>
            <h3>Welcome to Larven!</h3>
            <p>
              Thank you for your interest in employment opportunities at Larven.
              We are always looking for great talent; if you are interested in joining our team,
              please send your CV and cover letter to <span />
              <Email />.
              We’ll get back to you.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
