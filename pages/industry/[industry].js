import Link from "next/link";
import { useRouter } from "next/router";

import lingo from "lingojs";

import Layout from "../../components/Layout";
import software from "../../software";

export default function Industry({}) {
  const router = useRouter();
  const { industry = "" } = router.query;

  const systems = Array.isArray(software)
    ? software?.filter((el) => el?.keywords?.includes(industry))
    : [];

  return (
    <>
      <Layout title="">
        <section>
          {systems?.map((system, i) => (
            <div key={i}>
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base no-underline font-medium rounded-md text-primary bg-green-50 hover:bg-primary hover:text-white">
                {lingo(system ?? "").title()}
              </a>
            </div>
          )) ?? ""}
        </section>
      </Layout>
    </>
  );
}
