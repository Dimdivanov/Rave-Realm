import { Link } from 'react-router-dom';

export default function TicketListCard({
    _id,
    ticketImgUrl,
    ticketName,
    description,
    type,
    price,
}) {
    return (
        <>
            <div className="group relative">
                <Link to={`/ticket/details/${_id}`}>
                    <div className="bg-transparent aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src={ticketImgUrl}
                            alt="Ticket Image"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                </Link>
                <div className="mt-4 flex flex-col">
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-xl font-bold text-gray-400">{ticketName}</h2>
                        <p className="text-sm text-white">Type: {type}</p>
                        <p className="text-sm text-white">Price: {price} BGN</p>
                        <p className="mt-2 text-gray-300 break-words overflow-hidden text-ellipsis line-clamp-2">
                            {description}
                        </p>
                    </div>
                    <div className="p-4 flex justify-center">
                        <Link to={`/ticket/details/${_id}`}>
                            <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
