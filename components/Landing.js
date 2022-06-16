import { authEndpoint, clientId, redirectUri, scopes } from '../config_example';

/* eslint-disable @next/next/no-img-element */
export default function Landing() {
  return (
    <section
      id="home"
      data-parallax="scroll"
      data-image-src="images/hero-bg.jpg"
      data-natural-width={3000}
      data-natural-height={1800}
    >
      <div className="overlay"></div>
      <div className="home-content">
        <div className="row contents">
          <div className="home-content-left">
            <h3 data-aos="fade-up">Welcome to SpotiStats</h3>
            <h1 data-aos="fade-up">
              Check your Monthly <br />
              Spotify Stats for free <br />
            </h1>
            <div className="buttons" data-aos="fade-up">
              <a
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                  '%20',
                )}&response_type=token&show_dialog=true`}
                className="smoothscroll button stroke"
              >
                Login to Spotify
              </a>
            </div>
          </div>
          <div className="home-image-right">
            <img src="/Phone.png" alt="Phone" data-aos="fade-up" />
          </div>
        </div>
      </div>
      <div className="home-scrolldown">
        <a className="scroll-icon smoothscroll">
          <span>Scroll Down</span>
          <i className="icon-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
}
