import { Link } from 'react-router-dom';

export default function TicketCard(ticket) {
    return (
        <>
            <div className="bg-black rounded-xl overflow-hidden shadow-lg p-6 flex flex-col justify-between">
                <div className="text-white">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-yellow-500 p-2 rounded-full">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2Fticket.ico?alt=media&token=169ff191-eb92-4785-8ba5-3922cf868351"
                                alt="Ticket Icon"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{ticket.ticketName}</h2>
                    <p className="text-white">Starting at:</p>
                    <p className="text-2xl font-bold">{ticket.price} BGN</p>
                </div>
                {/* edit this button to put in cart */}
                <Link
                    to={`/ticket/details/${ticket._id}`}
                    className="mt-4 inline-block bg-yellow-500 text-black py-2 px-4 rounded-full hover:bg-yellow-400"
                >
                    Get Now
                </Link>
            </div>
        </>
    );
}
