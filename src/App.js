import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import theme from './lib/theme';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Error from './pages/Error';

import GostevSite from './pages/portfolio/GostevSite';
import SheregeshLIVE from './pages/portfolio/SheregeshLIVE';
import SimpleRegionLinkEditor from './pages/portfolio/SimpleRegionLinkEditor';
import ClaimSection from './pages/portfolio/ClaimSection';

import ITDepartament from './pages/portfolio/ITDepartament';
import MSC15 from './pages/portfolio/MSC15';
import BotPDF from './pages/portfolio/BotPDF';
import HelpDesk from './pages/portfolio/HelpDesk';
import Zayavka from './pages/portfolio/Zayavka';
import INoteApp from './pages/portfolio/INoteApp';
import ExtremeSubaruRacing from './pages/portfolio/ExtremeSubaruRacing';
import GameTetrisRace from './pages/portfolio/GameTetrisRace';

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

            <Route path="/portfolio/GostevSite" element={<GostevSite />} />
            <Route path="/portfolio/SheregeshLIVE" element={<SheregeshLIVE />} />
            <Route path="/portfolio/SimpleRegionLinkEditor" element={<SimpleRegionLinkEditor />} />
            <Route path="/portfolio/ClaimSection" element={<ClaimSection />} />

            <Route path="/portfolio/ITDepartament" element={<ITDepartament />} />
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
