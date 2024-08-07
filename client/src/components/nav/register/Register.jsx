import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useForm } from '../../../hooks/useForm';
import { useRegister } from '../../../hooks/useAuth';
import useFocusForm from '../../../hooks/useFocusForm';
import RegisterFooter from './RegisterFooter';
import { registerValidator } from '../../../util/registerValidator';

const initialValues = {
    email: '',
    password: '',
    rePassword: '',
};

export default function Register() {
    const [error, setError] = useState('');
    const ref = useFocusForm();
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        const error = registerValidator(values);
        if (error) {
            return setError(error);
        }
        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(
        initialValues,
        registerHandler
    );

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b from-purple-800 to-black text-white">
            <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-20 w-auto"
                    src="src/assets/icons/logo.ico"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
                    Register
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={submitHandler} className="space-y-6" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-100"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                autoComplete="email"
                                ref={ref}
                                value={values.email}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-100"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={values.password}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="rePassword"
                                className="block text-sm font-medium leading-6 text-gray-100"
                            >
                                Confirm Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="rePassword"
                                name="rePassword"
                                type="password"
                                autoComplete="confirm-password"
                                value={values.rePassword}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-1 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <RegisterFooter />
                {error && (
                    <div className="mt-6 p-4 bg-red-100 border border-red-500 rounded-md text-red-700">
                        <p className="text-lg font-semibold">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
