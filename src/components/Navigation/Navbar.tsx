import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex, HStack, IconButton, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack,
  Text, useColorModeValue, useDisclosure
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Logo from '../Core/Logo';


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


  const Links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'SearchByName',
      href: '/search',
    },
    {
      name: 'Filters',
      href: '/filters',
    },
    {
      name: 'Favorites',
      href: '/favorites',
    }
  ];



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
          <Flex alignItems={'center'} mr={4} >
            <Menu>
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
                <MenuItem>
                  <Link
                    href={'https://github.com/luizuk'}
                  >
                    Luiz Paulo
                  </Link>
                </MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Leave PokeDéx</MenuItem>
              </MenuList>
            </Menu>
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
