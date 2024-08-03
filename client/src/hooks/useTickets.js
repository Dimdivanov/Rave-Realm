import { useEffect, useState } from 'react';
import ticketAPI from '../api/tickets-api';

export function useGetAllTickets() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ticketAPI.getAll();
            setTickets(result);
        })();
    }, []);

    return tickets;
}

export function useGetAllMatching(match) {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await ticketAPI.getAllMatching(match);
            setTickets(result);
        })();
    }, []);

    return tickets;
}
export function useGetOneTicket(ticketId) {
    const [ticketDetails, setTicketDetails] = useState({});

    useEffect(() => {
        (async () => {
            const result = await ticketAPI.getOne(ticketId);
            setTicketDetails(result);
        })();
    }, [ticketId]);

    return [ticketDetails];
}

export function useCreateTicket() {
    const ticketHandler = (ticketData) => ticketAPI.create(ticketData);

    return ticketHandler;
}

export function useDeleteTicket() {
    
}