import { CDN_URL, RATING_GREEN, RATING_RED } from "../utils/Constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="rounded-lg mt-10 p-2 mx-[12] w-[240px]  max-w-[325px] w-max-content h-max-content flex cursor-pointer  justify-center  transition-transform duration-100 ease-in-out flex-col hover:scale-95  ">
      <h3 className="font-bold text-lg pb-4">{name}</h3>
      <div className="relative z-10 w-full bg-gradient-to-b from-[#edecef] to-[#f9e0e0]">
        <img
          alt="res-logo"
          className="rounded-lg object-cover w-full h-auto"
          src={CDN_URL + cloudinaryImageId}
        />
        <p className="offer absolute bottom-2 z-20 text-white bg-black bg-opacity-75 rounded-lg p-2 mx-6">
          {aggregatedDiscountInfoV3?.header === undefined
            ? ""
            : `${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}
        </p>
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

//Higher order Component

// ==> input -> RestaurantCard -> RestaurantCardOffer

// export const withOfferLabel = (RestaurantCard) => {
//   return (props) => {
//     const { resData } = props;
//     const { aggregatedDiscountInfoV3 } = resData?.info;
//     return (
//       <div>
//         <div className="relative z-10 w-full">
//           {/* <p className="offer absolute bottom-2 z-20 text-white bg-black bg-opacity-75 rounded-lg p-2 mx-6"> */}
//           {/* <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
//             {aggregatedDiscountInfoV3?.header === undefined
//               ? ""
//               : `${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}
//           </label> */}
//            {/* </p> */}
//         </div>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
