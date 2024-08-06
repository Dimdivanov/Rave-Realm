import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/purchased';


const create = (ticketId, purchasedBy) => request.post(BASE_URL, { ticketId, purchasedBy });

const getAll = (ticketId) => {
    const params = new URLSearchParams({
        where: `ticketId="${ticketId}"`,
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
