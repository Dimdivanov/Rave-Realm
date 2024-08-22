import * as request from './requester';

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/tickets`;

const getAll = async () => {
    try {
        const result = await request.get(BASE_URL);
        const tickets = Object.values(result);
        return tickets;
    } catch (err) {
        console.error('Error fetching getAll:', err);
        throw err;
    }
};

/* this is basically a search */
const getAllMatching = async (match) => {
    try {
        const result = await request.get(BASE_URL);
        const tickets = Object.values(result).filter((ticket) =>
            ticket.type === match ? true : false
        );

        return tickets;
    } catch (err) {
        console.error('Error fetching getAllMatching:', err);
        throw err;
    }
};

const getOne = async (ticketId) => {
    try {
        const result = await request.get(`${BASE_URL}/${ticketId}`);
        return result;
    } catch (err) {
        console.error('Error fetching getOne:', err);
        throw err;
    }
};

const create = async (ticketData) => {
    try {
        const result = await request.post(`${BASE_URL}`, ticketData);
        return result;
    } catch (err) {
        console.error('Error fetching create:', err);
        throw err;
    }
};

const remove = async (ticketId) => {
    try {
        const result = await request.del(`${BASE_URL}/${ticketId}`);
        return result;
    } catch (err) {
        console.error('Error fetching remove:', err);
        throw err;
    }
};

const update = async (ticketId, ticketData) => {
    try {
        const result = await request.put(`${BASE_URL}/${ticketId}`, ticketData);
        return result;
    } catch (err) {
        console.error('Error fetching update:', err);
        throw err;
    }
};

const ticketAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
    getAllMatching,
};

export default ticketAPI;
