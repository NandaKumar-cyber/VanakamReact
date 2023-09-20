import { CDN_URL, RATING_GREEN, RATING_RED } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, areaName } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="rounded-lg mt-10 p-2 mx-[12] w-[240px]  max-w-[325px] w-max-content h-max-content flex cursor-pointer  justify-center  transition-transform duration-100 ease-in-out flex-col hover:scale-95  ">
      <h3 className="font-bold text-lg pb-4">{name}</h3>
      <div className="">
      <img
        alt="res-logo"
        className="rounded-lg object-cover w-full h-auto"
        src={CDN_URL + cloudinaryImageId}
      />
      </div>
      <h4 className="font-bold ">{cuisines.slice(0, 5).join(", ")}</h4>
      {/* {avgRating >= 4.0 ?({RATING_GREEN}) :({RATTING_RED}) } */}
      <div className="flex py-[2]">
        {avgRating >= 4 ? (
          <span className="pt-1">{RATING_GREEN}</span>
        ) : (
          <span className="pt-1">{RATING_RED}</span>
        )}
        <h4 className="pl-1"> {avgRating}</h4>
        <h4 className="pl-28">{deliveryTime} mins</h4>
      </div>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
