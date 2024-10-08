import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export  function AuthenticatorGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export  function AuthRedirectGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <Navigate to="/"/> : <Outlet />;
}
