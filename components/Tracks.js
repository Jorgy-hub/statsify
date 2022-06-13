import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faCompactDisc);
config.autoAddCss = false;

export default function Tracks({ token }) {
  const [topTracks, setTopTracks] = useState([]);

  /** Here we fetch the Top Artists of the Account */
  const getTracks = useCallback(async () => {
    return axios
      .get('https://api.spotify.com/v1/me/top/tracks', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        setTopTracks(res.data.items);
      });
  }, [token]);

  useEffect(() => {
    getTracks();
  }, [getTracks]);

  return (
    <div className="spotify-tracks">
      <div className="tracks-title">Top Tracks</div>
      <div className="tracks-description">The Tracks you most listen in spotify!</div>
      {topTracks.map((track, i) => {
        return (
          <div
            className="track"
            key={i}
            id={`track-${i}`}
            onClick={() => (window.location = track.external_urls?.spotify)}
          >
            <div className="track-index">{i + 1}</div>
            <FontAwesomeIcon icon="fas fa-compact-disc" />
            <div className="track-name">
              <Link href={track.external_urls.spotify}>{track.name}</Link>
            </div>
            <div className="track-followers">
              {track.popularity || 0}
              <FontAwesomeIcon icon="fas fa-heart" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
