import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export default function Genres({ token }) {
    const [genres, setGenres] = useState([]);
    const getGenres = useCallback(async () => {
        return axios.get('https://api.spotify.com/v1/me/top/artists', { headers: { Authorization: `Bearer ${token}`}})
        .then((res)=> {
            let genresTemp = genres || [];
            res.data.items?.genres?.map((genre) => genresTemp.push(genres));
            setGenres(genresTemp);
        });
    }, [token]);

    useEffect(() => {
        getGenres();
    }, [getGenres]);
    return (
        <div className="spotify-genres">{console.log(genres)}</div>
    )
};