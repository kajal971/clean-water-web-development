import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        id='gtm-script'
      >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W75XCNGB');`}</Script>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1DJ174X2QF`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1DJ174X2QF', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W75XCNGB"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
