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
                            className="w-full p-2 bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 bg-black text-black text-sm"
                        >
                            <option>Select Ticket Image</option>
                            {Object.entries(ticketImgUrlOptions).map(([key, url]) => (
                                <option key={key} value={url}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <label
                            htmlFor="ticket-description"
                            className="text-white text-sm"
                        >
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
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-md hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-colors text-sm"
                    >
                        Create Ticket
                    </button>
                </form>

                {error && (
                    <div className="mt-6 p-4 bg-red-100 border border-red-500 rounded-md text-red-700">
                        <p className="text-lg font-semibold">{error}</p>
                    </div>
                )}
            </div>
        );
    }
);

export default TicketCreateForm;
