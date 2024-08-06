import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import ModalRemove from '../../modal/ModalRemove';
import Spinner from '../../common/spinner/Spinner';

import { AuthContext } from '../../../contexts/AuthContext';
import { SpinnerContext } from '../../../contexts/SpinnerContext';
import { useGetOneTicket } from '../../../hooks/useTickets';
import ticketAPI from '../../../api/tickets-api';
import { useCreatePurchase, useGetAllPurchase } from '../../../hooks/usePurchase';
import TicketDetailsContent from './TicketDetailsContent';

export default function TicketDetails() {
    const { ticketId } = useParams();
    const [ticketDetails] = useGetOneTicket(ticketId);
    const [showModalRemove, setShowModalRemove] = useState(false);

    const navigate = useNavigate();
    const createPurchase = useCreatePurchase();

    const { userId, email } = useContext(AuthContext);
    const isOwner = userId === ticketDetails._ownerId;

    const [purchased] = useGetAllPurchase(ticketId);
    const { isLoading, setIsLoading } = useContext(SpinnerContext);

    const ticketDelClickHandler = () => setShowModalRemove(true);

    const onDeleteClickHandler = async () => {
        setShowModalRemove(false);
        setIsLoading(true);
        try {
            await ticketAPI.remove(ticketId);
            navigate('/get-tickets');
        } catch (err) {
            console.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const modalRemoveCloseHandler = () => setShowModalRemove(false);

    const onClickBuyHandler = () => createPurchase(ticketId, email);

    return (
        <>
            {isLoading && <Spinner />} {/* Show spinner based on isLoading state */}
            {showModalRemove && (
                <ModalRemove
                    onClose={modalRemoveCloseHandler}
                    onDeleteClick={onDeleteClickHandler}
                />
            )}
            <div className="min-h-screen bg-gradient-to-b from-purple-800 via-purple-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <TicketDetailsContent
                    ticketDetails={ticketDetails}
                    purchased={purchased}
                    isOwner={isOwner}
                    ticketDelClickHandler={ticketDelClickHandler}
                    onClickBuyHandler={onClickBuyHandler}
                />
            </div>
        </>
    );
}
