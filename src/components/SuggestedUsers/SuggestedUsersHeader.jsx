import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Link as RouterLink } from 'react-router-dom'

const SuggestedUsersHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar.Root size="xs">
          <Avatar.Image src={"/profilepic.png"} />
        </Avatar.Root>
        <Text fontSize={12} fontWeight={"bold"}>
          user1
        </Text>
      </Flex>
      <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.500"} cursor={"pointer"}>
      Log out
      </Link>
    </Flex >
  )
}

export default SuggestedUsersHeader