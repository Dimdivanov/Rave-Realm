import { useEffect, useState } from 'react';
import ticketAPI from '../api/tickets-api';

export function useGetAllTickets() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await ticketAPI.getAll();
                setTickets(result);
            } catch (err) {
                console.error('Error to useGetAllTickets', err);
                throw err;
            }
        })();
    }, []);

    return tickets;
}

export function useGetAllMatching(match) {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await ticketAPI.getAllMatching(match);
                setTickets(result);
            } catch (err) {
                console.error('Error to useGetAllMatching', err);
                throw err;
            }
        })();
    }, []);

    return tickets;
}
export function useGetOneTicket(ticketId) {
    const [ticketDetails, setTicketDetails] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await ticketAPI.getOne(ticketId);
                setTicketDetails(result);
            } catch (error) {
                console.error('Error to useGetOneTicket', err);
                throw err;
            }
        })();
    }, [ticketId]);

    return [ticketDetails];
}

export function useCreateTicket() {
    const ticketHandler = (ticketData) => {
        try {
            ticketAPI.create(ticketData);
        } catch (error) {
            console.error('Error in useCreateTicket', err);
            throw err;
        }
    };

    return ticketHandler;
}

export function useDeleteTicket() {}
