import axios from '../lib/axiosInstance'; // Central axios configuration
import { handleApiError } from './utils';

export const signInUser = async (email, password) => {
    try {
        const response = await axios.post('/signin', { email, password });
        return response.data; // Return only the required data
    } catch (error) {
        handleApiError(error); // Graceful error handling
        throw error; // Rethrow for UI to handle
    }
};

export const signUpUser = async (userData) => {
    try {
        const response = await axios.post('/signup', userData);
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};


export const signOutUser = async () => {
    try {
        await axios.get('/signout');
        return true;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
}