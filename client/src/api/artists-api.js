import * as request from './requester';

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/artists`;

const getAll = async () => {
    try {
        const result = await request.get(BASE_URL);
        const artists = Object.values(result);
        return artists;
    } catch (err) {
        console.error('Error fetching getAll:', err);
        throw err;
    }
};

const getOne = async (artistId) => {
    try {
        const result = await request.get(`${BASE_URL}/${artistId}`);
        return result;
    } catch (err) {
        console.error('Error fetching getOne:', err);
        throw err;
    }
};

const create = async (artistData) => {
    try {
        const result = await request.post(`${BASE_URL}`, artistData);
        return result;
    } catch (err) {
        console.error('Error fetching create:', err);
        throw err;
    }
};

const remove = async (artistId) => {
    try {
        const result = await request.del(`${BASE_URL}/${artistId}`);
        return result;
    } catch (err) {
        console.error('Error fetching remove:', err);
        throw err;
    }
};

const update = async (artistId, artistData) => {
    try {
        const result = await request.put(`${BASE_URL}/${artistId}`, artistData);
        return result;
    } catch (err) {
        console.error('Error fetching update:', err);
        throw err;
    }
};

const getLatest = async () => {
    try {
        const urlSearchParams = new URLSearchParams({
            sortBy: `_createdOn desc`,
            pageSize: 8,
        });

        const res = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);
        const result = Object.values(res);
        return result;
    } catch (err) {
        console.error('Error fetching getLatest:', err);
        throw err;
    }
};

const artistAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
    getLatest,
};

export default artistAPI;
