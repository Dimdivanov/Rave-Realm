import purchaseAPI from "../api/purchase-api"

export default function useCreatePurchase() {
    const createHandler = (ticketId, purchasedBy) => {
        purchaseAPI.create(ticketId, purchasedBy);
    }

    return createHandler;
}