import { useState } from "react";
import logo from "../images/svg/logo.svg";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header({modalSetter}) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  }
  const handleWalletClick = () => {
    handleClick();
    modalSetter(current => !current);
  }
  return (
    <div className="header__div">
      <div className="header__divs">
        <img src={ logo } alt="MetaBnB logo" />
      </div>
      <div className="hamburger" onClick={handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={isActive ? "active links__div header__divs" : "links__div header__divs"}>
        <Link onClick={handleClick} to="/">Home</Link>
        <Link to="/place-to-stay">Place to Stay</Link>
        <Link to="/nfts">NFTs</Link>
        <Link to="/community">Community</Link>
        <button onClick={handleWalletClick} className="connect-wallet">Connect wallet</button>
      </div>
    </div>
  )
}