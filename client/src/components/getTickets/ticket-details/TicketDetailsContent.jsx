import { Link, useNavigate } from 'react-router-dom';

export default function TicketDetailsContent({
    ticketDetails,
    purchased,
    isOwner,
    ticketDelClickHandler,
    onClickBuyHandler,
    setPurchase,
}) {
    const navigate = useNavigate();

    return (
        <div className="relative w-full max-w-4xl p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg flex flex-col lg:flex-row">
            {/* Back Button */}
            <div className="absolute top-4 left-4">
                <button onClick={() => navigate('/get-tickets')} className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-10 h-10 rounded-full hover:bg-purple-500 hover:bg-opacity-50"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            </div>

            <div className="w-full lg:w-1/2">
                <img
                    src={ticketDetails.ticketImgUrl}
                    alt={`Ticket for ${ticketDetails.ticketName}`}
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
                <p
                onClick={setPurchase} 
                className="text-base text-yellow-500 mb-5">
                    Purchased: {purchased.length} times!
                </p>
                <p className="text-sm text-gray-200 mb-40 line-clamp-6">
                    {ticketDetails.description}
                </p>

                <div className="flex justify-center space-x-4 mb-6">
                    {isOwner ? (
                        <>
                            <Link to={`/ticket/edit/${ticketDetails._id}`}>
                                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-2 px-4 rounded-md shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-colors">
                                    Edit
                                </button>
                            </Link>
                            <button
                                onClick={ticketDelClickHandler}
                                className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-md shadow-md hover:from-red-600 hover:to-red-800 transition-colors"
                            >
                                Delete
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={onClickBuyHandler}
                            className="bg-teal-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-teal-600 transition-colors"
                        >
                            Buy
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
