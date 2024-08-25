import React from 'react'
import { Stack } from '@chakra-ui/react'
import Footer from './Footer'
import Herosection from './Herosection'
import Cleanwater from './Cleanwater'
import Welcome from './Welcome'
import Problems from './Problems'
import Solutions from './Solutions'
import Implementation from './Implementation'
import Row1 from './Row1'
// import Press from './Press'
import Navbar from './common/Navbar'
import Cards from './Cards'
import NewPress from './NewPress'
import NewPress2 from './NewPress2'
import NewPress1 from './NewPress1'
import ContactHero from './contact/ContactHero'
// import NewProblem from './NewProblem'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Welcome />
      <Cleanwater />
      {/* <Problems/> */}
      <Solutions />
      <Stack className='grad path' clipPath={['polygon(0 0, 50% 2%, 100% 0, 100% 98%, 50% 100%, 0 98%)', 'polygon(0 0, 50% 2%, 100% 0, 100% 98%, 50% 100%, 0 98%)', 'polygon(0 0, 50% 6%, 100% 0, 100% 94%, 50% 100%, 0 94%)']}>
        <Implementation />
        <Row1 />
      </Stack>
      <NewPress2 />
      <NewPress />
      <NewPress1 />
      <Cards />
      <ContactHero
        isFromHomePage={true}
      />
      <Footer />
    </>
  )
}
