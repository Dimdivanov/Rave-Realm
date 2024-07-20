import { useState, useEffect } from 'react';

const TICKET_URL = 'http://localhost:3030/jsonstore/tickets';

function getLimitedTickets(tickets) {
    const limit = 8;
    return tickets.slice(0, limit);
}

export default function GetTickets() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(TICKET_URL);
            const results = await response.json();
            const data = Object.values(results);

            setTickets(data);
        })();
    }, []);

    return (
        <>
            <section className="padding bg-tickets">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold mb-6">Get Tickets</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Ticket Card */}
                        {tickets.length > 0 ? (
                            getLimitedTickets(tickets).map((ticket) => (
                                <div
                                    key={ticket._id}
                                    className="bg-black rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between"
                                >
                                    <div className="text-white">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="bg-yellow-500 p-2 rounded-full">
                                                <img
                                                    src="src/assets/icons/ticket.ico"
                                                    alt="Ticket Icon"
                                                    className="w-6 h-6"
                                                />
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-bold mb-2">
                                            {ticket.name}
                                        </h2>
                                        <p className="text-white">Starting at:</p>
                                        <p className="text-2xl font-bold">
                                            {ticket.price} BGN
                                        </p>
                                    </div>
                                    {/* edit this button to put in cart */}
                                    <a
                                        href="/tickets/1"
                                        className="mt-4 inline-block bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400"
                                    >
                                        Get Now
                                    </a>
                                </div>
                            ))
                        ) : (
                            <div className="content-center">
                                <h3 className="text-2xl font-bold tracking-tight text-black sm:text-6xl">
                                    No tickets found.
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
