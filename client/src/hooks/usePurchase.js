import { useEffect, useState } from 'react';
import purchaseAPI from '../api/purchase-api';

export function useCreatePurchase() {
    const createHandler = (ticketId, purchasedBy) => {
        purchaseAPI.create(ticketId, purchasedBy);
    };

    return createHandler;
}

export function useGetAllPurchase(ticketId) {
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await purchaseAPI.getAllPurchased(ticketId);
            setPurchase(result);
        })();
    }, []);

    

    return [purchase, setPurchase];
}
