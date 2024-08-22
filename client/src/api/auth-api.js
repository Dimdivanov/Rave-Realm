import * as request from './requester';

const BASE_URL = 'http://localhost:5000/first-project-test-ea6ec/us-central1/api/users';

export const login = async (email, password) => {
    try {
        const response = await request.post(`${BASE_URL}/login`, { email, password });
        return response;
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
};

export const register = async (email, password) => {
    try {
        const response = await request.post(`${BASE_URL}/register`, { email, password });
        return response;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error; 
    }
};

export const logout = async () => {
    try {
        const response = await request.get(`${BASE_URL}/logout`);
        return response;
    } catch (error) {
        console.error('Error during logout:', error);
        throw error; 
    }
};
