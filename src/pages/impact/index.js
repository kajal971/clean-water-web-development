import ImpactHero from '@/components/Impact/ImpactHero'
import Health from '@/components/Impact/Health'
import React from 'react'
import Sustainability from '@/components/Impact/Sustainability'
import Revenue from '@/components/Impact/Revenue'
import Footer from '@/components/Footer'
import Goals from '@/components/Impact/Goals'
import Navbar from '@/components/common/Navbar'

export default function index() {
  return (
    <>
    <Navbar/>
    <ImpactHero/>
    <Health/>
    <Sustainability/>
    <Revenue/>
    <Goals/>
    <Footer/>
    </>
  )
}
