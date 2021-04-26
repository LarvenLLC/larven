import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import lingo from "lingojs";

export default function Title({ title = "Home" }) {
  const router = useRouter();

  const [pathname, setPathname] = useState("");

  useEffect(() => {
    let path = router?.pathname.replace("/", "");
    if (path) {
      setPathname(path);
    }
  }, [router?.pathname]);

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00ab44" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00ab44" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="To uplift mankind with technology they can own, we embrace the power of technology to bring happiness to our clients, people and communities."
      />
      <title>{`${lingo(title).title()} | ${
        pathname ? pathname : ""
      } | Larven`}</title>
    </Head>
  );
}
