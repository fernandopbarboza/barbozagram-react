import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      <AvatarGroup size={{ base: "xl", sm: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar.Root>
          <Avatar.Image src="public/barbozagram-logo_512x512.png" name={"User 1"} alt={"User 1"} />
        </Avatar.Root>
      </AvatarGroup>

      <VStack alignItems={"flex-start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={4} direction={{ base: "column", sm: "row" }} justifyContent={{ base: "center", sm: "flex-start" }} alignItems={"center"} w={"full"}>
          <Text fontSize={{ base: "sm", md: "lg" }}>fefobarboza</Text>

          <Flex>
            <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>5</Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>15</Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>25</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>Fernando Barboza</Text>
        </Flex>
        <Text fontSize={"sm"}>Tem um bom domínio de tecnologias como VB6, VBA, C#, JavaScript, HTML5, CSS, SQL Server, Oracle, DB2 e processos de marketing digital como Lançamento de Info-Produtos, Criação de Campanhas [Meta ADS / Google ADS /Linkedin ADS], Gestão de Tráfego, Copywriting, Geração de Conteúdo estratégico.</Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader