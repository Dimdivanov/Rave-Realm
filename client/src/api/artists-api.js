import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/artists';

const getAll = async () => {
    const result = await request.get(BASE_URL);
    const artists = Object.values(result);
    return artists;
};

const getOne = (artistId) => request.get(`${BASE_URL}/${artistId}`);

const artistAPI = {
    getAll,
    getOne,
};

export default artistAPI;
