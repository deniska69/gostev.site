import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </BrowserRouter>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
