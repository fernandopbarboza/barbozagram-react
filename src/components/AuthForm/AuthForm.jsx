import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthForm = () => {

    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleAuth = () => { 
        if (!inputs.email || !inputs.password) {
            alert("Preencha todos os campos.");
            return;
        }

        navigate("/");
    }

    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src="/logo.webp" h={24} alt="Barbozagram Logo" cursor="pointer" />
                    
                    <Input placeholder="Email" type="email" fontSize={14} value={inputs.email} 
                    onChange={(e) => setInputs({...inputs, email: e.target.value})} />

                    <Input placeholder="Password" type="password" fontSize={14} value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})} />

                    {!isLogin ? <Input placeholder="Confirm Password" type="password" fontSize={14} value={inputs.confirmPassword}
                    onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} /> : null}

                    <Button w={"full"} colorScheme="blue" size="sm" fontSize={14} onClick={handleAuth}>
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>

                    <Flex w={"full"} justifyContent={'center'} alignItems={'center'} gap={1} my={4}>
                        <Box style={{ border: "1px solid gray" }} flex={1} />
                        <Text style={{ fontSize: "14px", color: 'whitesmoke' }}> OR </Text>
                        <Box style={{ border: "1px solid gray" }} flex={1} />
                    </Flex>

                    <Flex justifyContent={'center'} alignItems={'center'} cursor="pointer">
                        <Image src='/google.png' alt="Google" w={5} />
                        <Text mx={2}> Login with Google</Text>
                    </Flex>
                </VStack>
            </Box>

            <Box textAlign={'center'} mt={4} fontSize="sm" color="gray.500" border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
                    </Box>
                    <Box as="span" color="blue.500" cursor="pointer" onClick={() => setIsLogin(!isLogin)} >
                        {isLogin ? " Cadastre-se" : " Login"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm