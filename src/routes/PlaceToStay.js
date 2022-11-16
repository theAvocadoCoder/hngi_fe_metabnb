
import locations from '../data_modules/locations';
import LocationCard from '../components/LocationCard';
import settings from "../images/svg/icons/settings.svg";
import "../styles/PlaceToStay.css";

export default function PlaceToStay() {
  const { layer1, layer2, layer3, layer4 } = locations;
  return (
    <div>
      <div className='filter-places__div'>
        <div className="type-filter__div">
          <span>Restaurant</span>
          <span>Cottage</span>
          <span>Castle</span>
          <span>Fantasy City</span>
          <span>Beach</span>
          <span>Cabins</span>
          <span>Off-grid</span>
          <span>Farm</span>
        </div>
        <div className="location-filter__div">
          <input type="text" placeholder='Location' />
          <img src={settings} alt="a settings icon" />
        </div>
      </div>
      <div className='places-to-stay__div'>
          {
            layer1.map((layerLocation, index)=>(
              <LocationCard bnbLocation={layerLocation} key={index} />
            ))
          }
          {
            layer2.map((layerLocation, index)=>(
              <LocationCard bnbLocation={layerLocation} key={index} />
            ))
          }
          {
            layer3.map((layerLocation, index)=>(
              <LocationCard bnbLocation={layerLocation} key={index} />
            ))
          }
          {
            layer4.map((layerLocation, index)=>(
              <LocationCard bnbLocation={layerLocation} key={index} />
            ))
          }

      </div>
    </div>
  )
}
