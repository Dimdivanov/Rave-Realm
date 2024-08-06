import React, { forwardRef } from 'react';

const BASE_URL = '/src/assets/images/ticket';

const ticketImgUrlOptions = {
    'General Access': `${BASE_URL}/GA.png`,
    VIP: `${BASE_URL}/VIP.png`,
    'One Day Pass': `${BASE_URL}/ODP.png`,
};

const TicketCreateForm = forwardRef(
    ({ values, changeHandler, submitHandler, error }, ref) => {
        return (
            <div className="form w-full max-w-3xl mx-auto p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-3xl font-semibold mb-6 text-center text-white">
                    Create Ticket
                </h2>
                <form onSubmit={submitHandler} className="create-form space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="ticketName" className="text-white">
                            Ticket Name
                        </label>
                        <input
                            type="text"
                            name="ticketName"
                            id="ticketName"
                            ref={ref}
                            value={values.ticketName}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="ticket-image" className="text-white">
                            Ticket Image
                        </label>
                        <select
                            name="ticketImgUrl"
                            id="ticket-image"
                            value={values.ticketImgUrl}
                            onChange={changeHandler}
                            className="w-full p-3 bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-black text-white"
                        >
                            <option value="">Select Ticket Image</option>
                            {Object.entries(ticketImgUrlOptions).map(([key, url]) => (
                                <option key={key} value={url}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="ticket-description" className="text-white">
                            Description
                        </label>
                        <textarea
                            id="ticket-description"
                            name="description"
                            rows={5}
                            value={values.description}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="ticket-type" className="text-white">
                            Ticket Type
                        </label>
                        <input
                            type="text"
                            name="type"
                            id="ticket-type"
                            value={values.type}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="ticket-price" className="text-white">
                            Ticket Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="ticket-price"
                            value={values.price}
                            onChange={changeHandler}
                            className="w-full p-3 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Create Ticket
                    </button>
                </form>

                {error && (
                    <p className="mt-6 text-center text-lg text-red-600">{error}</p>
                )}
            </div>
        );
    }
);

export default TicketCreateForm;
