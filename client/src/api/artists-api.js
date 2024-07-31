import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/artists';

const getAll = async () => {
    const result = await request.get(BASE_URL);
    const artists = Object.values(result);
    return artists;
};

const getOne = (artistId) => request.get(`${BASE_URL}/${artistId}`);

const create = (artistData) => request.post(`${BASE_URL}`, artistData) 

const artistAPI = {
    getAll,
    getOne,
    create
};

export default artistAPI;
