import { useParams, Link } from 'react-router-dom';

import { useGetOneTicket } from '../../../hooks/useTickets';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';

export default function TicketDetails() {
    const { ticketId } = useParams();
    const [ticketDetails] = useGetOneTicket(ticketId);

    const { userId } = useContext(AuthContext);
    //consider moving it ?
    const isOwner = userId === ticketDetails._ownerId;

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10">
                <div className="w-full max-w-4xl p-24 bg-gray-900 bg-opacity-80 rounded-lg shadow-md backdrop-blur-md flex flex-col lg:flex-row">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-white w-full lg:hidden">
                        {ticketDetails.ticketName}
                    </h2>
                    <div className="w-full lg:w-1/2">
                        <img
                            src={ticketDetails.ticketImgUrl}
                            alt="Ticket Image"
                            className="rounded-lg w-full h-full object-cover lg:max-h-96"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
                        <h2 className="text-3xl font-semibold mb-6 text-white hidden lg:block">
                            {ticketDetails.ticketName}
                        </h2>
                        <p className="text-sm text-gray-400">
                            Type: {ticketDetails.type}
                        </p>
                        <p className="text-sm text-gray-400">
                            Price: {ticketDetails.price} BGN
                        </p>
                        <p className="mt-4 text-gray-300 break-words">
                            {ticketDetails.description}
                        </p>
                        {isOwner ? (
                            <div className="mt-6 flex space-x-4">
                                <Link
                                    to={`/ticket/edit/${ticketDetails._id}`}
                                    className="px-5 py-2 bg-yellow-500 text-white font-medium rounded-full"
                                >
                                    Edit
                                </Link>
                                <button className="px-5 py-2 bg-red-500 text-white font-medium rounded-full">
                                    Delete
                                </button>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
