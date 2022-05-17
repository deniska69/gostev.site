import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

export const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <IconButton
          aria-label={`Сменить тему`}
          colorScheme={useColorModeValue('purple', 'orange')}
          onClick={toggleColorMode}
          icon={useColorModeValue(<FaMoon />, <FiSun />)}></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};
