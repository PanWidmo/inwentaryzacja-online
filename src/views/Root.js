import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';

import { Login } from 'views/auth/Login/Login';
import { ResetPassword } from 'views/auth/ResetPassword/ResetPassword';
import { ResetPasswordConfirmation } from 'views/auth/ResetPasswordConfirmation/ResetPasswordConfirmation';
import { ResetPasswordForm } from 'views/auth/ResetPasswordForm/ResetPasswordForm';
import { InventorySummaryConfirmation } from 'views/inventory/InventorySummaryConfirmation/InventorySummaryConfirmation';
import { AdminPanel } from 'views/roles pages/AdminPanel/AdminPanel';
import { UserPanelList } from 'views/user/UserPanelList/UserPanelList';
import { UserCreate } from 'views/user/UserCreate/UserCreate';
import { UserEdit } from 'views/user/UserEdit/UserEdit';
import { FixedAssetPanelList } from 'views/fixed asset/FixedAssetPanel/FixedAssetPanel';
import { FixedAssetCreate } from 'views/fixed asset/FixedAssetCreate/FixedAssetCreate';
import { InventoryCreate } from 'views/inventory/InventoryCreate/InventoryCreate';

//NewInventoryView it's just view after imported data from file (probably no)
import NewInventoryView from 'components/organisms/NewInventoryView/NewInventoryView';

import { useAuth } from 'hooks/useAuth';
import { FixedAssetEdit } from './fixed asset/FixedAssetEdit/FixedAssetEdit';
import { AccountantPanel } from './roles pages/AccountantPanel/AccountantPanel';
import { InventoryPanel } from './inventory/InventoryPanel/InventoryPanel';
import { InventoryEdit } from './inventory/InventoryEdit/InventoryEdit';
import { UserRoleSelect } from './roles pages/UserRoleSelect/UserRoleSelect';
import { UserAssets } from './user/UserAssets/UserAssets';

const AuthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/*" element={<Navigate to="/select-user-role" />} />
        <Route path="/select-user-role" element={<UserRoleSelect />} />
        {/* <Route path="/user/:user-id/inventory/:inventory-id" element={< />} /> */}
        {/* <Route path="/user/:user-id/inventory/:inventory-id/summary" element={< />} /> */}
        <Route path="/user/summary" element={<UserAssets />} />
        <Route path="/user/:user-id/inventory/:inventory-id/summary-confirmation" element={<InventorySummaryConfirmation />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/accountant-panel" element={<AccountantPanel />} />
        <Route path="/user-management" element={<UserPanelList />} />
        <Route path="/user-management/create" element={<UserCreate />} />
        <Route path="/user-management/:id" element={<UserEdit />} />
        <Route path="/fixed-asset-management" element={<FixedAssetPanelList />} />
        <Route path="/fixed-asset-management/create" element={<FixedAssetCreate />} />
        <Route path="/fixed-asset-management/:id" element={<FixedAssetEdit />} />
        <Route path="/inventory-management" element={<InventoryPanel />} />
        <Route path="/inventory-management/create" element={<InventoryCreate />} />
        <Route path="/inventory-management/:id" element={<InventoryEdit />} />
      </Routes>
    </Wrapper>
  );
};

const UnauthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login-reset-password" element={<ResetPassword />} />
        <Route path="/auth/login-reset-password-confirmation" element={<ResetPasswordConfirmation />} />
        {/* KOMPONENT DO DOKONCZENIA: */}
        <Route path="/auth/login-reset-password-form" element={<ResetPasswordForm />} />
      </Routes>
    </Wrapper>
  );
};

export const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};
