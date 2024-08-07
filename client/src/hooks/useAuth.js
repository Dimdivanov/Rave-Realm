import { useContext } from 'react';
import { login, register, logout } from '../api/auth-api';
import { AuthContext } from '../contexts/AuthContext';

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        try {
            const { password: _, ...authData } = await login(email, password);
            changeAuthState(authData);
            return authData;
        } catch (err) {
            console.error('Error during login:', err);
            throw err;
        }
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (email, password) => {
        try {
            const { password: _, ...authData } = await register(email, password);
            changeAuthState(authData);
            return authData;
        } catch (err) {
            console.error('Error during registration:', err);
            throw err;
        }
    };

    return registerHandler;
};

export const useLogout = () => {
    const { logout: localLogout } = useContext(AuthContext);

    const logoutHandler = async () => {
        try {
            await logout();
            localLogout();
        } catch (err) {
            console.error('Error during logout:', err);
            throw err;
        }
    };

    return logoutHandler;
};
