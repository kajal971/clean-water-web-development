import React from 'react'
import {Box, Flex, Stack, Text, Button, Image, Center} from '@chakra-ui/react'
import img from '@/Asset/Impact/impactRevenueImg.png'

export default function Revenue() {
  return (
    <Flex flexDirection={['column','column','row']} alignItems={['center','center','flex-start']} mb='12vw'>
        <Text fontWeight={'bold'} fontSize={['var(--fs--250)','var(--fs--250)','var(--fs--200)']} m='4vw' display={['block','none','none']} textAlign={'center'}>Generate revenue and create livelihoods</Text>
        <Image alt="" src={img.src} w={['95%','90vw','50vw']} h={['70vw','60vw','30vw']} px={['0','0','4.5vw']} mb={['20px','10px','0px']}/>
        <Stack pt='2vw' alignItems={['center','center','flex-start']} ml={['0px','0px','50px']}>
            <Text w={['0','80%','60%']} fontWeight={'bold'} fontSize={['var(--fs--300)','var(--fs--250)','var(--fs--200)']} mb='1.5vw' display={['none','block','block']}>Generate revenue and create livelihoods</Text>
            <Text w={['85%','80%','80%']} fontSize={['var(--fs--150)','var(--fs--150)','var(--fs--100)']}>Our interventions generate revenue for governments and create livelihood opportunities, driving economic growth and improving the well-being of communities. By restoring and beautifying water bodies, we not only enhance their aesthetic appeal but also create vibrant urban landscapes that instill a sense of pride and belonging in local residents.</Text>
        </Stack>
    </Flex>
  )
}
