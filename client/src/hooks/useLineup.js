import { useEffect, useState } from 'react';
import addedToLineAPI from '../api/addToLine-api';

export function useCreateAddToLine() {
    const createHandler = (artistId, addedToLine) => {
        addedToLineAPI.create(artistId, addedToLine);
    };

    return createHandler;
}

export function useGetAllToLine(artistId) {
    const [addToLine, setAddToLine] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await addedToLineAPI.getAll(artistId);
            setAddToLine(result);
        })();
    }, []);

    return [addToLine, setAddToLine];
}

export function useRemoveAddToLine() {
    const createHandler = (artistId) => {
        addedToLineAPI.remove(artistId);
    };

    return createHandler;
}
