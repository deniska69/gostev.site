import Logo from './Logo';
import { Container, Box, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue, HStack, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')} css={{ backdropFilter: 'blur(10px)' }} zIndex={1}>
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        {/* Логотип */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        {/* Основное меню */}
        <HStack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          paddingLeft={4}
          paddingBottom={1}
          spacing={5}>
          <Link to="portfolio">Портфолио</Link>
          <a href="https://github.com/deniska69" target="_blank" rel="noreferrer">
            <HStack>
              <FaGithub />
              <Text>GitHub</Text>
            </HStack>
          </a>
        </HStack>

        {/* Бургер-меню */}
        <Box flex={1} align="right">
          <ColorModeSwitcher justifySelf="flex-end" />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
              <MenuList>
                <MenuItem>
                  <Link to="/">Главная страница</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="portfolio">Портфолио</Link>
                </MenuItem>
                <MenuItem>
                  <a href="https://github.com/deniska69" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default NavBar;
