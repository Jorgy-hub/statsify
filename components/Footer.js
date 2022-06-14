import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
library.add(faInstagram, faGithub, faTwitch, faYoutube);
config.autoAddCss = false;

/**
 * This is a simple component, here we just return a custom Footer.
 * @returns { JSX }
 */
export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://www.instagram.com/jorgygfx/">
            <i>
              <FontAwesomeIcon icon="fab fa-instagram" />
            </i>
          </a>
          <a href="https://github.com/Uraraka-Chan">
            <i>
              <FontAwesomeIcon icon="fab fa-github" />
            </i>
          </a>
          <a href="https://twitch.com/jorgygfx">
            <i>
              <FontAwesomeIcon icon="fab fa-twitch" />
            </i>
          </a>
          <a href="https://www.youtube.com/channel/UCA78-TRtRUnIZvJwctKvDcg">
            <i>
              <FontAwesomeIcon icon="fab fa-youtube" />
            </i>
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="https://discord.com/invite/animazing">Animazing</a>
          </li>
          <li className="list-inline-item">
            <a href="https://discord.com/invite/comfy">Comfy</a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/Uraraka-Chan">Credits</a>
          </li>
        </ul>
        <p className="copyright">Uraraka-Chan © 2022</p>
      </footer>
    </div>
  );
}
