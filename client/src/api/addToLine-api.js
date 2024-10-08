import * as request from './requester';

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/lineup`;

const create = (artistId, addedToLine) => {
    try {
        request.post(BASE_URL, { artistId, addedToLine });
    } catch (err) {
        console.error('Error fetching create', err);
        throw err;
    }
};

const getAll = async (email) => {
    try {
        const params = new URLSearchParams({
            where: `addedToLine="${email}"`,
        });
        const response = await request.get(`${BASE_URL}?${params.toString()}`);
        return response;
    } catch (err) {
        console.error('Error fetching getAllToLine:', err);
        throw err;
    }
};

const remove = async (artistId) => {
    try {
        await request.del(`${BASE_URL}/addedToLine/${artistId}`);
    } catch (err) {
        console.error('Error feching remove', err);
        throw err;
    }
};

const addedToLineAPI = {
    create,
    getAll,
    remove,
};

export default addedToLineAPI;
