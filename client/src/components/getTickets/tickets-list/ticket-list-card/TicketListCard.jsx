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
        <li className="relative from-purple-700 to-black rounded-lg shadow-md overflow-hidden border-4 border-gray-400 transition-transform transform hover:scale-105">
            <Link to={`/ticket/details/${_id}`} className="block">
                <img
                    src={ticketImgUrl}
                    alt={ticketName}
                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out"
                />
                <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{ticketName}</h3>
                    <p className="text-sm text-white mb-2">{description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-white">{type}</span>
                        <span className="text-lg font-bold text-yellow-400">
                            {price} BGN
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}
