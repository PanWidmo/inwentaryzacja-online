import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';

import { Login } from 'views/auth/Login';
import { ResetPassword } from 'views/auth/ResetPassword';
import { ResetPasswordConfirmation } from 'views/auth/ResetPasswordConfirmation';
import { ResetPasswordForm } from 'views/auth/ResetPasswordForm';
import { InventorySummaryConfirmation } from 'views/inventory/InventorySummaryConfirmation';
import { AdminPanel } from 'views/roles pages/AdminPanel';
import { UserPanelList } from 'views/user/UserPanelList';
import { UserCreate } from 'views/user/UserCreate';
import { UserEdit } from 'views/user/UserEdit';
import { FixedAssetPanelList } from 'views/fixed asset/FixedAssetPanel';
import { FixedAssetCreate } from 'views/fixed asset/FixedAssetCreate';
import { InventoryCreate } from 'views/inventory/InventoryCreate';

import NewInventoryView from 'components/organisms/NewInventoryView/NewInventoryView';

import { useAuth } from 'hooks/useAuth';

//working on FireBase but need to be change, so work on UnauthenticatedApp
const AuthenticatedApp = () => {
  return (
    <Wrapper>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/AdminPanel" />} />
        <Route path="/AdminPanelWithUsers" element={<AdminPanelWithUsers />} />
        <Route path="/UserEdit" element={<UserEdit />} />
        <Route path="/NewUserAdding" element={<NewUserAdding />} />
        <Route path="/AdminPanelFixedAssets" element={<AdminPanelFixedAssets />} />
        <Route path="/NewAssetsAdding" element={<NewAssetsAdding />} />
        <Route path="/CreateNewInventory" element={<CreateNewInventory />} />
        <Route path="/NewInventoryView" element={<NewInventoryView />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
      </Routes> */}
    </Wrapper>
  );
};

//!!! work on unauthenticated version
const UnauthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        {/* pages for unauth */}
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-confirmation" element={<ResetPasswordConfirmation />} />
        <Route path="/reset-password-form" element={<ResetPasswordForm />} />
        {/* pages that working on: */}
        {/* <Route path="/user/:user-id/inventory/:inventory-id" element={< />} /> */}
        {/* <Route path="/user/:user-id/inventory/:inventory-id/summary" element={< />} /> */}
        <Route path="/user/:user-id/inventory/:inventory-id/summary-confirmation" element={<InventorySummaryConfirmation />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        {/* <Route path="/accountant-panel" element={< />} /> */}
        <Route path="/user-management" element={<UserPanelList />} />
        <Route path="/user-management/create" element={<UserCreate />} />
        <Route path="/user-management/:id" element={<UserEdit />} />
        <Route path="/fixed-asset-management" element={<FixedAssetPanelList />} />
        <Route path="/fixed-asset-management/create" element={<FixedAssetCreate />} />
        {/* <Route path="/fixed-asset-management/:id" element={< />} /> */}
        {/* <Route path="/inventory-management" element={< />} /> */}
        <Route path="/inventory-management/create" element={<InventoryCreate />} />
        {/* <Route path="/inventory-management/:id" element={< />} /> */}
      </Routes>
    </Wrapper>
  );
};

const Root = () => {
  const auth = useAuth();

  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
