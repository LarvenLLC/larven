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
        <section>{systems}</section>
      </Layout>
    </>
  );
}
