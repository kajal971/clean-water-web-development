import React from 'react'
import img from '@/Asset/Impact/SDGs.png'
import { Stack, Text, Image } from '@chakra-ui/react'

export default function Goals() {
  return (
    <Stack align={'center'} pb='12vw'>
      <Text w='90%' fontWeight={'bold'}
        fontSize={['var(--fs--250)', 'var(--fs--250)', 'var(--fs--200)']}
        mb='6vw' textAlign={'center'}>
        {"United Nations' Sustainable Development Goals"}
      </Text>
      <Image alt="" src={img.src} mb='5vw' />
      <Text mx={['0px', '0px', '50px']} w={['90%', '90%', '750px']} fontSize={['var(--fs--150)', 'var(--fs--150)', 'var(--fs--100)']}>
        {"We are driven by a relentless pursuit of sustainable solutions that align with the United Nations' Sustainable Development Goals (SDGs). Our interventions are strategically designed to address multiple SDGs, enabling us to make a meaningful impact."}
      </Text>
    </Stack>
  )
}
