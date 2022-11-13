import logo from "../images/svg/logo.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div id="header__div">
      <div className="header__divs">
        <img src={ logo } alt="MetaBnB logo" />
      </div>
      <div id="links__div" className="header__divs">
        <Link to="/">Home</Link>
        <Link to="/place-to-stay">Place to Stay</Link>
        <Link to="/nfts">NFTs</Link>
        <Link to="/community">Community</Link>
      </div>
      <div className="header__divs">
        <button id="connect-wallet">Connect wallet</button>
      </div>
    </div>
  )
}