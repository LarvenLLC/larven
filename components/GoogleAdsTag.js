import Head from 'next/head';

/**
 * Global site tag (gtag.js) - Google Analytics
 * @param {Object} props
 * @return {React.Component}
 */
export default function GoogleAdsTag() {
  return (
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-179309954-1" />
      <script>
        (function(){
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-179309954-1');
        })();
      </script>
    </Head>
  );
}
