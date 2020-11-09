/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect( async () => {

        const response =  await fetch(url);
        const data = await response.json();
    
        setData(data.products);
        setLoading(false);
    }, []);

    return { data, loading };
}

