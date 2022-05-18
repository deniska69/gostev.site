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

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    variants: {
      'hover-no': {
        _hover: {
          textDecoration: 'none',
        },
      },
      'hover-yes': {
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
};

const theme = extendTheme({ config, styles, components });

export default theme;
