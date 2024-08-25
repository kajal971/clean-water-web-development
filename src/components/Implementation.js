import React from 'react'
import {Box, Flex, Stack, Text, Button, Image, Center} from '@chakra-ui/react'
import Row1 from './Row1'

export default function Implementation() {
  return (
    <Stack align='center' color='white' pt={['170px','200px','300px']} >
        <Text fontSize={['var(--fs--300)','var(--fs--250)','var(--fs--250)']} fontWeight='bold' textAlign={'center'}>Process of Implementation</Text>
        {/* <Text fontSize={['var(--fs--250)','var(--fs--200)','var(--fs--200)']} fontWeight='bold' pb='40px'>From Vision to Reality</Text> */}
        <Text px={['10vw','15vw','250px']} pb='100px' fontSize={['var(--fs--150)','var(--fs--150)','var(--fs--100)']} textAlign={'center'}>At CW, we are committed to fostering healthy ecosystems and promoting a sustainable future through meticulously implemented solutions. 
            We work closely with our partners to understand their unique challenges and develop tailored strategies that align with their goals. Our team of experts oversees the construction and installation of the chosen interventions, ensuring seamless execution. 
            {/* Once implemented, we monitor and evaluate the effectiveness of our solutions, making necessary adjustments to optimize performance. */}
        </Text>
        {/* <Text fontWeight='bold' pb='70px' fontSize={'20px'}>{"Nature takes its course"}</Text> */}
    </Stack>
  )
}
