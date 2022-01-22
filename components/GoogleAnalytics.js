import Head from 'next/head';

/**
 * Global site tag (gtag.js) - Google Analytics
 * @param {Object} props
 * @return {React.Component}
 */
export default function GoogleAnalytics() {
  return (
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179309954-1" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-179309954-1');
            `,
        }}
      />
    </Head>
  );
}
