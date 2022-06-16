import { useState, useEffect } from 'react';
import { shows } from "../../Data/shows.js";

const useSearching = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearching = (searchTerm) => {
        if (searchTerm !== "") {
            setIsSearching(true);
            const newShowList = shows.filter((show) => {
                return ((show.name.toLowerCase().includes(searchTerm.toLowerCase())));
            });
            setSearchResults(newShowList);
        } else {
            setIsSearching(false);
            setSearchResults(shows);
        }
    }

    return {
        isSearching,
        searchResults,
        handleSearching,
    };
};

export default useSearching;