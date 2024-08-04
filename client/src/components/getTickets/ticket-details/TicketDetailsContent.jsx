import { Link } from 'react-router-dom';

export default function TicketDetailsContent({
    ticketDetails,
    purchased,
    isOwner,
    ticketDelClickHandler,
    onClickBuyHandler,
}) {
    return (
        <div className="w-full max-w-4xl p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <img
                    src={ticketDetails.ticketImgUrl}
                    alt={`Ticket for ${ticketDetails.ticketName}`} // Improved alt text
                    className="rounded-lg w-full h-64 lg:h-auto object-cover lg:object-contain"
                />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                <h2 className="text-4xl font-bold text-white mb-4">
                    {ticketDetails.ticketName}
                </h2>
                <p className="text-base text-gray-300 mb-5">Type: {ticketDetails.type}</p>
                <p className="text-base text-gray-300 mb-5">
                    Price: {ticketDetails.price} BGN
                </p>
                <p className="text-base text-yellow-500 mb-5">
                    Purchased: {purchased.length} times!
                </p>
                <p className="text-sm text-gray-200 mb-40 line-clamp-6">
                    {ticketDetails.description}
                </p>

                <div className="flex flex-wrap gap-4">
                    {isOwner && (
                        <>
                            <Link
                                to={`/ticket/edit/${ticketDetails._id}`}
                                className="px-6 py-2 bg-purple-400 text-white font-semibold rounded-lg shadow-md hover:bg-purple-500 transition duration-200"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={ticketDelClickHandler}
                                className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
                            >
                                Delete
                            </button>
                        </>
                    )}
                    <button
                        onClick={onClickBuyHandler}
                        className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-200"
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}
