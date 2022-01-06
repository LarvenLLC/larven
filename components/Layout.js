import Title from './Title';
import Footer from './Footer';
import Header from './Header';

/**
 * @description Layout wrapper
 * @param {object} props
 * @return {JSX}
 */
export default function Layout({children, title = ''}) {
  return (
    <>
      <Title title={title} />
      <div className="container mx-auto prose max-w-full">
        <Header />
        <main className="container mx-auto">
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
