import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import theme from './lib/theme';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Error from './components/pages/Error';

import MSC15 from './components/pages/portfolio/MSC15';
import ExtremeSubaruRacing from './components/pages/portfolio/ExtremeSubaruRacing';
import GameTetrisRace from './components/pages/portfolio/GameTetrisRace';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <NavBar />
        <Container maxW="container.sm" pt={24}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/portfolio/MSC15" element={<MSC15 />} />
            <Route path="/portfolio/GameTetrisRace" element={<GameTetrisRace />} />
            <Route path="/portfolio/ExtremeSubaruRacing" element={<ExtremeSubaruRacing />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
