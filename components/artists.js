import axios from "axios";
import { useEffect, useState } from "react";

export default function Artists({ token }) {
    const [ topArtists, setTopArtists] = useState([]);
    /** Here we fetch the Top Artists of the Account */
    useEffect(() => {
        let headers = { "Authorization": `Bearer ${token}` };
        let getArtists = async (token) => {
            await axios.get('https://api.spotify.com/v1/me/top/artists', { headers })
            .then((res) => {
                setTopArtists(res.data.items);
            });
        };
        getArtists();
    }, []);
    return (
        <div>
            {
                topArtists.map((artist, i) => {
                    return (
                        <p className="artistName">{artist.name}</p>
                    )
                })
            }
        </div>
    );
};