import React from 'react'
import { Box, Flex, Stack, Text, Button, Image, Center } from '@chakra-ui/react'
import img from '../Asset/Copy1.png'

export default function Welcome() {
  return (
    <Flex mt='16.5vw' my='8vw' flexDirection={['column', 'column', 'row']} alignItems={['center', 'center', 'flex-start']}>
      <Text fontWeight={'bold'} fontSize={['var(--fs--dif)', 'var(--fs--250)', 'var(--fs--200)']} mb='4vw'
        color="#165A84"
        display={['block', 'none', 'none']}>Welcome to Clean-Water</Text>
      <Image alt="" src={img.src} w={['100%', '96%', '50vw']} h={['70vw', '60vw', '30vw']} px={['0', '0', '4.5vw']} mb={['20px', '10px', '0px']} />
      <Stack pt='1.5vw' alignItems={['center', 'center', 'flex-start']} ml={['0px', '0px', '50px']}>
        <Text fontWeight={'bold'} fontSize={['var(--fs--300)', 'var(--fs--250)', 'var(--fs--200)']} mb='1.5vw' display={['none', 'block', 'block']}>Welcome to Clean-Water</Text>
        <Text w='85%' fontSize={['var(--fs--150)', 'var(--fs--150)', 'var(--fs--100)']}>
          Our mission is to create a sustainable future by addressing water pollution through innovative biological techniques and highly engineered products.
          <br />
          <br />
          We create Products that restore, conserve, and protect our water bodies and their ecosystems.
          
          We forge robust partnerships with governments, private institutions, and communities to usher transformation that address local needs while aligning with global sustainability objectives.
        </Text>
      </Stack>
    </Flex>
  )
}
