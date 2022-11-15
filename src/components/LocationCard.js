import heartIcon from "../images/svg/icons/heart.svg";
import starIcon from "../images/svg/icons/star.svg";
import "../styles/LocationCard.css";

export default function LocationCard({bnbLocation}) {
  return (
    <div className="div__location-card">
      <div className="location-card-div__heart-icon">
        <img src={heartIcon} alt="a heart icon" />
      </div>
      <img src={require(`../images/locations/${ bnbLocation.imgUrl }`)} alt={ bnbLocation.altText } />
      <div className="location-card-div__info1">
        <p>{ bnbLocation.name }</p>
        <p>{ bnbLocation.price }</p>
      </div>
      <div className="location-card-div__info2">
        <p>{ bnbLocation.distance } away</p>
        <p>available for { bnbLocation.duration } stay</p>
      </div>
      <div className="location-card-div__stars">
        {
          [...Array( bnbLocation.stars )].map((value, index)=>(
            <img src={starIcon} alt="a star icon" key={index} />
          ))
        }
      </div>
    </div>
  )
}