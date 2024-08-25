import Footer from '@/components/Footer'
import Cards from '@/components/Product/Cards'
import Island from '@/components/Product/Island'
import ProductHero from '@/components/Product/ProductHero'
import UseCases from '@/components/Product/UseCases'
import Navbar from '@/components/common/Navbar'
import OurProducts from '@/components/Product/OurProducts'
import React from 'react'
import Aerators from '@/components/Product/Aerators'
import Bacterial from '@/components/Product/Bacterial'

export default function index() {
  return (
    <>
      <Navbar />
      <ProductHero />
      <Aerators />
      <Bacterial />
      <Island />
      <OurProducts />
      <UseCases />
      <Cards />
      <Footer />
    </>
  )
}

