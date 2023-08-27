import { useEffect, useState } from "react";
import { MENU_API } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId,"resId")

  useEffect(() => {
    fetchMenu();
    console.log("useEffect is rendered");
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API+resId);
      const json = await data.json();
      setResInfo(json.data);
      console.log(json.data);
      console.log(resInfo?.cards[0]?.card?.card?.info?.name);
    } catch (error) {
      console.log("Error fetching menu", error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[0]?.card?.card?.info;


   const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;
   console.log(itemCards);

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
    <div className="MainMenu">
      <h1>{name}</h1>
      <p> {cuisines.join(", ")} - {costForTwoMessage}</p>

       {/* <h3>{itemCards[0].card.info.name}</h3> */} 
      {/* <h3>{itemCards[7].card.info.name}</h3> */}

       <ul>
        {itemCards.map((i)=>{   
         return(
         <li key={i.card.info.id}>
            {i.card.info.name}
          </li>)
        })}
     </ul> 
      {/* <h1>Hello</h1> */}
    </div>
  );
};

export default RestaurantMenu;
