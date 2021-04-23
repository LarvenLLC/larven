import Layout from "../../components/Layout";
import software from "../../software";

export default function Industries({}) {
  const industries = [...new Set(software?.map((el) => el?.keywords))];

  return (
    <>
      <Layout title="">
        <section>
          {industries?.map((industry) => (
            <div>{industry?.keywords ?? ""}</div>
          ))}
        </section>
      </Layout>
    </>
  );
}
