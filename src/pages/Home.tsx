/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataProvider'



const Home = () => {
  const { allPokemons }: any = useContext(DataContext)

  const links: { to: string, title: string }[] = [
    {
      to: '/search',
      title: 'Search'
    },
    {
      to: '/filters',
      title: 'Filters'
    },
    {
      to: '/favorites',
      title: 'Favorites'
    },
  ]


  return (
    <Box
      height={'100vh'}
      width={'100%'}
      backgroundImage="url('/ash-pikachu.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        width={'100%'}
        height={'100vh'}
        bg={'gray.900'}
        opacity={'90%'}
        p={2}

      >
        {
          links.map((link, index) => (
            <Link
              to={link.to}
            >
              <Button
                width={'100px'}
                height={'100px'}
                p={2}
                bg={'blue.800'}
                colorScheme={'facebook'}
                mr={2}
                mb={2}
              >
                <Text
                  // borderWidth={1}
                  width={120}
                  fontWeight={"black"}
                  // borderColor={'white'}
                  color={'yellow.500'}
                  textAlign={'center'}
                >
                  {link.title}
                </Text>
              </Button>
            </Link>
          ))
        }

      </Box >
    </Box>


  )
}

export default Home