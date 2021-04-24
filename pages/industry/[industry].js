import Link from "next/link";
import { useRouter } from "next/router";

import lingo from "lingojs";
import numeral from "numeral";

import Layout from "../../components/Layout";
import software from "../../software";

export default function Industry({}) {
  const router = useRouter();
  const { industry = "" } = router.query;
  const industries = industry.split("-");

  const systems = Array.isArray(software)
    ? software?.filter((el) => {
        industry.split("-");
        let keywordsLength = el?.keywords?.length ?? 0;
        let industriesLength = industries?.length ?? 0;
        let mergedArray = [...industries, ...el?.keywords];
        if (
          mergedArray.length !==
          numeral(keywordsLength).add(industriesLength).value
        ) {
          return false;
        }
        return true;
      })
    : [];

  return (
    <>
      <Layout title="">
        <section>
          {systems?.map((system, i) => (
            <div key={i}>
              <h4>{lingo(system?.name ?? "System Name").title()}</h4>
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
