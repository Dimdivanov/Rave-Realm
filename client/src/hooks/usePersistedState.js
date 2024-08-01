import { useState } from 'react';

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);

        if (!persistedAuth) {
            return initialState;
        }

        const authData = JSON.parse(persistedAuth);
        return authData;
    });

    //we dont expose the setState so we make wrapped state
    const updateState = (value) => {
        localStorage.setItem(key, JSON.stringify(value));

        setState(value);
    };

    return [state, updateState];
}
