import Link from "next/link";
import { useRouter } from "next/router";

import lingo from "lingojs";
import numeral from "numeral";

import Layout from "../../components/Layout";
import software from "../../software";

export default function Industry({}) {
  const router = useRouter();
  const { industry = "" } = router.query;
  const industries = industry.split("-").map((el) => el?.toLowerCase());

  const systems = Array.isArray(software)
    ? software?.filter((el) => {
        let keywordsLength = el?.keywords?.length ?? 0;
        let industriesLength = industries?.length ?? 0;
        let mergedArray = [...new Set([...industries, ...el?.keywords])];
        return (
          mergedArray.length <
          numeral(keywordsLength).add(industriesLength).value()
        );
      })
    : [];

  return (
    <>
      <Layout title={industry}>
        <section>
          <h3 className="text-secondary">
            Larven offers these collection of systems for free:
          </h3>
          {systems?.map((system, i) => (
            <div key={i}>
              <h4 className="text-secondary">
                {lingo(system?.name ?? "System Name").title()}
              </h4>
              <div className="grid md:grid-cols-2 gap-5">
                {system?.benefits?.map(
                  ({ benefit = "", description = "" }, j) => (
                    <button
                      key={j}
                      className="px-5 py-3 border border-light text-base text-left font-medium rounded-md text-primary hover:bg-green-50"
                    >
                      {lingo(benefit).sentence()}
                      <div className="text-light">
                        <small>{description}</small>
                      </div>
                    </button>
                  )
                ) ?? ""}
              </div>
            </div>
          )) ?? ""}
        </section>
      </Layout>
    </>
  );
}
