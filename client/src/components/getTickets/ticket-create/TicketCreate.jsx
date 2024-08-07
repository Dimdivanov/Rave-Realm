import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCreateTicket } from '../../../hooks/useTickets';
import { useForm } from '../../../hooks/useForm';
import useFocusForm from '../../../hooks/useFocusForm';
import TicketCreateForm from './TicketCreateForm';
import { validateTicketCreateForm } from '../../../util/validateCreateForm';

const initialValues = {
    ticketName: '',
    ticketImgUrl: '',
    type: '',
    price: '',
    description: '',
};

export default function TicketCreate() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const createTicket = useCreateTicket();
    const ref = useFocusForm();

    const createHandler = async (values) => {
        const { ticketName, ticketImgUrl, type, price, description } = values;
        const error = validateTicketCreateForm(values);
        if (error) {
            return setError(error);
        }
        try {
            createTicket(values);
            navigate('/get-tickets');
        } catch (err) {
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        createHandler
    );

    return (
        <section
            id="create"
            className="w-full min-h-screen bg-gradient-to-b from-purple-700 to-black flex items-center justify-center py-10"
        >
            <TicketCreateForm
                values={values}
                changeHandler={changeHandler}
                submitHandler={submitHandler}
                ref={ref}
                error={error}
            />
        </section>
    );
}
