import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const LayoutPage = ({ children }) => {
    const { pathname } = useLocation()
    return (
        <Flex>
            {/* left side menu */}
            {pathname != '/auth' ? (
                <Box>
                    <Sidebar />
                </Box>
            ) : null}
            {/* main content */}
            <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}}>
                {children}
            </Box>
        </Flex>
    )
}

export default LayoutPage