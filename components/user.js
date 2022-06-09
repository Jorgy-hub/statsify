import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function User( { token } ) {
    const [ user, setUser] = useState({});
    const [ avatar, setAvatar ] = useState("https://i.pinimg.com/originals/a3/e6/50/a3e650a67d4422433d94eb032492bbc7.png");
    
    /** Here we fetch the Top Artists of the Account */
    const getProfile = useCallback(async () => {
        return axios.get('https://api.spotify.com/v1/me', { headers: { "Authorization": `Bearer ${token}` } })
        .then((res) => {
            setUser(res.data);
            setAvatar(res.data.images[0].url);
        });
    }, [token]);

    useEffect(() => {      
        getProfile();
    }, [getProfile]);

    return (
        <div className="spotify-profile">
            <div className="spotify-image" style={{ backgroundImage: `url(${avatar})` }}></div>
            <div className="spotify-name">{ user.display_name }</div>
            <div className="spotify-followers">{ user.followers?.total } Followers</div>
        </div>
    );
};