import Navbar from '@/components/common/Navbar'
import { Box } from '@chakra-ui/react'
import React from 'react'

function brochure() {
    const pdfFile = '/Clean-water-Product-Catelogue.pdf'
    return (
        <>
            <Navbar />
            <Box w='100%' h='100vh' bg='red'>
                <iframe
                    width='100%'
                    height='100%'
                    src={pdfFile} title="title" />
            </Box>
        </>
    )
}

export default brochure