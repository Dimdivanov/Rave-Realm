import { useGetAllTickets } from '../../../hooks/useTickets';
import TicketListCard from './ticket-list-card/TicketListCard';

export default function TicketsList() {
    const tickets = useGetAllTickets();

    return (
        <>
            <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-white text-center">
                        Get Your Tickets
                    </h1>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {/* map ticketlistcard */}
                        {tickets.map((ticket) => (
                            <TicketListCard {...ticket} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
