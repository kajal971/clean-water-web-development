import React from 'react'
import {Box, Flex, Stack, Text, Button, Image, Center} from '@chakra-ui/react'

export default function ProductCards(props) {
  return (
    <Stack w={['300px','370px','370px']} h={['370px','440px','440px']} spacing={5} m='30px' borderRadius={'20px'} boxShadow={'0px 0px 10px 0px black'} justify={'center'} align={'center'}>
        <Stack w={['300px','370px','370px']} h='90%' borderLeft={'10px solid green'} px='10%' borderRadius={'8px'}>
            <Text  fontWeight={'bold'} fontSize={['18px','22px','22px']} mb='20px'>{props.head}</Text>
            <Text fontSize={['13px','16px','16px']}>{props.cont}</Text>
        </Stack>
    </Stack>
  )
}
