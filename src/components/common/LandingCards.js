import React from 'react'
import {Box, Flex, Stack, Text, Button, Image, Center} from '@chakra-ui/react'

export default function LandingCards(props) {
  return (
    <Stack w={['300px','370px','370px']} h={['400px','470px','470px']} spacing={5} m='30px' borderRadius={'20px'} boxShadow={'0px 0px 10px 0px black'} justify={'center'} align={'center'}>
        <Stack w={['300px','370px','370px']} h='90%' borderLeft={'10px solid green'} px='10%' borderRadius={'8px'}>
            <Stack mb={['10px','20px','30px']}>
                <Image w='100px' h='100px' src={props.img} mb='10px'/>
                <Text mb='-10px' fontWeight={'bold'} fontSize={['18px','22px','22px']}>{props.name}</Text>
                <Text w="80%" fontSize={['13px','16px','16px']}>{props.desg}</Text>
            </Stack>
            <Text fontSize={['13px','16px','16px']}>{props.cont}</Text>
        </Stack>
    </Stack>
  )
}