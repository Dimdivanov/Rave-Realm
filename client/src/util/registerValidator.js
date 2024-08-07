export const registerValidator = ({ email, password, rePassword }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
        return 'Missing Fields!';
    }
    if (!emailRegex.test(email)) {
        return 'Invalid email address!';
    }
    if (password !== rePassword) {
        return 'Password missmatch!';
    }
    if (password.length < 3) {
        return 'Password must be at least 3 characters long!';
    }

    return '';
};
