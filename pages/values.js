import Layout from '../components/Layout';

/**
 * The values page
 * @param {object} props
 * @return {JSX}
 */
export default function Values() {
  return (
    <Layout title="Core Values">
      <section>
        <h1>Core Values</h1>
        <div>
          <h2 className='text-xl font-bold'>1. The greatest leverage is time.</h2>
          <p></p>
          <h2 className='text-xl font-bold'>2. Take ownership in what you do.</h2>
          <p></p>
          <h2 className='text-xl font-bold'>3. Consistency.</h2>
          <p></p>
          <h2 className='text-xl font-bold'>4. Commitment.</h2>
          <p></p>
          <h2 className='text-xl font-bold'>5. Unlimited possibilities when you learn.</h2>
          <p></p>
          <h2 className='text-xl font-bold'>6. Do the right thing.</h2>
          <p></p>
          <h2 className='text-xl font-bold'>7. Find joy in the journey.</h2>
          <p></p>
        </div>
      </section>
    </Layout>
  );
}
