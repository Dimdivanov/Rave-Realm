import { useEffect, useState } from 'react';
import artistAPI from '../api/artists-api';

export function useGetAllArtists() {
    const [artist, setArtists] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await artistAPI.getAll();
            setArtists(result);
        })();
    }, []);

    return artist;
}
