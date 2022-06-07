import axios from "axios";
import { useEffect } from "react";

export default function Artists({ token }) {
    /** Here we fetch the Top Artists of the Account */
    useEffect(() => {
        let artists = [];
        let headers = { "Authorization": `Bearer ${token}` };
        let getArtists = async (token) => {
            let data = await axios.get('https://api.spotify.com/v1/me/top/artists', { headers })
            .then((res) => {
                artists = res.data.items;
            });
        };
        getArtists();
    }, []);
    
};