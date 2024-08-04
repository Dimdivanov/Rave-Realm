import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/purchased';

const create = (ticketId, purchasedBy) => request.post(BASE_URL, ticketId, purchasedBy);

const getAll = (ticketId) => {
    const params = new URLSearchParams({
        where: `ticketId="${ticketId}"`,
        load: `author=_ownerId:users`,
    });
    return;
};

const purchaseAPI = {
    create,
    getAll,
};

export default purchaseAPI;
