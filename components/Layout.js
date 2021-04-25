import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, title = "" }) {
  return (
    <>
      <Title title={title} />
      <div className="container mx-auto prose max-w-full">
        <Header />
        <main className="flex flex-col items-center">
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
