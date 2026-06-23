import { Avatar, Box, Flex, HStack, Icon, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link, Link as RouterLink } from 'react-router-dom'
import { AiFillHome, AiFillInstagram, AiOutlineEdit, AiOutlineInstagram, AiOutlineLogout, AiOutlineNotification, AiOutlineSearch } from 'react-icons/ai'


const sidebarItems = [
    { icon: AiFillHome, text: "Home" },
    { icon: AiOutlineSearch, text: "Search" },
    { icon: AiOutlineNotification, text: "Notification" },
    { icon: AiOutlineEdit, text: "Create" },
];

const Sidebar = () => {
    return (
        <>
            <Box
                height="100vh"
                borderRight={"1px solid"}
                borderColor={"whiteAlpha.300"}
                py={8}
                px={{ base: 2, md: 4 }}
                top={0}
                left={0}
                position={"sticky"}
            >

                <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
                    <Box display={{ base: "none", md: "block" }} >
                        <Link to={"/"} as={RouterLink} pl={2} cursor={"pointer"}>
                            <Text>Barbozagram</Text>
                        </Link>
                    </Box>

                    <Box display={{ base: "block", md: "none" }} _hover={{ bg: "whiteAlpha.200" }} >
                        <Link to={"/"} as={RouterLink} pl={2} cursor={"pointer"} w={10}>
                            <AiOutlineInstagram size={25} />
                        </Link>
                    </Box>

                    <Flex direction="column" gap={5} cursor="pointer">
                        {sidebarItems.map((item, index) => {
                            return (
                                <Link key={index} label={item.text} display="flex" to={item.link || null} as={RouterLink} gap={4} _hover={{ bg: "whiteAlpha.400" }} p={2} w={{ base: 10, md: "full" }} display={{ base: "block", md: "none" }} >
                                    <HStack>
                                        <Icon as={item.icon} boxSize="5" />

                                        <Text display={{ base: "none", md: "block" }}>
                                            {item.text}
                                        </Text>
                                    </HStack>
                                </Link>
                            );
                        })}
                    </Flex>

                    <Box alignContent={"center"}>
                        <Avatar.Root>
                            <Avatar.Image src="public/profilepic.png" />
                        </Avatar.Root>
                    </Box>
                </Flex>
                <Link display="flex" to={"/auth"} as={RouterLink} gap={4} _hover={{ bg: "whiteAlpha.400" }} p={2} w={{ base: 10, md: "full" }} display={{ base: "block", md: "none" }} >
                    <HStack>
                        <AiOutlineLogout />
                        <Text display={{ base: "none", md: "block" }}>
                            Logout
                        </Text>
                    </HStack>
                </Link>
            </Box>
        </>
    )
}

export default Sidebar