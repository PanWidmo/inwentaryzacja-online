import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from 'views/Root.styles';

import APUsers from 'components/organisms/APUsers/APUsers';
import APFixedAssets from 'components/organisms/APFixedAssets/APFixedAssets';
import LoginScreen from 'views/LoginScreen';
import ResetPassword from 'views/ResetPassword';
import ResetPasswordConfirmation from 'views/ResetPasswordConfirmation';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password-confirmation" element={<ResetPasswordConfirmation />} />
          </Routes>
            <APUsers />
            <APFixedAssets />
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
