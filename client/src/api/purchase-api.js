import * as request from './requester';

const BASE_URL = 'http://localhost:5000/first-project-test-ea6ec/us-central1/api/data/purchased';

const create = async (ticketId, purchasedBy) => {
    try {
        const result = await request.post(BASE_URL, { ticketId, purchasedBy });
        return result;
    } catch (err) {
        console.error('Error fetching create:', err);
        throw err;
    }
};

const getAll = async (ticketId) => {
    try {
        const params = new URLSearchParams({
            where: `ticketId="${ticketId}"`,
            load: `author=_ownerId:users`,
        });

        const result = await request.get(`${BASE_URL}?${params.toString()}`);
        return result;
    } catch (err) {
        console.error('Error fetching getAll:', err);
        throw err;
    }
};

const getAllPurchased = async (ticketId) => {
    try {
        const params = new URLSearchParams({
            where: `ticketId="${ticketId}"`,
        });

        const result = await request.get(`${BASE_URL}?${params.toString()}`);
        return result;
    } catch (err) {
        console.error('Error fetching getAllPurchased:', err);
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

const purchaseAPI = {
    create,
    getAll,
    remove,
    getAllPurchased
};

export default purchaseAPI;
