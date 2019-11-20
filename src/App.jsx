import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './core/assets/styles/global';
import theme from './core/constants/theme';
import store from './core/store';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <ToastContainer />
            <Routes />
          </StylesProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}
