/* eslint-disable @next/next/no-img-element */
/** Imported Libraries */
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

/** Local Files */
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Artists from '../components/Artists';
import Tracks from '../components/Tracks';
import User from '../components/User';
import Genres from '../components/Genres';
import Credits from '../components/Credits';
import Loader from '../components/Loader';
import Landing from '../components/Landing';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
library.add(faMoon);
config.autoAddCss = false;

// eslint-disable-next-line @next/next/no-img-element
export default function Home() {
  /** Spotify Token State */
  const [token, setToken] = useState(null);
  const [range, setRange] = useState(`short_term`);
  const [limit, setLimit] = useState(`10`);

  /** Checking if we have information */
  useEffect(() => {
    let Token = window.location.hash
      .substring(1)
      .split(/[&]/)
      .reduce(function (i, item) {
        if (item) {
          let j = item.split(/[=]/);
          i[j[0]] = decodeURIComponent(j[1]);
        }
        return i;
      }, {})['access_token'];
    setToken(Token);

    const debounce = fn => {
      let frame;
      return (...params) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };
    document.addEventListener('scroll', debounce(storeScroll), {
      passive: true,
    });
    storeScroll();
  }, [token, range]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Statsify</title>
        <meta
          name="description"
          content="Check your Spotify Stats for free without Ads! Follow @jorgy.ts on Instagram for more content"
        />
        <meta
          property="og:image"
          content="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png"
        />
        <meta name="author" content="Jorgy-Hub"></meta>
        <meta name="theme-color" content="#33d486"></meta>
        <meta name="copyright" content="Jorgy-Hub@2022" />
        <link rel="icon" href="./icon.png" />
      </Head>
      <div className="navbar">
        
        <img className="logo" src="./Spotify.png" alt="Phone" data-aos="fade-up" />
        <div className="title">
          <FontAwesomeIcon icon="fas fa-moon" />
          Statsify
        </div>
      </div>
      <Loader />
      <main className={styles.main}>
        {!token && <Landing />}
        <div className={styles['spotify-container']}>
          {token && (
            <div className="wrapper">
              <User token={token} />
              <Genres token={token} range={range} limit={limit} />
              <Artists token={token} range={range} limit={limit} />
              <Tracks token={token} range={range} limit={limit} />
              <div className="config">
                <div className="config-title">Settings</div>
                <div className="config-description">
                  Here you can configure the amount of info you want to display or the time range!
                </div>
                <div className="config-options">
                  <div className="config-option">
                    <div className="option-title">Time Range</div>
                    <div className="option-description">
                      Here you can configure the Time Range you want the result to have, either 1 Month, 6 Months or 1
                      Year.
                    </div>
                    <select onChange={e => setRange(e.target.value)}>
                      <option value="short_term">1 Month</option>
                      <option value="medium_term">6 Months</option>
                      <option value="long_term">1 Year</option>
                    </select>
                  </div>

                  <div className="config-option">
                    <div className="option-title">Results Amount</div>
                    <div className="option-description">
                      Here you can configure the Amount of results you want to display between 10 to 50.
                    </div>
                    <select onChange={e => setLimit(e.target.value)}>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                </div>
              </div>
              <Credits />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
