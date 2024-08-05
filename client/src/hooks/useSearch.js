import { useEffect, useState } from 'react';
import searchAPI from '../api/search-api';

export function useSearch() {
    const [searchedWord, setSearchedWord] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await searchAPI.getAllMatching(searchedWord);
            setSearchedWord(result);
        })();
    }, []);



    return searchedWord;
}
