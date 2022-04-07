import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';

import AdminPanelWithUsers from 'components/organisms/AdminPanelWithUsers/AdminPanelWithUsers';
import UserEdit from 'components/organisms/UserEdit/UserEdit';
import NewUserAdding from 'components/organisms/NewUserAdding/NewUserAdding';
import AdminPanelFixedAssets from 'components/organisms/AdmiPanelFixedAssets/AdminPanelFixedAssets';
import NewAssetsAdding from 'components/organisms/NewAssetsAdding/NewAssetsAdding';
import CreateNewInventory from 'components/organisms/CreateNewInventory/CreateNewInventory';
import NewInventoryView from 'components/organisms/NewInventoryView/NewInventoryView';

import LoginScreen from 'views/LoginScreen';
import ResetPassword from 'views/ResetPassword';
import ResetPasswordConfirmation from 'views/ResetPasswordConfirmation';
import { useAuth } from 'hooks/useAuth';
import AdminPanel from 'views/AdminPanel';

const AuthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/AdminPanel" />} />
        <Route path="/AdminPanelWithUsers" element={<AdminPanelWithUsers />} />
        <Route path="/UserEdit" element={<UserEdit />} />
        <Route path="/NewUserAdding" element={<NewUserAdding />} />
        <Route path="/AdminPanelFixedAssets" element={<AdminPanelFixedAssets />} />
        <Route path="/NewAssetsAdding" element={<NewAssetsAdding />} />
        <Route path="/CreateNewInventory" element={<CreateNewInventory />} />
        <Route path="/NewInventoryView" element={<NewInventoryView />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
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
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/resetPasswordConfirmation" element={<ResetPasswordConfirmation />} />
      </Routes>
    </Wrapper>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
