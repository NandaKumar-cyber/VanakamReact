import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <h3>{name}</h3>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating}</h4>
      <h4>Delivery Time : {deliveryTime} mins</h4>
      <h4>{costForTwo} for Two</h4>
    </div>
  );
};

export default RestaurantCard;
