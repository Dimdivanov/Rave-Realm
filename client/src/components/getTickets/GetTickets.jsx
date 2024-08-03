import { useGetAllTickets } from '../../hooks/useTickets';

import TicketCard from './ticket-card/TicketCard';
/* conditions */
function getLimitedTickets(tickets) {
    const limit = 8;
    return tickets.slice(0, limit);
}

export default function GetTickets() {
    const tickets = useGetAllTickets();

    return (
        <>
            <section className="padding bg-tickets">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-6">Get Tickets</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Ticket Card */}
                        {tickets.length > 0 ? (
                            getLimitedTickets(tickets).map((ticket) => (
                                <TicketCard key={ticket._id} {...ticket} />
                            ))
                        ) : (
                            <div className="content-center">
                                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-6xl">
                                    No Tickets found.
                                </h3>
                            </div>
                        )}

                        {/* Repeat the above block for each ticket */}
                    </div>
                </div>
            </section>
        </>
    );
}
