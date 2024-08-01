import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/stages';

const getAll = async () => {
    const result = await request.get(BASE_URL);
    const stages = Object.values(result);
    return stages;
};

const getOne = (stageId) => request.get(`${BASE_URL}/${stageId}`);

const create = (stageData) => request.post(`${BASE_URL}`, stageData) 

const stageAPI = {
    getAll,
    getOne,
    create
};

export default stageAPI;
