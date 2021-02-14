import Title from "./Title";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, title = "" }) {
  return (
    <>
      <Title title={title} />
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}
