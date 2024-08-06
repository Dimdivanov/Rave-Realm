import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/lineup';


const create = (artistId, addedToLine) =>
    request.post(BASE_URL, { artistId, addedToLine });

const getAll = (artistId) => {
    const params = new URLSearchParams({
        where: `artistId="${artistId}"`,
        load: `author=_ownerId:users`,
    });
    return request.get(`${BASE_URL}?${params.toString()}`);
};

const remove = (artistId) => request.del(`${BASE_URL}/${artistId}`);

const addedToLineAPI = {
    create,
    getAll,
    remove,
};

export default addedToLineAPI;
