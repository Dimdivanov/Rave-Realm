import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/addedToLine';


const create = (artistId, addedToLine) =>
    request.post(BASE_URL, { artistId, addedToLine });

const getAll = (artistId) => {
    const params = new URLSearchParams({
        where: `ticketId="${artistId}"`,
        load: `author=_ownerId:users`,
    });
    return request.get(`${BASE_URL}?${params.toString()}`)
};

const remove = (ticketId) => request.del(`${BASE_URL}/${ticketId}`);

const purchaseAPI = {
    create,
    getAll,
    remove,
};

export default purchaseAPI;
