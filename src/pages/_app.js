import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Clean-Water | India</title>

        <link rel="canonical" href="https://clean-water.co.in" />

        <meta property="og:site_name" content="Clean-Water" />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://clean-water.co.in" />

        <meta property="og:title" content="Clean-Water" />

        <meta name="description" content="We create Products that restore, conserve, and protect our water bodies and their ecosystems. We forge robust partnerships with governments, private institutions, and communities to usher transformation that address local needs while aligning with global sustainability objectives." />

        <meta name="keywords" content="clean water, water pollution, floating islands, floating aerators, aerators, environmental sustainability, bacterial solutions, natural wetlands, water bodies, ways to improve water quality, best floating islands, how to improve ground water quality, water pollution" />

        <meta name="robots" content="follow,index" />

        <link rel="canonical" href="https://clean-water.co.in" />

        <meta property="og:url" content="https://clean-water.co.in" />

        <meta property="og:title" content="Clean-Water | India" />

        <meta property="og:description" content="Our mission is to create a sustainable future by addressing water pollution through innovative biological techniques and highly engineered products."
        />

        <meta property="og:image:type" content="image/webp" />

        <meta property="og:image:width" content="730" />

        <meta property="og:image:height" content="1200" />

        <meta name="twitter:card" content="summary" />

        <meta name="twitter:title" content="Clean-Water | India" />

        <meta name="twitter:description" content="Our mission is to create a sustainable future by addressing water pollution through innovative biological techniques and highly engineered products." />

        <meta name="twitter:image" content="https://ik.imagekit.io/o0spphqdc/Clean-water/Clean-Water-Logo_UssW4gVQjI.png?updatedAt=1700816654334"
        />

        <meta itemprop="name" content="Clean-Water | India" />

        <meta itemprop="description" content="We create Products that restore, conserve, and protect our water bodies and their ecosystems. We forge robust partnerships with governments, private institutions, and communities to usher transformation 
            that address local needs while aligning with global sustainability objectives." />

        <meta property="og:image" itemprop="https://ik.imagekit.io/o0spphqdc/Clean-water/Clean-Water-Logo_UssW4gVQjI.png?updatedAt=1700816654334" />

      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
