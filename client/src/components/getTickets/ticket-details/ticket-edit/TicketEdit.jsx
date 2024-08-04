import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useForm } from '../../../../hooks/useForm';
import { useGetOneTicket } from '../../../../hooks/useTickets';
import ticketAPI from '../../../../api/tickets-api';

const initialValues = {
    ticketName: '',
    ticketImgUrl: '',
    description: '',
    type: '',
    price: '',
};

export default function TicketEdit() {
    const navigate = useNavigate();
    const { ticketId } = useParams();
    const { values, changeHandler, submitHandler, setValues } = useForm(
        initialValues,
        async (updatedValues) => {
            try {
                await ticketAPI.update(ticketId, updatedValues);
                navigate(`/ticket/details/${ticketId}`);
            } catch (err) {
                console.error('Failed to update ticket:', err.message);
            }
        }
    );
    const [ticketDetails] = useGetOneTicket(ticketId);

    useEffect(() => {
        if (ticketDetails) {
            setValues(ticketDetails);
        }
    }, [ticketDetails, setValues]);

    return (
        <>
            <section
                id="edit-ticket"
                className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
            >
                <div className="w-full max-w-3xl mx-auto p-6 mt-28 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                        Edit Ticket
                    </h2>
                    <form onSubmit={submitHandler} className="space-y-4">
                        <input
                            type="text"
                            name="ticketName"
                            id="ticket-name"
                            placeholder="Ticket Name"
                            value={values.ticketName || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="ticketImgUrl"
                            id="ticket-image-url"
                            placeholder="Ticket Image URL"
                            value={values.ticketImgUrl || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Description"
                            rows={5}
                            value={values.description || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="text"
                            name="type"
                            id="type"
                            placeholder="Ticket Type"
                            value={values.type || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Price"
                            value={values.price || ''}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                        />
                        <button
                            onClick={() => navigate(`/ticket/details/${values._id}`)}
                            className="ml-11 w-40 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="ml-80 w-40 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Edit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
