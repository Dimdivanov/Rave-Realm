import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/artists';

const getAll = (artistName) => {
    const params = new URLSearchParams({
        where: `artistName="${artistName}"`,
        load: `author=_ownerId:users`,
    });

    const res = request.get(`${BASE_URL}?${params.toString()}`);
    console.log(res);
};

const searchAPI = {
    getAll,
};

export default searchAPI;
