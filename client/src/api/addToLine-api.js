import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/lineup';

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

const remove = (artistId) => {
    try {
        request.del(`${BASE_URL}/${artistId}`);
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
