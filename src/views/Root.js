import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';

import AdminPanelWUsers from 'components/organisms/AdminPanelWUsers/AdminPanelWUsers';
import UserEdit from 'components/organisms/UserEdit/UserEdit';
import NewUserAdding from 'components/organisms/NewUserAdding/NewUserAdding';
import AdminPanelFixedAssets from 'components/organisms/AdminPanelFixedAssets/AdminPanelFixedAssets';
import NewAssetsAdding from 'components/organisms/NewAssetsAdding/NewAssetsAdding';
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
        <Route path="/APUsers" element={<AdminPanelWUsers />} />
        <Route path="/UEPanel" element={<UserEdit />} />
        <Route path="/NUAPanel" element={<NewUserAdding />} />
        <Route path="/APFixedAssets" element={<AdminPanelFixedAssets />} />
        <Route path="/NAAPanel" element={<NewAssetsAdding />} />
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
