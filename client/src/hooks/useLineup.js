import { useEffect, useState } from 'react';
import addedToLineAPI from '../api/purchase-api';

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
    }, [addToLine]);

    return [addToLine, setAddToLine];
}
