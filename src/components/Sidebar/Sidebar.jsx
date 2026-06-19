import { Box, Flex } from '@chakra-ui/react'
import React from 'react'


const Sidebar = () => {
    return (
        <Box
            height="100vh"
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={8}
            px={{ base: 2, md: 4 }}
            top={0}
            left={0}
            position={"sticky"}
        >

            <Flex direction={"column"} gap={10} w={"full"} heigth={"full"}>
                <Link>
                </Link>
            </Flex>
        </Box>
    )
}

export default Sidebar