import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import lingo from "lingojs";

export default function Title({ title = "" }) {
  const router = useRouter();

  const [pathname, setPathname] = useState("");

  useEffect(() => {
    let path = router?.pathname.replace("/", "");
    if (path) {
      setPathname(path);
    }
  }, [router?.pathname]);

  title;
  return (
    <Head>
      <title>
        {`${!pathname ? "Larven | " : ""}
        ${lingo(title).title()}
        ${pathname ? " | Larven" : ""}`}
      </title>
    </Head>
  );
}
