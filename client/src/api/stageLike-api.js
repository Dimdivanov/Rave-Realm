import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/likedBy';

const create = async (stageId) => {
    try {
        const result = await request.post(BASE_URL, { stageId });
        return result;
    } catch (err) {
        console.error('Error fetching create:', err);
        throw err;
    }
};

const getAll = async (stageId) => {
    try {
        const params = new URLSearchParams({
            where: `stageId="${stageId}"`,
            load: `author=_ownerId:users`,
        });

        const result = await request.get(`${BASE_URL}?${params.toString()}`);
        return result;
    } catch (err) {
        console.error('Error fetching getAll:', err);
        throw err;
    }
};

const remove = async (likeId) => {
    try {
        const result = await request.del(`${BASE_URL}/${likeId}`);
        return result;
    } catch (err) {
        console.error('Error fetching remove:', err);
        throw err;
    }
};

const likedApi = {
    create,
    getAll,
    remove,
};

export default likedApi;
