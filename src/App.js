import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import theme from './lib/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <NavBar />
      </Box>
    </ChakraProvider>
  );
}

export default App;
