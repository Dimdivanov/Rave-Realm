import { useEffect, useState } from 'react';
import addedToLineAPI from '../api/addToLine-api';

export function useCreateAddToLine() {
    const createHandler = (artistId, addedToLine) => {
        try {
            addedToLineAPI.create(artistId, addedToLine);
        } catch (err) {
            console.error('Error creating addToLine:', err);
            throw err;
        }
    };

    return createHandler;
}

export function useGetAllToLine(artistId) {
    const [addToLine, setAddToLine] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await addedToLineAPI.getAll(artistId);
                setAddToLine(result);
            } catch (err) {
                console.error('Error creating addToLine', err);
                throw err;
            }
        })();
    }, []);

    return [addToLine];
}

export function useRemoveAddToLine() {
    const createHandler = (artistId) => {
        try {
            addedToLineAPI.remove(artistId);
        } catch (err) {
            console.error('Error useRemoveAddToLine', err);
            throw err;
        }
    };

    return createHandler;
}
