import React from 'react'
import SuggestedUser from './SuggestedUser'
import SuggestedUsersHeader from './SuggestedUsersHeader'
import SuggestedUsersFooter from './SuggestedUsersFooter'
import { Flex, Text, VStack } from '@chakra-ui/react'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedUsersHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Sugestões para Você
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
          Veja todas
        </Text>
      </Flex>
      <SuggestedUser name="User 1" followers={115} avatar="/img1.png" />
      <SuggestedUser name="User 2" followers={15} avatar="/img2.png" />
      <SuggestedUser name="User 3" followers={1115} avatar="/img3.png" />
      <SuggestedUsersFooter />
    </VStack>
  )
}

export default SuggestedUsers