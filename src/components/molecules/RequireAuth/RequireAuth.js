import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const roles = JSON.parse(localStorage.getItem('roles'));

  return roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : roles ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
