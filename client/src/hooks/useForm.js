import { useState } from 'react';

/* for user inputs */
export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        e.preventDefault();
        setValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        values,
        changeHandler,
    };
}
