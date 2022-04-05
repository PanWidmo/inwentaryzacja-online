import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';

import APUsers from 'components/organisms/APUsers/APUsers';
import UEPanel from 'components/organisms/UEPanel/UEPanel';
import NUAPanel from 'components/organisms/NUAPanel/NUAPanel';
import APFixedAssets from 'components/organisms/APFixedAssets/APFixedAssets';
import LoginScreen from 'views/LoginScreen';
import ResetPassword from 'views/ResetPassword';
import ResetPasswordConfirmation from 'views/ResetPasswordConfirmation';
import { useAuth } from 'hooks/useAuth';
import AdminPanel from 'views/AdminPanel';

const AuthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/APUsers" />} />
        <Route path="/APUsers" element={<APUsers />} />
        <Route path="/UEPanel" element={<UEPanel />} />
        <Route path="/NUAPanel" element={<NUAPanel />} />
        <Route path="/APFixedAssets" element={<APFixedAssets />} />
      </Routes>
    </Wrapper>
  );
};

const UnauthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-confirmation" element={<ResetPasswordConfirmation />} />
      </Routes>
    </Wrapper>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
