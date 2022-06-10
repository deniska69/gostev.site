import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import App from './App'; //Компонента маршрутизации сайта
import theme from './lib/theme'; //Кастомная тема
import './index.css'; //Глобальный CSS

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </BrowserRouter>
  </StrictMode>
);

serviceWorker.unregister();
reportWebVitals();
