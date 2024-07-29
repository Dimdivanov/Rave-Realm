import { useState } from 'react';

/*
in the input components 
const { values, changeHandler, submitHandler } = useForm(createInitialformVals, formSubmitHandlerfunc)
*/

/* for user inputs */
export function useForm(initialValues, submitCallBack) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        submitCallBack(values);
    };
    return {
        values,
        changeHandler,
        submitHandler,
    };
}
