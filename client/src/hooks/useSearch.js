import searchAPI from '../api/search-api';

export function useSearch() {
    const createHandler = (artistName) => {
        searchAPI.getAll(artistName);
    };
    return createHandler;
}
