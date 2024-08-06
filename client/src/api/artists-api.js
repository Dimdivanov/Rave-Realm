import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/artists';

const getAll = async () => {
    const result = await request.get(BASE_URL);
    const artists = Object.values(result);

    return artists;
};


const getOne = (artistId) => request.get(`${BASE_URL}/${artistId}`);

const create = (artistData) => request.post(`${BASE_URL}`, artistData);

const remove = (artistId) => request.del(`${BASE_URL}/${artistId}`);

const update = (artistId, artistData) =>
    request.put(`${BASE_URL}/${artistId}`, artistData);

const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: `_createdOn desc`,
        pageSize: 8,
    });

    const res = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);
    const result = Object.values(res);
    return result;
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
