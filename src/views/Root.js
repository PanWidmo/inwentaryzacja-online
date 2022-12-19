import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';
import { Login } from 'views/auth/Login/Login';
import { AdminPanel } from 'views/role-pages/AdminPanel/AdminPanel';
import { UserList } from 'views/user/UserList/UserList';
import { UserCreate } from 'views/user/UserCreate/UserCreate';
import { UserEdit } from 'views/user/UserEdit/UserEdit';
import { FixedAssetList } from 'views/fixed-asset/FixedAssetList/FixedAssetList';
import { FixedAssetCreate } from 'views/fixed-asset/FixedAssetCreate/FixedAssetCreate';
import { InventoryCreate } from 'views/inventory/InventoryCreate/InventoryCreate';
import { FixedAssetEdit } from './fixed-asset/FixedAssetEdit/FixedAssetEdit';
import { AccountantPanel } from './role-pages/AccountantPanel/AccountantPanel';
import { InventoryList } from 'views/inventory/InventoryList/InventoryList';
import { InventoryEdit } from './inventory/InventoryEdit/InventoryEdit';
import { UserRoleSelect } from './role-pages/UserRoleSelect/UserRoleSelect';
import { UserFixedAsset } from 'views/user/UserFixedAsset/UserFixedAsset';
import { RequireAuth } from 'components/molecules/RequireAuth/RequireAuth';
import { Unauthorized } from 'views/auth/Unauthorized/Unauthorized';
import { ErrorPage } from 'views/ErrorPage/ErrorPage';
import { IssuePage } from 'views/IssuePage/IssuePage';
import { UserFixedAssetConfirm } from 'views/user/UserFixedAssetConfirm/UserFixedAssetConfirm';

const ROLES = {
  User: 1,
  Accountant: 2,
  Admin: 3,
};

export const Root = () => {
  return (
    <Wrapper>
      <Routes>
        {/*public routes*/}
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/issue" element={<IssuePage />} />
        {/*protected routes*/}
        <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Accountant, ROLES.Admin]} />}>
          <Route path="/" element={<Navigate to="/select-user-role" />} />
          <Route path="/select-user-role" element={<UserRoleSelect />} />
          <Route path="/user/fixed-asset" element={<UserFixedAsset />} />
          <Route path="/user/fixed-asset/confirm" element={<UserFixedAssetConfirm />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/user-management" element={<UserList />} />
          <Route path="/user-management/create" element={<UserCreate />} />
          <Route path="/user-management/:id" element={<UserEdit />} />
          <Route path="/fixed-asset-management" element={<FixedAssetList />} />
          <Route path="/fixed-asset-management/create" element={<FixedAssetCreate />} />
          <Route path="/fixed-asset-management/:id" element={<FixedAssetEdit />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Accountant]} />}>
          <Route path="/accountant-panel" element={<AccountantPanel />} />
          <Route path="/inventory-management" element={<InventoryList />} />
          <Route path="/inventory-management/create" element={<InventoryCreate />} />
          <Route path="/inventory-management/:id" element={<InventoryEdit />} />
        </Route>
        {/*catch all*/}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
};
