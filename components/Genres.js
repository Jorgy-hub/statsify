import { useEffect, useState, useCallback } from 'react';
import { CountArrayItems } from '../utils/array';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import axios from 'axios';
Chart.register(ArcElement, Tooltip);

export default function Genres({ token }) {
  const [genres, setGenres] = useState({});
  const [isMounted, setMount] = useState(false);

  const getGenres = useCallback(async () => {
    return axios
      .get('https://api.spotify.com/v1/me/top/artists', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        let genresTemp = [];
        res.data.items?.map(artist => {
          artist.genres?.map(genre => genresTemp.push(genre));
        });
        let randomColor = () =>
          'rgba(' +
          Math.floor(Math.random() * 256) +
          ', ' +
          Math.floor(Math.random() * 256) +
          ',' +
          Math.floor(Math.random() * 256) +
          ', 0.5)';
        let genresCount = CountArrayItems(genresTemp);
        let data = {
          labels: Object.keys(genresCount).map(k =>
            k
              .split(' ')
              .map(w => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' '),
          ),
          datasets: [
            {
              label: 'Top Genres',
              data: Object.values(genresCount),
              backgroundColor: Object.values(genresCount).map(g => randomColor()),
              borderWidth: 0,
            },
          ],
        };
        setGenres(data);
        setMount(true);
      });
  }, [token]);

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  return (
    <div className="spotify-genres">
      <div className="genres-info">
        <div className="genres-title">Top Genres</div>
        <div className="genres-description">The Genres you most listen in spotify!</div>
        <div className="genres-container">
          {isMounted &&
            genres.labels.map((g, i) => (
              <div style={{ backgroundColor: genres.datasets[0].backgroundColor[i] }} key={i}>
                {g}
              </div>
            ))}
        </div>
      </div>
      <div className="genres">
        {isMounted && <Doughnut data={genres} width={250} height={250} options={{ maintainAspectRatio: false }} />}
      </div>
    </div>
  );
}
