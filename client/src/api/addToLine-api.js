import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/lineup';

const create = (artistId, addedToLine) =>
    request.post(BASE_URL, { artistId, addedToLine });

// finds all lined up
const getAll = async (email) => {
    const params = new URLSearchParams({
        where: `addedToLine="${email}"`,
    });

    const response = await request.get(`${BASE_URL}?${params.toString()}`);
  
    return response;
};


const remove = (artistId) => request.del(`${BASE_URL}/${artistId}`);

const addedToLineAPI = {
    create,
    getAll,
    remove,
};

export default addedToLineAPI;
