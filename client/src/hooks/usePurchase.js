import { useEffect, useState } from 'react';
import purchaseAPI from '../api/purchase-api';

export function useCreatePurchase() {
    const createHandler = (ticketId, purchasedBy) => {
        try {
            purchaseAPI.create(ticketId, purchasedBy);
        } catch (error) {
            console.error('Error to useCreatePurchase', err);
            throw err;
        }
    };

    return createHandler;
}

export function useGetAllPurchase(ticketId) {
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await purchaseAPI.getAllPurchased(ticketId);
                setPurchase(result);
            } catch (err) {
                console.error('Error in useGetAllPurchase');
                throw err;
            }
        })();
    }, []);

    return [purchase, setPurchase];
}
