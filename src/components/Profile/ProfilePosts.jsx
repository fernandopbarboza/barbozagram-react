import React, { useEffect, useState } from 'react'
import ProfilePost from './ProfilePost'
import { Box, Grid, GridItem, Skeleton, VStack } from '@chakra-ui/react'

const ProfilePosts = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false), 2000
    }
    )
  }, [])

  return (
    <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={1} columnGap={1}>
      {isLoading && [0, 1, 2, 3, 4, 5].map((_, idx) => (
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
            <Box h="300px">Contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}


      {!isLoading && (
        <>
          <ProfilePost img="/barbozagram-logo_512x512.png" />
          <ProfilePost img="/user-genezio-maria.webp" />
          <ProfilePost img="/img2.png" />
          <ProfilePost img="/user-jose.webp" />
          <ProfilePost img="/user-cicera.webp" />
          <ProfilePost img="/user-sebastiana.webp" />
          <ProfilePost img="/user-luiz.webp" />
          <ProfilePost img="/user-jarbas.webp" />
          <ProfilePost img="/user-lurdes.webp" />
        </>
      )}
    </Grid>
  )
}

export default ProfilePosts