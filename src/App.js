import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import theme from './lib/theme';

import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Error from './components/pages/Error';

import SheregeshLIVE from './components/pages/portfolio/SheregeshLIVE';
import SimpleRegionLinkEditor from './components/pages/portfolio/SimpleRegionLinkEditor';
import ClaimSection from './components/pages/portfolio/ClaimSection';

import MSC15 from './components/pages/portfolio/MSC15';
import BotPDF from './components/pages/portfolio/BotPDF';
import HelpDesk from './components/pages/portfolio/HelpDesk';
import Zayavka from './components/pages/portfolio/Zayavka';
import INoteApp from './components/pages/portfolio/INoteApp';
import ExtremeSubaruRacing from './components/pages/portfolio/ExtremeSubaruRacing';
import GameTetrisRace from './components/pages/portfolio/GameTetrisRace';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <NavBar />
        <Container maxW="xl" pt={24}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/portfolio/SheregeshLIVE" element={<SheregeshLIVE />} />
            <Route path="/portfolio/SimpleRegionLinkEditor" element={<SimpleRegionLinkEditor />} />
            <Route path="/portfolio/ClaimSection" element={<ClaimSection />} />

            <Route path="/portfolio/MSC15" element={<MSC15 />} />
            <Route path="/portfolio/BotPDF" element={<BotPDF />} />
            <Route path="/portfolio/HelpDesk" element={<HelpDesk />} />
            <Route path="/portfolio/Zayavka" element={<Zayavka />} />
            <Route path="/portfolio/iNote" element={<INoteApp />} />
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
