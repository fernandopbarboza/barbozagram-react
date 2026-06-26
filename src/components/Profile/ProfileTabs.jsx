import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineBook, AiOutlineHeart, AiOutlineTable } from 'react-icons/ai'

const ProfileTabs = () => {
  return (
    <Flex w={"full"} justifyContent={"center"} gap={{ base: 4, sm: 10 }} textTransform={"uppercase"} fontWeight={"bold"}>
      <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontsize={20}><AiOutlineTable /> </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>Posts</Text>
      </Flex>
      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontsize={20}><AiOutlineBook /> </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>Saved</Text>
      </Flex>
      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontsize={20}><AiOutlineHeart /> </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>Likes</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs