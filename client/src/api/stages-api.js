import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/stages';

const getAll = async () => {
    try {
        const result = await request.get(BASE_URL);
        const stages = Object.values(result);
        return stages;
    } catch (err) {
        console.error('Error fetching getAll:', err);
        throw err;
    }
};

const getOne = async (stageId) => {
    try {
        const result = await request.get(`${BASE_URL}/${stageId}`);
        return result;
    } catch (err) {
        console.error('Error fetching getOne:', err);
        throw err;
    }
};

const create = async (stageData) => {
    try {
        const result = await request.post(`${BASE_URL}`, stageData);
        return result;
    } catch (err) {
        console.error('Error fetching create:', err);
        throw err;
    }
};

const remove = async (stageId) => {
    try {
        const result = await request.del(`${BASE_URL}/${stageId}`);
        return result;
    } catch (err) {
        console.error('Error fetching remove:', err);
        throw err;
    }
};

const update = async (stageId, stageData) => {
    try {
        const result = await request.put(`${BASE_URL}/${stageId}`, stageData);
        return result;
    } catch (err) {
        console.error('Error fetching update:', err);
        throw err;
    }
};

const stageAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
};

export default stageAPI;
