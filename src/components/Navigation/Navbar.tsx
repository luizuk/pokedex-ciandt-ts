import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex, HStack, IconButton, Link, Stack,
  Text, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Logo from '../Core/Logo';

const Links = [
  {
    name: 'Pokemons',
    href: '/',
  },
  {
    name: 'Favoritos',
    href: '/favorites',
  }
];

interface NavlinkProps {
  children: ReactNode,
  href: string
}


const NavLink = ({ children, href }: NavlinkProps) => (
  <Link
    px={2}
    py={1}
    flexDirection='row'
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'red.800')}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            ml={4}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Logo />

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://github.com/luizuk.png'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box m={0} p={4} display={{ md: 'none' }} bg={'red.500'}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                >
                  <Text
                    fontWeight={'bold'}
                  >
                    {link.name}
                  </Text>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
