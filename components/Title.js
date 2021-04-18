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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon-16x16.png"
      />
      <link rel="manifest" href="/public/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/public/safari-pinned-tab.svg"
        color="#00ab44"
      />
      <link rel="shortcut icon" href="/public/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00ab44" />
      <meta name="msapplication-config" content="/public/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff"></meta>
      <title>
        {`${!pathname ? "Larven | " : ""}
        ${lingo(title).title()}
        ${pathname ? " | Larven" : ""}`}
      </title>
    </Head>
  );
}
