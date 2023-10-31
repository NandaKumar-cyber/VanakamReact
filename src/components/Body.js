import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
// import resList from "../utils/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useFetchRestaurant from "../utils/useFetchRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Contact from "./Contact";
import Items from "./Items";
import Cuisine from "./Cuisine";

// let resList = [
//     {
//         "data": {
//             "id": "142291",
//             "name": "Aroma's Hyderabad House",
//             "cloudinaryImageId": "vkayq2sflkps7covtwxt",
//             "cuisines": [
//                 "Indian"
//             ],

//             "costForTwo": 50000,

//             "deliveryTime": 34,

//             "avgRating": "4.0",
//         },
//     },
//     {
//         "data": {
//             "id": "90018",
//             "name": "Meghana Foods",
//             "cloudinaryImageId": "fsqyubnn1p1mo57ek4bi",
//             "cuisines": [
//                 "Biryani",
//                 "Andhra",
//                 "South Indian",
//                 "North Indian",
//                 "Chinese",
//                 "Seafood"
//             ],
//             "costForTwo": 50000,
//             "deliveryTime": 46,
//             "avgRating": "4.4",
//             "totalRatings": 10000,
//         }
//     },
//     {
//         "data": {
//             "id": "333696",
//             "name": "Rotti Walla",
//             "cloudinaryImageId": "p6vuboteep2qw4i5sdhg",
//             "cuisines": [
//                 "North Indian",
//                 "Chinese",
//                 "Snacks",
//                 "Beverages"
//             ],
//             "costForTwo": 20000,
//                 "deliveryTime": 30,
//             "avgRating": "4.0",
//         },
//     },
//     {
//         "data": {
//             "id": "10854",
//             "name": "Pizza Hut",
//             "cloudinaryImageId": "josypuyviwt9htbkwpf1",
//             "cuisines": [
//                 "Pizzas"
//             ],

//             "costForTwo": 35000,
//             "deliveryTime": 33,
//             "avgRating": "3.7",
//         }
//     },
//     {
//         "data": {
//             "id": "5935",
//             "name": "Burger King",
//             "deliveryTime": 53,
//             "avgRating": "4.0",

//             "cloudinaryImageId": "zuxeinr1w079k2bmiig9",
//             "cuisines": [
//                 "Burgers",
//                 "American"
//             ],

//             "costForTwo": 35000,
//         }
//     },
//     {
//         "data": {
//             "id": "123638",
//             "name": "Al Ameen Rolls Corner",
//             "deliveryTime": 39,
//             "avgRating": "3.8",
//             "cloudinaryImageId": "so4dcdrgtik8cmqoo1lk",
//             "cuisines": [
//                 "Street Food"
//             ],
//             "costForTwo": 20000,
//         }
//     },
// ]

const Body = () => {
  // const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTextGlobal, setSearchTextGlobal] = useState("");
  // const [filteredList, setFilteredList] = useState(listOfRestaurants);
  //   console.log("Body rendered");
  // useEffect(() => {
  //   console.log("Body rendered");
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(SWIGGY_URL);
  //     const json = await data.json();
  //     console.log(json);
  //     //optional Chaining
  //     setlistOfRestaurants(
  //       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setFilteredList(
  //       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //   } catch (error) {
  //     console.error("Error fetching data for card", error);
  //   }
  // };

  const { listOfRestaurants, filteredList, setFilteredList } =
    useFetchRestaurant(SWIGGY_URL);

  console.log("body rendered", listOfRestaurants);

  // const RestaurantCardOffer = withOfferLabel(RestaurantCard);

  const topRated = () => {
    const highRated = filteredList.filter((item) => item.info.avgRating > 4);
    console.log(highRated);
    setFilteredList(highRated);
  };

  const fastDelivery = () => {
    const instantDelivery = filteredList.filter(
      (item) => item.info.sla.deliveryTime < 25
    );
    console.log(instantDelivery);
    setFilteredList(instantDelivery);
  };

  const searchBtnClick = () => {
    console.log("searchBtnClick", searchText);
    const filteredRestaurant = filteredList.filter((item) => {
      return item?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filteredRestaurant);
    setFilteredList(filteredRestaurant);
  };

  const searchBtnClickGlobal = () => {
    console.log("searchBtnClickGlobal", searchTextGlobal);
    const filteredGlobalRestaurant = listOfRestaurants.filter((item) => {
      return item?.info?.name
        ?.toLowerCase()
        .includes(searchTextGlobal.toLowerCase());
    });
    console.log(filteredGlobalRestaurant);
    setFilteredList(filteredGlobalRestaurant);
  };

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const updateSearchTextGlobal = (e) => {
    setSearchTextGlobal(e.target.value);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are Offline,Check your Internet Connectivity</h1>;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex mt-8">
        <Cuisine />
      </div>
      <div className="w-full h-auto bg-gradient-to-t from-[#c9bcf4] to-[#fff] rounded-b-xl outline-none overflow-hidden">
        <div className=" text-base flex h-20 items-center justify-center text-black font-semibold ">
          <div className="px-4">
            <input
              placeholder="Filter Search"
              className="search-box rounded-lg text-base font-medium px-4 py-1 mr-4 border-solid border-2 border-black shadow-slate-600"
              type="text"
              value={searchText}
              onChange={updateSearchText}
            />
            <button
              onClick={searchBtnClick}
              className="py-1 hover:text-black hover:border-red rounded-lg border-2 p-2 border-black shadow-slate-600 active:scale-90"
            >
              Search
            </button>
          </div>
          <div className="px-4">
            <input
              placeholder="Global Search"
              className="search-box rounded-lg text-base font-medium px-4 py-1 mr-4 border-solid border-2 border-black shadow-slate-600"
              type="text"
              value={searchTextGlobal}
              onChange={updateSearchTextGlobal}
            />
            <button
              onClick={searchBtnClickGlobal}
              className="py-1 over:text-red hover:border-red rounded-lg border-2 p-2 border-black shadow-slate-600 active:scale-90"
            >
              Search
            </button>
          </div>
          <button
            className="px-4 over:text-red hover:border-red rounded-lg border-2 py-1 border-black shadow-slate-600 active:scale-90"
            onClick={topRated}
          >
            Top Rated Restaurant
          </button>
          <button
            className="px-4 ml-4 over:text-red hover:border-red rounded-lg border-2 py-1 border-black shadow-slate-600 active:scale-90"
            onClick={fastDelivery}
          >
            Fastest Delivery
          </button>
        </div>

        <div className="flex flex-row items-center justify-between w-full relative h-full">
          <div className="ml-[11%] mt-15 h-145 max-w-344">
            <h1
              color="text_High_Emphasis"
              className="text-4xl font-semibold leading-12 tracking-wide antialiased text-slate-75"
            >
              Order Food Online in Bengaluru
            </h1>
          </div>
          <div className="mr-24">
            <img
              className="object-cover bg-transparent h-60 w-auto"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
              alt="SWIGGY HEADER IMAGE"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mx-24 rounded-lg ">
        {/* {<RestaurantCard resData={resList[0]} />}
                {<RestaurantCard resData={resList[1]} />}  */}
        {/* {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info.id} resData={restaurant} />
        ))} */}
        {filteredList &&
          Array.isArray(filteredList) &&
          filteredList.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant?.info.id}
              key={restaurant?.info.id}
            >
              <RestaurantCard resData={restaurant} />
              {/* Higher order Component 
              ==> input -> RestaurantCard ->RestaurantCardOffer */}

              {/* {restaurant?.info.aggregatedDiscountInfoV3?.header ===
              undefined ? (
                <RestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCardOffer resData={restaurant} />
              )} */}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
