import Footer from '@/components/Footer'
import Navbar from '@/components/common/Navbar'
import Activities from '@/components/concept/Activities'
import Artificial from '@/components/concept/Artificial'
import ConceptHero from '@/components/concept/ConceptHero'
import Events from '@/components/concept/Events'
import Parking from '@/components/concept/Parking'
import Personalizing from '@/components/concept/Personalizing'
import React from 'react'


export default function index() {
  return (
    <>
        <Navbar/>
        <ConceptHero/>
        <Parking/>
        <Events/>
        <Activities/>
        <Personalizing/>
        <Artificial/>
        <Footer/>
    </>
  )
}
