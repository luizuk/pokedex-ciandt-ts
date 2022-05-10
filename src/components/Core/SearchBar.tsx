import { Search2Icon } from '@chakra-ui/icons'
import { Image, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React from 'react'



const SearchBar = () => {
  return (
    <InputGroup size='md' w={['100%', '100%', '50%']}>
      <InputLeftElement>
        <Image
          width={'30px'}
          height={'30px'}
          src={'/pokeball.png'}
        />
      </InputLeftElement>
      <Input
        placeholder='Find Pokemon'
        variant={'filled'}
        borderColor={'red.600'}
        focusBorderColor={'red.500'}
        color={'gray.300'}
      />
      <InputRightElement width='4.5rem'>
        <Search2Icon
          color={'red.600'}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchBar