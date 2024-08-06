import { useGetAllTickets } from '../../../hooks/useTickets';
import TicketListCard from './ticket-list-card/TicketListCard';

export default function TicketsList() {
    const tickets = useGetAllTickets();

    return (
        <section className="relative bg-black bg-gradient-to-b from-purple-800 to-rgb-400 min-h-screen pt-20">
            <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                        Get Your Tickets
                    </h2>
                    <p className="text-lg text-gray-300 mx-auto max-w-2xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor
                        fugit natus?
                    </p>
                </header>

                {/* Ticket List Section */}
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {tickets.map(ticket => (
                        <TicketListCard key={ticket._id} {...ticket} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
