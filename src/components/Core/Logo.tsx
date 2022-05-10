import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'


const Logo = () => {
  return (
    <Box
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'red.800'}
    >
      <Image
        src={'/pokelogo.png'}
        w={['150px']}
        height={'auto'}
      />
      <Text
        textAlign={'center'}
        fontWeight={"bold"}
      >
        POKEDÉX
      </Text>
    </Box>
  )
}

export default Logo