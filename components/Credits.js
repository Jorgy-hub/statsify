/**
 * This is a Simple component, just a box with my personal info.
 * @returns { JSX }
 */
export default function Credits() {
  return (
    <div className="credits">
      <div className="credits-title">About the project</div>
      <div className="credits-description">
        Statsify is an ad-free and open source website made with Next.js
        <br />
        I originally created this website for my girlfriend since she uses Spotify a lot and loves the music.
        <br />
        The only developer of this project is me Jorgy or Uraraka-Chan in GitHub, if you enjoy please share it!
      </div>
      <div className="credits-profiles">
        <div
          className="profile"
          style={{ backgroundImage: 'url(https://avatars.githubusercontent.com/u/71365133?v=4)' }}
          onClick={() => (window.location = 'https://www.instagram.com/jorgy.ts/')}
        >
          { /* <span className="profile-name">jorgy.ts</span> */ }
        </div>
        <div
          className="profile"
          style={{ backgroundImage: 'url(https://i.imgur.com/iuyMV3P.jpg)' }}
          onClick={() => (window.location = 'https://www.instagram.com/earlysunsets._/')}
        >
          { /*<span className="profile-name">my gf!</span>*/ }
        </div>
      </div>
    </div>
  );
}
