import { getAccessToken, forbiddenTokenClear } from '../util/authUtils';

async function requester(method, url, data) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return;
        }

        if (response.status === 403) {
            forbiddenTokenClear();
            return;
        }

        if (!response.ok) {
            const result = await response.json();
            throw result;
        }

        return await response.json();
    } catch (err) {
        console.log('Request failed:', err);
    }
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');
