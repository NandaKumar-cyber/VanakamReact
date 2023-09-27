import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId, "resId");

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    totalRatingsString,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  // console.log(itemCards,"itemC");

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  console.log(categories,"categories");

  // const info = resInfo?.data?.cards[0]?.card?.card?.info;

  // if (info) {
  //   const {
  //     name = "Default Name",
  //     cuisines = [],
  //     cloudinaryImageId = "default_image_id",
  //     costForTwoMessage = "Unknown Cost",
  //   } = info;

  //   // Now you can safely use the destructured values here.
  //   console.log(name, cuisines, cloudinaryImageId, costForTwoMessage);
  // } else {
  //   // Handle the case where 'info' is undefined
  //   console.error("Info is undefined.");
  // }

  return (
    <div className="max-w-[800px] mx-auto my-5">
      <div className="flex flex-row justify-between items-center w-full h-[83.0312px] py-16 border-b-[1px] border-dashed border-gray-300 mb-18 overflow-visible">
        <div className="my-4 py-4 text-left">
          <h1 className="text-2xl font-medium">{name}</h1>
          <p className="text-base font-medium">{cuisines.join(", ")}</p>
          <p>{areaName}</p>
        </div>

        <div className="border border-gray-300 shadow-md rounded-lg text-center max-w-xs p-2">
          <div className="flex items-center justify-center gap-1 p-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Five_Pointed_Star_Solid.svg"
              alt="rating_star"
              className="w-5"
            />
            <p>{avgRating}</p>
          </div>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full h-[65px] border-b-[1px] border-dashed border-gray-300 overflow-visible">
        <div className="flex items-center ">
          <svg
            className="RestaurantTimeCost_icon__8UdT4 w-5 h-5 mr-2"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              strokeWidth="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span>{deliveryTime} mins</span>
          <p className="pl-10"> {costForTwoMessage}</p>
        </div>
      </div>
{/* 
      <ul>
        {itemCards &&
          itemCards.map((items) => {
            return (
              <li key={items.card.info.id}>
                {items.card.info.name} - {items.card.info.price / 100}
              </li>
            );
          })}
      </ul> */}
      <div className=" pt-4">
      {categories.map((category) => {
        return <RestaurantCategory  key ={category?.card?.card?.title}data={category?.card?.card} />;
      })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
