import { useNavigate } from 'react-router-dom';

import { useCreateTicket } from '../../../hooks/useTickets';
import { useForm } from '../../../hooks/useForm';
import useFocusForm from '../../../hooks/useFocusForm';


const initialValues = {
    _id: '',
    ticketName: '',
    ticketImgUrl: '',
    type: '',
    price: '',
    description: '',
};

/* Try to reform here */
const BASE_URL = '/src/assets/images/ticket';

const ticketImgUrlOptions = {
    'General Access': `${BASE_URL}/GA.png`,
    VIP: `${BASE_URL}/VIP.png`,
    'One Day Pass': `${BASE_URL}/ODP.png`,
};

export default function TicketCreate() {
    const navigate = useNavigate();
    const createTicket = useCreateTicket();
    const ref = useFocusForm();

    const createHandler = async (values) => {
        try {
            await createTicket(values);
            navigate('/get-tickets');
        } catch (err) {
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        createHandler,
    );

    return (
        <section
            id="create"
            className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
        >
            <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                    Create Ticket
                </h2>
                <form onSubmit={submitHandler} className="create-form space-y-4">
                    <input
                        type="text"
                        name="ticketName"
                        id="ticketName"
                        placeholder="Ticket Name"
                        ref={ref}
                        value={values.ticketName}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <select
                        name="ticketImgUrl"
                        id="ticket-image"
                        value={values.ticketImgUrl}
                        onChange={changeHandler}
                        className="w-full p-3 bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black placeholder-gray-300"
                    >
                        <option>Select Ticket Image</option>
                        {Object.entries(ticketImgUrlOptions).map(([key, url]) => (
                            <option key={key} value={url}>
                                {key}
                            </option>
                        ))}
                    </select>
                    <textarea
                        id="ticket-description"
                        name="description"
                        placeholder="Description"
                        rows={5}
                        value={values.description}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="text"
                        name="type"
                        id="ticket-type"
                        placeholder="Type"
                        value={values.type}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <input
                        type="number"
                        name="price"
                        id="ticket-price"
                        placeholder="Price"
                        value={values.price}
                        onChange={changeHandler}
                        className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300"
                    />
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Create Ticket
                    </button>
                </form>
            </div>
        </section>
    );
}
