/** Imported Libraries */
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

export default function Home() {
  /** Spotify Token State */
  const [token, setToken] = useState(null);

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
  }, []);

  useEffect(() => {
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
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>SpotiStats</title>
        <meta
          name="description"
          content="Check your Spotify Stats for free without Ads!\nFollow @jorgy.ts on Instagram for more content"
        />
        <meta name="theme-color" content="#33d486"></meta>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="navbar">
        <div className="logo" />
        <div className="title">SpotiStats</div>
      </div>
      <Loader />
      <main className={styles.main}>
        {!token && (
          <Landing/>
        )}
        <div className={styles['spotify-container']}>
          {token && (
            <div className="wrapper">
              <User token={token} />
              <Genres token={token} />
              <Artists token={token} />
              <Tracks token={token} />
              <Credits />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
