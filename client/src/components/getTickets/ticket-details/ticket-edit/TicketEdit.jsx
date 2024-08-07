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
        <section
            id="edit-ticket"
            className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-8"
        >
            <div className="w-full max-w-xl mx-auto p-4 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                    Edit Ticket
                </h2>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="ticket-name" className="text-white text-sm font-medium">
                            Ticket Name
                        </label>
                        <input
                            type="text"
                            name="ticketName"
                            id="ticket-name"
                            placeholder="Ticket Name"
                            value={values.ticketName || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="ticket-image-url" className="text-white text-sm font-medium">
                            Ticket Image URL
                        </label>
                        <input
                            type="text"
                            name="ticketImgUrl"
                            id="ticket-image-url"
                            placeholder="Ticket Image URL"
                            value={values.ticketImgUrl || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="description" className="text-white text-sm font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Description"
                            rows={4}
                            value={values.description || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="type" className="text-white text-sm font-medium">
                            Ticket Type
                        </label>
                        <input
                            type="text"
                            name="type"
                            id="type"
                            placeholder="Ticket Type"
                            value={values.type || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="price" className="text-white text-sm font-medium">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Price"
                            value={values.price || ''}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white placeholder-gray-300 text-sm"
                        />
                    </div>
                    <div className="flex justify-between gap-4">
                        <button
                            type="button"
                            onClick={() => navigate(`/ticket/details/${values._id}`)}
                            className="flex items-center gap-2 w-32 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Back
                        </button>
                        <button
                            type="submit"
                            className="w-32 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm"
                        >
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
