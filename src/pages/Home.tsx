/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../contexts/DataProvider'



const Home = () => {
  const { allPokemons }: any = useContext(DataContext)

  console.log("allPokemons", allPokemons)


  const links: { to: string, title: string }[] = [
    {
      to: '/search',
      title: 'Search by Name'
    },
    {
      to: '/filters',
      title: 'Filters'
    },
    {
      to: '/favorites',
      title: 'Favorite Pokemons'
    },
  ]


  return (
    <Box
      width={'100%'}
      bg={'black'}
      p={2}
      justifyContent={'center'}
    >
      {
        links.map((link, index) => (
          <Link
            to={link.to}
          >
            <Button
              colorScheme={'facebook'}
              mr={2}
            >
              <Text
                textAlign={'center'}
              >
                {link.title}
              </Text>
            </Button>
          </Link>
        ))
      }

    </Box>
  )
}

export default Home