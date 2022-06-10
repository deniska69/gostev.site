import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import theme from './lib/theme';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Error from './components/pages/Error';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <NavBar />
        <Container maxW="container.sm" pt={24}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
