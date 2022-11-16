import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import close from "../images/svg/icons/close.svg";
import moreArrow from "../images/svg/icons/more-arrow.svg";
import { useState } from "react";
import "../styles/Root.css";

function Root() {

  const [modalIsActive, setmodalIsActive] = useState(false);
  const handleClick = () => {
    setmodalIsActive(current => !current)
  }

  return (
    <>
      <div className={modalIsActive?'active connect-modal__container':'connect-modal__container'}>
        <div className='modal__div'>
          <div className='modal-div__head'>
            <strong>Connect Wallet</strong>
            <img src={close} alt="close icon" onClick={handleClick} />
          </div>
          <div className='modal-div__body'>
            Choose your preferred Wallet:
            <Link to="/">
              <img src={require("../images/metamask__colored.png")} alt="Metamask logo" />
              <p>Metamask</p>
              <img src={moreArrow} alt="more arrow icon" />
            </Link>
            <Link to="/">
              <img src={require("../images/walletconnect__colored.png")} alt="Metamask logo" />
              <p>WalletConnect</p>
              <img src={moreArrow} alt="more arrow icon" />
            </Link>
          </div>
        </div>
      </div>
      <Header modalSetter={setmodalIsActive} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;