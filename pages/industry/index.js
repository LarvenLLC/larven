import Layout from "../../components/Layout";
import software from "../../software";

const keywords = Array.isArray(software)
  ? software?.map((el) => el?.keywords)?.flat()
  : [];

export default function Industries({}) {
  const industries = [...new Set(keywords)];

  return (
    <>
      <Layout title="">
        <section className="flex items-center flex-wrap">
          {industries?.map((industry, i) => (
            <div
              key={i}
              className="px-5 py-3 border border-light text-secondary font-medium rounded-md"
            >
              {industry ?? ""}
            </div>
          )) ?? ""}
        </section>
      </Layout>
    </>
  );
}
