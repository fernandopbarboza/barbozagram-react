import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, []);

    return (

        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading && [0, 1, 2, 3].map((_, idx) => (
                <VStack key={idx}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10} />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton h={"10px"} w={"200px"} />
                            <Skeleton h={"10px"} w={"200px"} />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>
                            carregando post
                        </Box>
                    </Skeleton>
                </VStack>
            ))
            }

            {!isLoading && (
                <>
                    <FeedPost img="/img1.png" username="user1" avatar="/img1.png" />
                    <FeedPost img="/img2.png" username="user2" avatar="/img2.png" />
                    <FeedPost img="/img3.png" username="user3" avatar="/img3.png" />
                    <FeedPost img="/img4.png" username="user4" avatar="/img4.png" />
                </>
            )}
        </Container >

    )
}

export default FeedPosts