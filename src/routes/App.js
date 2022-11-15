import Search from '../components/Search';
import '../styles/App.css';
import druids4 from "../images/locations/druids 4.png";
import s2 from "../images/locations/s2.png";
import s9 from "../images/locations/s9.png";
import susan1 from "../images/locations/susan 1.png";
import mbToken from "../images/svg/mbtoken.svg";
import metaMask from "../images/svg/metamask.svg";
import openSea from "../images/svg/opensea.svg";
import locations from '../data_modules/locations';
import LocationCard from '../components/LocationCard';

function App() {
  const { layer1, layer2 } = locations;

  return (
    <div className="App">
      <section className='section__hero'>
        <div className='hero-div__copy-container'>
          <div className='hero-div__tagline'>
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
            </h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <Search />
          </div>
          <div className='hero-div__images-container'>
            <div className='hero-div__image'>
              <img src={druids4} alt="" />
            </div>
            <div className='hero-div__image'>
              <img src={s2} alt="" />
              </div>
            <div className='hero-div__image'>
              <img src={s9} alt="" />
            </div>
            <div className='hero-div__image'>
              <img src={susan1} alt="" />
            </div>
          </div>
        </div>
        <div className='hero-div__platforms'>
          <img src={mbToken} alt="MBToken logo" />
          <img src={metaMask} alt="MetaMask logo" />
          <img src={openSea} alt="OpenSea logo" />
        </div>
      </section>
      <section className='section__featured-places'>
        <h1>Inspiration for your next adventure</h1>
        <div className='featured-places__div'>
          {
            layer1.map((layer1Location, index)=>(
              <LocationCard bnbLocation={layer1Location} key={index} />
            ))
          }
        </div>
        <div className='featured-places__div'>
          {
            layer2.map((layer2Location, index)=>(
              <LocationCard bnbLocation={layer2Location} key={index} />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
