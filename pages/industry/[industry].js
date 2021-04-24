import Link from "next/link";
import { useRouter } from "next/router";

import lingo from "lingojs";

import Layout from "../../components/Layout";
import software from "../../software";

export default function Industry({}) {
  const router = useRouter();

  const keywords = Array.isArray(software)
    ? software?.map((el) => el?.keywords)?.flat()
    : [];

  return (
    <>
      <Layout title="">
        <section></section>
      </Layout>
    </>
  );
}
