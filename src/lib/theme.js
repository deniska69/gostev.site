import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark', //Цветовая схема при первом посещении сайта пользователем ('dark' | 'light')
  useSystemColorMode: false, //Не использовать системную цветовую схему
};

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
