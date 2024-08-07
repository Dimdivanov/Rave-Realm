import { useEffect, useState } from 'react';
import artistAPI from '../api/artists-api';

export function useGetAllArtists() {
    const [artist, setArtists] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await artistAPI.getAll();
                setArtists(result);
            } catch (err) {
                console.error('Error fetching artists:', err);
                throw err;
            }
        })();
    }, []);

    return artist; // Return error state along with artists
}

export function useGetOneArtists(artistId) {
    const [artistDetails, setArtistDetails] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const result = await artistAPI.getOne(artistId);
                setArtistDetails(result);
            } catch (err) {
                console.error('Error fetching artist details:', err);
                throw err;
            }
        })();
    }, [artistId]);

    return [artistDetails];
}

export function useCreateArtist() {
    const artistCreateHandler = async (artistData) => {
        try {
            const result = await artistAPI.create(artistData);
            return result;
        } catch (err) {
            console.error('Error creating artist:', err);
            throw err;
        }
    };

    return artistCreateHandler;
}
