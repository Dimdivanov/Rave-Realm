import { useGetAllMatching } from '../../../hooks/useTickets';
import TicketListCard from './ticket-list-card/TicketListCard';

const TicketGrid = ({ tickets }) => (
    <div className="mt-6 border-b pb-4 mb-4">
        {tickets.length === 0 ? (
            <div className="flex items-center justify-center h-64 text-center text-white">
                <span className="text-xl font-semibold">No tickets yet</span>
            </div>
        ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {tickets.map((ticket) => (
                    <TicketListCard key={ticket._id} {...ticket} />
                ))}
            </div>
        )}
    </div>
);

export default function TicketsList() {
    const ticketVIP = useGetAllMatching('VIP');
    const ticketGA = useGetAllMatching('GA');
    const ticketODP = useGetAllMatching('ODP');


    return (
        <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 bg-black relative bg-gradient-to-b from-purple-800 to-rgb-400">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-white text-center">
                    Get Your Tickets
                </h1>
                <TicketGrid tickets={ticketGA} />
                <TicketGrid tickets={ticketODP} />
                <TicketGrid tickets={ticketVIP} />
            </div>
        </div>
    );
}
