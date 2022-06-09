import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

import { numberWithCommas } from '../utils/number';

export default function Artists({ token }) {
  const [topArtists, setTopArtists] = useState([]);

  /** Here we fetch the Top Artists of the Account */
  const headers = { Authorization: `Bearer ${token}` };
  const getArtists = useCallback(async token => {
    await axios.get('https://api.spotify.com/v1/me/top/artists', { headers }).then(res => {
      setTopArtists(res.data.items);
    });
  }, []);

  useEffect(() => {
    getArtists();
  }, [getArtists]);

  return (
    <div className="spotify-artists">
      <div className="artists-title">Top Artists</div>
      <div className="artists-description">The Artists you most listen in spotify!</div>
      {topArtists.map((artist, i) => {
        return (
          <div className="artist" key={i} id={`artist-${i}`} href={artist.external_urls?.spotify || ''}>
            <div className="artist-index">{i + 1}</div>
            <div className="artist-image">
              <Image src={artist.images[0].url} alt={artist.name} width={50} height={50} />
            </div>
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
