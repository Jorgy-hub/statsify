import { useEffect, useState, useCallback } from 'react';
import { CountArrayItems } from '../utils/array';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import axios from 'axios';
Chart.register(ArcElement, Tooltip);

/**
 * In this component we return the Genres Table with the custom Graphic.
 * @param { string } token
 * @returns { JSX }
 */
export default function Genres({ token }) {
  /** This variables are the global genres and the one to check if the operation was completed */
  const [genres, setGenres] = useState({});
  const [isMounted, setMount] = useState(false);

  /** In this function we fetch the artists of the account. */
  const getGenres = useCallback(async () => {
    return axios
      .get('https://api.spotify.com/v1/me/top/artists?time_range=short_term', {
        headers: { Authorization: `Bearer ${token}` },
      })
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
          ', 0.8)';
        let randomPastel = () =>
          'hsl(' + 360 * Math.random() + ',' + (25 + 70 * Math.random()) + '%,' + (85 + 10 * Math.random()) + '%)';

        let genresCount = CountArrayItems(genresTemp);
        let genresSort = Object.entries(genresCount)
          .sort(([, a], [, b]) => b - a)
          .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        let data = {
          labels: Object.keys(genresSort).map(k =>
            k
              .split(' ')
              .map(w => w.charAt(0).toUpperCase() + w.slice(1))
              .join(' '),
          ),
          datasets: [
            {
              label: 'Top Genres',
              data: Object.values(genresSort),
              backgroundColor: Object.values(genresSort).map(g => randomColor()),
              borderWidth: 0,
            },
          ],
        };
        setGenres(data);
        setMount(true);
      })
      .catch(err => {
        window.location = '/';
      });
  }, [token]);

  /** Here we call the async function */
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
              <div
                style={{ backgroundColor: genres.datasets[0].backgroundColor[i] }}
                key={i}
                onClick={() => (window.location = `https://open.spotify.com/search/` + g)}
              >
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
