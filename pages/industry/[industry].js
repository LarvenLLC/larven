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
              <h4>{system?.name ?? "System Name"}</h4>
              <div className="grid md:grid-cols-2 gap-5">
                {system?.benefits?.map(
                  ({ benefit = "", description = "" }, j) => (
                    <button
                      key={j}
                      className="px-5 py-3 border border-light text-base text-left font-medium rounded-md text-primary hover:bg-green-50"
                    >
                      {benefit}
                      <div className="text-light">
                        <small>{description}</small>
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>
          )) ?? ""}
        </section>
      </Layout>
    </>
  );
}
