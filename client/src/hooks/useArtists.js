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

export function useGetOneArtists(artistId) {
    const [artistDetails, setArtistDetails] = useState({});
    useEffect(() => {
        (async () => {
            const result = await artistAPI.getOne(artistId);

            setArtistDetails(result);
        })();
    }, [artistId]);
    return [artistDetails];
}

export function useCreateArtist() {
    const artistCreateHandler = (artistData) => artistAPI.create(artistData);

    return artistCreateHandler;
}


