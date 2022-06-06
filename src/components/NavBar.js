import Logo from './Logo';
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, Button, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaGithub } from 'react-icons/fa';

const LinkItem = ({ href, children, ...props }) => {
  const path = window.location.pathname;
  const active = path === href;

  return (
    <Link href={href} variant="hover-no" {...props}>
      <Button colorScheme="teal" variant={active ? 'solid' : 'ghost'}>
        {children}
      </Button>
    </Link>
  );
};

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
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}>
          <LinkItem href="/portfolio/">Портфолио</LinkItem>
          <LinkItem href="https://github.com/deniska69" target="_blank" display="inline-flex" alignItems="center" style={{ gap: 4 }} pl={2}>
            <FaGithub />
            GitHub
          </LinkItem>
        </Stack>

        {/* Бургер-меню */}
        <Box flex={1} align="right">
          <ColorModeSwitcher justifySelf="flex-end" />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
              <MenuList>
                <MenuItem as={Link} href="/">
                  Главная страница
                </MenuItem>
                <MenuItem as={Link} href="/portfolio">
                  Портфолио
                </MenuItem>
                <MenuItem as={Link} target="_blank" href="https://github.com/deniska69">
                  GitHub
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
