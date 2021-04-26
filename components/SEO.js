import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
      {/* Open Graph */}
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      {/* Search */}
      {/* <script type="application/ld+json">
          {
            "@context": "https://schema.org/",
            "@type": "Recipe",
            "name": "Banana Bread Recipe",
            "description": "The best banana bread recipe you'll ever find! Learn how to use up all those extra bananas.",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "ratingCount": "123"
            },
            "video": {
                "@type": "VideoObject",
                "name": "How To Make Banana Bread",
                "description": "This is how you make banana bread, in 5 easy steps.",
                "contentUrl": "http://www.example.com/video123.mp4"
            }
          }
      </script> */}
    </Head>
  );
}
