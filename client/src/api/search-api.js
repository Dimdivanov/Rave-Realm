import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/artists';

const getAllMatching = async (match) => {
    const result = await request.get(BASE_URL);
    const artists = Object.values(result).filter((artist) =>
        artist.artistName === match ? true : false
    );

    return artists;
};

const searchAPI = {
    getAllMatching,
};

export default searchAPI;
