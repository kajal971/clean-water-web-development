import React from 'react'
import ProductCards from './Asset/ProductCards'
import {Box, Flex, Stack, Text, Button, Image, Center} from '@chakra-ui/react'

export default function Cards() {
  return (
    <Flex py='10vw' justify={'space-evenly'} flexWrap={'wrap'}>
        <ProductCards head="Low energy wastewater treatment system" cont="Implement our innovative floating wetlands for highly efficient and low-energy wastewater treatment. These customizable floating ecosystems paired with our sequential wastewater pond system effectively remove pollutants, improve water quality, and provide a sustainable solution for wastewater management. The sequential ponds require little specialized equipment and have low energy needs making it perfect for rural settings."/>
        <ProductCards head="Aesthetic Wonders" cont="Enhance the beauty of gardens, parks, or estates with our stunning floating wetlands. These natural and visually appealing installations not only add charm and elegance to the surroundings but also serve as functional ecosystems that support biodiversity and improve water quality."/>
        <ProductCards head="Transforming poolscapes" cont="Say goodbye to chemical-laden treatments for residential swimming pools. Our floating wetlands offer a chemical-free alternative for pool treatment, ensuring a safer and healthier environment for swimming and recreational activities. Experience the beauty of a naturally treated pool with our eco-friendly solution."/>
    </Flex>
  )
}
