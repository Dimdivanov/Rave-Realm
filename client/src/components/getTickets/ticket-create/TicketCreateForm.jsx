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
            <div className="form w-full max-w-xl mx-auto p-4 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md">
                <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                    Create Ticket
                </h2>
                <form onSubmit={submitHandler} className="create-form space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="ticketName" className="text-white text-sm">
                            Ticket Name
                        </label>
                        <input
                            type="text"
                            name="ticketName"
                            id="ticketName"
                            ref={ref}
                            value={values.ticketName}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="ticket-image" className="text-white text-sm">
                            Ticket Image
                        </label>
                        <select
                            name="ticketImgUrl"
                            id="ticket-image"
                            value={values.ticketImgUrl}
                            onChange={changeHandler}
                            className="w-full p-2 bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 bg-black text-white text-sm"
                        >
                            <option value="">Select Ticket Image</option>
                            {Object.entries(ticketImgUrlOptions).map(([key, url]) => (
                                <option key={key} value={url}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="ticket-description" className="text-white text-sm">
                            Description
                        </label>
                        <textarea
                            id="ticket-description"
                            name="description"
                            rows={4}
                            value={values.description}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="ticket-type" className="text-white text-sm">
                            Ticket Type
                        </label>
                        <input
                            type="text"
                            name="type"
                            id="ticket-type"
                            value={values.type}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white text-sm"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="ticket-price" className="text-white text-sm">
                            Ticket Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="ticket-price"
                            value={values.price}
                            onChange={changeHandler}
                            className="w-full p-2 bg-white bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-white text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
                    >
                        Create Ticket
                    </button>
                </form>

                {error && (
                    <p className="mt-4 text-center text-sm text-red-600">{error}</p>
                )}
            </div>
        );
    }
);

export default TicketCreateForm;
