import { Avatar, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";

// interface urlProp {
//   url: string
// }

const SpecificPokemon = () => {
  const { favorites, setFavorites }: any = useContext(DataContext)
  const location = useLocation();
  const { url }: any = location.state;
  console.log('url', url)

  const [specificPokemonData, setSpecificPokemonData] = useState<any>(null)

  useEffect(() => {
    const getSpecificPokemon = async () => {
      const res: any = await axios.get(`${url}`)
      setSpecificPokemonData(res.data)
    }

    getSpecificPokemon()
  }, [])

  // const addToFavorites = () => {
  //   const favoriteAdded = [...favorites]
  //   favoriteAdded.push(...favorites, specificPokemonData)
  //   setFavorites(favoriteAdded)
  // }

  if (!specificPokemonData) return null

  console.log('favorites', favorites)
  // console.log('specificPokemonData', specificPokemonData)

  return (
    <Flex
      w={'100%'}
      bg={'black'}
      flexDirection={['column', 'column', 'row']}
      alignItems={{
        md: 'center', lg: 'center'
      }}
      p={2}
    >
      <Flex
        w={['100%', '100%', '300px']}
        bg={'red.600'}
        rounded={'lg'}
        p={4}
        flexDirection={'column'}
        alignItems={'center'}
      >

        <Text
          fontSize={32}
          fontWeight={'bold'}
        >
          {specificPokemonData.name.toUpperCase()}
        </Text>

        {
          specificPokemonData.types.map((type: any, index: number) => (
            <Text
              key={index}
              fontWeight={"bold"}
              color={'gray.300'}
            >
              {`Type ${type.slot}: (${type.type.name})`}
            </Text>
          ))
        }

        <Avatar
          bg={'yellow.100'}
          w={150}
          h={150}
          src={specificPokemonData.sprites.front_default}
        />

        {/* {
          !(favorites.find((name: string) => name === specificPokemonData.name)) &&
          <Button
            my={2}
            bg={"gray.800"}
            onClick={() => addToFavorites()}
          >
            Favorite ⭐
          </Button>
        } */}

      </Flex>

      <Flex
        w={['100%', '100%', '60%']}
        mt={[2, 2, 0]}
        ml={{ md: 4 }}
        bg={'gray.800'}
        rounded={'lg'}
        p={4}
        flexDirection={'column'}

      >
        <Text
          fontSize={'lg'}
          fontWeight={'bold'}
        >
          {'Stats Cards'.toUpperCase()}
        </Text>

        <SimpleGrid
          columns={3}
          spacing='30px'
          mt={2}
        >
          {
            specificPokemonData.stats.map((stats: any, index: number) => (
              <Flex
                key={index}
                w={['70px', '100px', '120px']}
                h={['70px', '100px', '120px']}
                bg={'purple.700'}
                rounded={'lg'}
                alignItems={'center'}
                justifyContent={'center'}
                padding={5}
                flexDirection={'column'}
              >
                <Text
                  textAlign={'center'}
                  fontSize={[12, 16, 18]}
                  fontWeight={'bold'}
                  color={'yellow.400'}
                >
                  {stats.stat.name.toUpperCase()}
                </Text>

                <Text
                  textAlign={'center'}
                  fontSize={[18, 22, 26]}
                  fontWeight={'bold'}
                >
                  {stats.base_stat}
                </Text>
              </Flex>
            ))
          }
        </SimpleGrid>
      </Flex>

    </Flex >
  )
}

export default SpecificPokemon