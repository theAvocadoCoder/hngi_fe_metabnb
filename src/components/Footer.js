import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logoAllWhite from "../images-svg/logo__all-white.svg";
import fb from "../images-svg/icons/fb.svg";
import ig from "../images-svg/icons/ig.svg";
import twitter from "../images-svg/icons/twitter.svg";

export default function Footer() {
  return (
    <div id="footer__div">
      <div id="footer-div__1">
        <img src={logoAllWhite} alt="all white MetaBnB log" />
        <div>
          <div>
            <img src={fb} alt="facebook logo" />
            <img src={twitter} alt="twitter logo" />
            <img src={ig} alt="instagram logo" />
          </div>
          <p>&copy; 2022 Metabnb</p>
        </div>
      </div>
      <div id="footer-div__2">
        <div>
          <strong>Community</strong>
          <Link to="">NFT</Link>
          <Link to="">Tokens</Link>
          <Link to="">Landlords</Link>
          <Link to="">Discord</Link>
        </div>
        <div>
          <strong>Places</strong>
          <Link to="">Castle</Link>
          <Link to="">Farms</Link>
          <Link to="">Beach</Link>
          <Link to="">Learn More</Link>
        </div>
        <div>
          <strong>About us</strong>
          <Link to="">Road Map</Link>
          <Link to="">Creators</Link>
          <Link to="">Career</Link>
          <Link to="">Contact us</Link>
        </div>
      </div>
    </div>
  )
}