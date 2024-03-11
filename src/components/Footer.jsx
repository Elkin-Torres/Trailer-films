import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSquareXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer_title">Your movie trailer website!</h2>
      <div className="footer__icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faSquareXTwitter} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className="footer__copry">
        <FontAwesomeIcon icon={faCopyright} />
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
