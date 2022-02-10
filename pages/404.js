import Layout from '../components/Layout';

/**
 * The 404 page
 * @param {object} props
 * @return {JSX}
 */
export default function NotFound() {
    return (
        <Layout title="Page Not Found">
            <section className="my-0 py-0">
                <div class="grid grid-cols-1 md:grid-cols-2 p-12 bg-gray-300">
                    <div>
                        <h1 className="font-bold">OH NO!</h1>
                        <p>This page cannot be found.</p>
                        <p>404</p>
                    </div>
                    <img src="/images/404.png" alt='404' className='img-fluid place-self-center' />
                </div>
            </section>
        </Layout>
    );
}
