import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import ModalRemove from '../../modal/ModalRemove';
import Spinner from '../../common/spinner/Spinner';

import { AuthContext } from '../../../contexts/AuthContext';
import { SpinnerContext } from '../../../contexts/SpinnerContext';
import { useGetOneTicket } from '../../../hooks/useTickets';
import ticketAPI from '../../../api/tickets-api';

export default function TicketDetails() {
    const { ticketId } = useParams();
    const [ticketDetails] = useGetOneTicket(ticketId);
    const [showModalRemove, setShowModalRemove] = useState(false);
    const navigate = useNavigate();

    const { userId } = useContext(AuthContext);
    const isOwner = userId === ticketDetails._ownerId;

    const { isLoading, setIsLoading } = useContext(SpinnerContext);

    const ticketDelClickHandler = () => {
        setShowModalRemove(true);
    };

    const onDeleteClickHandler = async () => {
        setShowModalRemove(false);
        setIsLoading(true);
        try {
            await ticketAPI.remove(ticketId);
            navigate('/get-tickets');
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    const modalRemoveCloseHandler = () => {
        setShowModalRemove(false);
    };

    return (
        <>
            {isLoading && <Spinner />} {/* Show spinner based on isLoading state */}
            {showModalRemove && (
                <ModalRemove
                    onClose={modalRemoveCloseHandler}
                    onDeleteClick={onDeleteClickHandler}
                />
            )}
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
                                <button
                                    onClick={ticketDelClickHandler}
                                    className="px-5 py-2 bg-red-500 text-white font-medium rounded-full"
                                >
                                    Delete
                                </button>
                                <button className="px-5 py-2 bg-green-500 text-white font-medium rounded-full">
                                    Buy
                                </button>
                            </div>
                        ) : (
                            <div className="mt-6 flex space-x-4">
                                {isOwner ? (
                                    ''
                                ) : (
                                    <button className="px-5 py-2 bg-green-500 text-white font-medium rounded-full">
                                        Buy
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
