import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { numberWithCommas } from '../utils/number';

/**
 * In this Component we draw the Top Artists Table.
 * @param { string } token
 * @returns { JSX } 
 */
export default function Artists({ token }) {
  /** This is our Global Variable to set Artists */
  const [topArtists, setTopArtists] = useState([]);

  /** Here we fetch the Top Artists of the Account */
  const getArtists = useCallback(async () => {
    return axios
      .get('https://api.spotify.com/v1/me/top/artists', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setTopArtists(res.data.items);
      });
  }, [token]);

  /** Here we call the fetch Function async */
  useEffect(() => {
    getArtists();
  }, [getArtists]);

  return (
    <div className="spotify-artists">
      <div className="artists-title">Top Artists</div>
      <div className="artists-description">The Artists you most listen in spotify!</div>
      {topArtists.map((artist, i) => {
        return (
          <div
            className="artist"
            key={i}
            id={`artist-${i}`}
            onClick={() => (window.location = artist.external_urls?.spotify)}
          >
            <div className="artist-index">{i + 1}</div>
            <div className="artist-image" style={{backgroundImage: `url(${artist.images[0].url})`}}></div>
            <div className="artist-name">
              <Link href={artist.external_urls.spotify}>{artist.name}</Link>
            </div>
            <div className="artist-followers">
              {numberWithCommas(artist.followers?.total) || 0}
              <br />
              Followers
            </div>
          </div>
        );
      })}
    </div>
  );
}
