import React from 'react'
import {Box, Flex, Stack, Text, Button, Image, Center} from '@chakra-ui/react'
import img from '@/Asset/Impact/impactHealthImg.png'

export default function Health() {
  return (
    <Flex flexDirection={['column','column','row']} alignItems={['center','center','flex-start']} pb='10vw'>
        <Text fontWeight={'bold'} fontSize={['var(--fs--250)','var(--fs--250)','var(--fs--200)']} mb='4vw' display={['block','none','none']} textAlign={'center'} mx='20px'>Improving the health of our water bodies</Text>
        <Image alt="" src={img.src} w={['100%','96vw','50vw']} h={['70vw','60vw','30vw']} px={['0','0','4.5vw']} mb={['20px','10px','0px']}/>
        <Stack pt='2vw' alignItems={['center','center','flex-start']} ml={['0px','0px','50px']}>
            <Text w={['0','80%','60%']} fontWeight={'bold'} fontSize={['var(--fs--300)','var(--fs--250)','var(--fs--200)']} mb='1.5vw' display={['none','block','block']}>Improving the health of our water bodies</Text>
            <Text w={['85%','80%','80%']} fontSize={['var(--fs--150)','var(--fs--150)','var(--fs--100)']}>Our work goes beyond surface-level improvements. We are committed to improving the overall health of water bodies and ecosystems. By implementing nature-based solutions, we combat water pollution, reduce algal blooms, and enhance the ecological balance of the waterbody. This leads to improved water quality, benefiting not only aquatic life but also the communities that rely on these water resources.</Text>
        </Stack>
    </Flex>
  )
}
