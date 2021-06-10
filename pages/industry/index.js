import Link from "next/link";

import lingo from "lingojs";

import Layout from "../../components/Layout";
import software from "../../software";

const keywords = Array.isArray(software)
  ? software?.map((el) => el?.keywords)?.flat()
  : [];

export default function Industries({}) {
  const industries = [...new Set(keywords)];

  return (
    <>
      <Layout title="Industries">
        <section className="flex items-center flex-wrap gap-5">
          {industries?.map((industry, i) => (
            <Link key={i} href={`industry/${industry}`}>
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base no-underline font-medium rounded-md text-primary bg-green-50 hover:bg-primary hover:text-white">
                {lingo(industry ?? "").title()}
              </a>
            </Link>
          )) ?? ""}
        </section>
      </Layout>
    </>
  );
}
