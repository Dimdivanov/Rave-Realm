import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { useLogin } from '../../../hooks/useAuth';
import useFocusForm from '../../../hooks/useFocusForm';
import LoginFooter from './LoginFooter';
import { validateLogin } from '../../../util/loginValidator';

const initialValues = { email: '', password: '' };

export default function Login() {
    const [error, setError] = useState('');
    const ref = useFocusForm();
    const login = useLogin();

    const navigate = useNavigate();

    const loginHandler = async (values) => {
        const error = validateLogin(values);
        if (error) {
            return setError(error);
        }
        try {
            await login(values.email, values.password);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    console.log(error);

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b from-purple-800 to-black text-white">
                <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src="https://firebasestorage.googleapis.com/v0/b/first-project-test-ea6ec.appspot.com/o/icons%2Flogo.ico?alt=media&token=da4060b7-6a89-4625-8995-5e07384e4a2a"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
                        Login
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
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <LoginFooter />
                    {error && (
                        <div className="mt-6 p-4 bg-red-100 border border-red-500 rounded-md text-red-700">
                            <p className="text-lg font-semibold">{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
