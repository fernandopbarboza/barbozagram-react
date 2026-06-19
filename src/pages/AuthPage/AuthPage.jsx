import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
    return (
        <Flex minH="100vh" alignItems="center" justifyContent="center" px={4}>
            <Container maxW="container.md" padding={0}>
                <Flex justifyContent="center" alignItems="center" gap={10}>
                    {/* Left side */}
                    <Box display={{ base: "none", md: "block" }} >
                        <Image src="/auth.webp" h={450} alt="Barbozagram Phone" />
                    </Box>

                    {/* Right side */}
                    <VStack>
                        <AuthForm />
                        <Box textAlign={'center'} mt={4} fontSize="sm" color="gray.500">
                            Baixe o App                            
                        </Box>
                        <Flex gap={5} justifyContent={'center'} >
                            <Image src="/playstore.png" h={10} alt="PlayStore Logo" />
                            <Image src="/microsoft.png" h={10} alt="Microsoft Logo" />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex >
    )
}

export default AuthPage