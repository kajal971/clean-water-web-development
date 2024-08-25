import Footer from '@/components/Footer'
import Navbar from '@/components/common/Navbar'
import { PROJECTS_DATA } from '@/components/projects/PROJECTS_DATA'
import { Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const DynamicProjectPage = (props) => {
    const { slug } = props
    const [data, setData] = useState(null)
    useEffect(() => {
        PROJECTS_DATA.find((item) => {
            if (item.slug === slug) {
                setData(item)
            }
        })
    }, [])
    return (
        <>
            <Navbar />
            <Stack w="100%" h="90%" py="20px">
                <Text
                    w="100%"
                    textAlign={"center"}
                    fontWeight={"bold"}
                    fontSize={["var(--fs--250)", "var(--fs--250)", "var(--fs--200)"]}
                    py="10px"
                >
                    {data?.title}
                </Text>
                <Text mb={10} w="100%"
                    textAlign={"center"}
                    fontSize={['md']}>
                    {data?.location || "Test Location"}
                </Text>
                <SimpleGrid
                    width={"90%"}
                    mx={"auto"}
                    columns={[1, 1, 3]} spacing={10}>
                    {data?.images.map((item, index) => {
                        return (
                            <Image
                                borderRadius={'15px'}
                                key={index}
                                src={item}
                                alt={data?.title}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        )
                    })}
                </SimpleGrid>
            </Stack>
            <Footer />
        </>
    )
}

export default DynamicProjectPage

export async function getServerSideProps(context) {
    const { params } = context
    const { slug } = params
    return {
        props: {
            slug,
        },
    }
}