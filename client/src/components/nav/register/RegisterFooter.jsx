import { Link } from 'react-router-dom';

export default function RegisterFooter() {
    return (
        <p className="mt-10 text-center text-sm text-white">
            Already registered?&nbsp;
            <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
                Login
            </Link>
        </p>
    );
}
