import { Box, Button, Flex, Group, Input, InputGroup, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai'

const PostFooter = ({ username, isProfilePage }) => {

    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(100)

    const handleLike = () => {
        setLiked(prev => !prev);
        setLikes(prev => liked ? prev - 1 : prev + 1);
    }

    return (
        <Box mb={10} marginTop={"auto"} color={"gray"}>
            <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
                <Box onClick={handleLike} cursor={"pointer"} fontsize={18} color={"#6b2145"}>
                    {!liked ? (<AiOutlineHeart />) : (<AiFillHeart />)}
                </Box>
                <Box cursor={"pointer"} fontsize={18}>
                    <AiOutlineComment />
                </Box>
            </Flex>
            <Text fontWeight={600} fontsize={"sm"}>
                {likes} likes
            </Text>

            {!isProfilePage && (<>
                <Text fontWeight={700} fontsize={"sm"}>
                    {username}{" "}
                    <Text as={"span"} fontWeight={400} >
                        Brasão dos Barboza
                    </Text>
                </Text>
                <Text fontsize={"sm"}>
                    Veja todos os 1.000 commentários
                </Text>
            </>
            )}
            
            <Flex w="full">
                <Group attached w="full" maxW="sm">
                    <Input variant={"flushed"} placeholder={"Adicione um comentário..."} fontSize={14} />
                    <Button bg="transparent" variant="outline" fontsize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"} _hover={{ color: 'white' }}>
                        Enviar
                    </Button>
                </Group>
            </Flex>
        </Box>
    )
}

export default PostFooter