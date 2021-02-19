import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, title = "" }) {
  return (
    <>
      <Title title={title} />
      <div className="container mx-auto prose max-w-full">
        <Header />
        <main className="max-w-7xl px-4 sm:px-6 lg:py-16 lg:px-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
