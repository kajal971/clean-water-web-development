import React from 'react'
import {Box, Flex, Stack, Text, Button, Image, Center} from '@chakra-ui/react'

export default function Card(props) {
  return (
    <Box w='350px' h='350px'>
       <Image alt="" src={props.image}/>
    </Box>
  )
}
