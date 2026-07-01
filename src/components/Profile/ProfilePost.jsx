import { Avatar, Box, Button, CloseButton, Dialog, Flex, GridItem, Image, Portal, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart, AiOutlineComment, AiOutlineDelete } from 'react-icons/ai'
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'

const ProfilePost = ({ img }) => {
  return (
    <>
      <Dialog.Root size={{ mdDown: "full", md: "lg" }} >
        <Dialog.Trigger asChild>
          <GridItem cursor={"pointer"} border={"1px solid"} borderRadius={4} borderColor={"whiteAlpha.300"} overflow={"hidden"} position={"relative"} aspectRatio={1 / 1} variant="outline">
            <Flex opacity={0} _hover={{ opacity: 1 }} position={"absolute"} top={0} left={0} right={0} bottom={0} bg={"blackAlpha.700"} transition={"all 0.3s ease"} zIndex={1} justifyContent={"center"}>
              <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                <Flex>
                  <AiFillHeart size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    9
                  </Text>
                </Flex>
                <Flex>
                  <AiOutlineComment size={20} />
                  <Text fontWeight={"bold"} ml={2}>
                    8
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Image src={img} alt={"profile post"} w={"100%"} h={"100%"} objectFit={"cover"} />
          </GridItem>
        </Dialog.Trigger>

        <Portal >
          <Dialog.Positioner>
            <Dialog.Content bg={"black"}>

              <Dialog.Header>
                <Dialog.Title></Dialog.Title>
              </Dialog.Header>

              <Dialog.Body >
                <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"}>
                  <Box borderRadius={4} overFlow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} flex={1.5}>
                    <Image src={img} />
                  </Box>
                  <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }} >
                    <Flex alignItems={"center"} justifyContent={"space-between"} borderBottom={"1px solid"} borderColor={"whiteAlpha.500"} py={2}>
                      <Avatar.Root>
                        <Avatar.Image src="/profilepic.png" size={"sm"} />
                      </Avatar.Root>
                      <Text fontWeight={"bold"} fontSize={12} color={"whiteAlpha.500"}>fefobarboza</Text>
                      <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }} borderRadius={4} px={1} color={"whiteAlpha.500"}>
                        <AiOutlineDelete size={20} cursor={"pointer"} />
                      </Box>
                    </Flex>
                    <Flex>
                      <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"} color={"whiteAlpha.500"} mt={2}>
                        <Comment createdAt={"5d ago"} username={"jose"} profilePicture={"/user-jose.webp"} text={"Nessa foto"} />
                        <Comment createdAt={"4h ago"} username={"cicera"} profilePicture={"/user-cicera.webp"} text={"Linda foto"} />
                        <Comment createdAt={"3h ago"} username={"sebastiana"} profilePicture={"/user-sebastiana.webp"} text={"Bela recordação"} />
                        <Comment createdAt={"3h ago"} username={"luiz"} profilePicture={"/user-luiz.webp"} text={"Lembro bem"} />
                        <Comment createdAt={"1h ago"} username={"jarbas"} profilePicture={"/user-jarbas.webp"} text={"Dia marcante"} />
                        <Comment createdAt={"1h ago"} username={"lurdes"} profilePicture={"/user-lurdes.webp"} text={"Me emociono"} />
                        <Comment createdAt={"5d ago"} username={"jose"} profilePicture={"/user-jose.webp"} text={"Nessa foto"} />
                        <Comment createdAt={"4h ago"} username={"cicera"} profilePicture={"/user-cicera.webp"} text={"Linda foto"} />
                        <Comment createdAt={"3h ago"} username={"sebastiana"} profilePicture={"/user-sebastiana.webp"} text={"Bela recordação"} />
                        <Comment createdAt={"3h ago"} username={"luiz"} profilePicture={"/user-luiz.webp"} text={"Lembro bem"} />
                        <Comment createdAt={"1h ago"} username={"jarbas"} profilePicture={"/user-jarbas.webp"} text={"Dia marcante"} />
                        <Comment createdAt={"1h ago"} username={"lurdes"} profilePicture={"/user-lurdes.webp"} text={"Me emociono"} />
                      </VStack>
                    </Flex>
                    <Box borderTop={"1px solid"} borderColor={"whiteAlpha.300"} mt={2}>
                      <PostFooter isProfilePage={true} color={"whiteAlpha.500"} />
                    </Box>
                  </Flex>
                </Flex>
              </Dialog.Body>

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" color={"whiteAlpha.500"} />
              </Dialog.CloseTrigger>

            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root >
    </>
  )
}

export default ProfilePost