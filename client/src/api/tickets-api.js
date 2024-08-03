import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/tickets';

const getAll = async () => {
    const result = await request.get(BASE_URL);
    const tickets = Object.values(result);
    return tickets;
};

const getAllMatching = async (match) => {
    const result = await request.get(BASE_URL);
    const tickets = Object.values(result).filter((ticket) =>
        ticket.type === match ? true : false
    );

    return tickets;
};

const getOne = (ticketId) => request.get(`${BASE_URL}/${ticketId}`);

const create = (ticketData) => request.post(`${BASE_URL}`, ticketData);

const remove = (ticketId) => request.del(`${BASE_URL}/${ticketId}`);

const ticketAPI = {
    getAll,
    getOne,
    create,
    remove,
    getAllMatching,
};

export default ticketAPI;
