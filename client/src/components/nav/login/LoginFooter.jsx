import { Link } from 'react-router-dom';

const LoginFooter = () => (
    <p className="mt-10 text-center text-sm text-white">
        Not registered?&nbsp;
        <Link
            to="/sign-up"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
            Register
        </Link>
    </p>
);

export default LoginFooter;
