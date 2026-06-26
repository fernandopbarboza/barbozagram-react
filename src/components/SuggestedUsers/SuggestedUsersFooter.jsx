import { HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineTrademarkCircle } from 'react-icons/ai'

const SuggestedUsersFooter = () => {
  return (
    <HStack fontSize={12} color={"gray.500"} mt={5}>
      <AiOutlineTrademarkCircle />
      <Text > 2026 - Desenvolvido por {" "} </Text>
      <Link href='https://fernandobarboza.com.br/' target='_blank' color={"blue.500"} fontSize={14}>Fernando Barboza</Link>
    </HStack>
  )
}

export default SuggestedUsersFooter