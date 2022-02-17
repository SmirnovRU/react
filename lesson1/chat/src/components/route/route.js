import { Navigate } from "react-router";

export function PublickRoute({ isAuth, to = "/", children }) {
  return !isAuth ? children : <Navigate to={to} replace />;
}

export function PrivateRoute({ isAuth, to = "/", children }) {
  return !!isAuth ? children : <Navigate to={to} replace />;
}
