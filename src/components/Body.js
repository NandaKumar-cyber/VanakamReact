import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/MockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useFetchRestaurant from "../utils/useFetchRestaurants";

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
 
  //  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
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

  const topRated = () => {
    const highRated = listOfRestaurants.filter(
      (item) => item.info.avgRating > 4
    );
    console.log(highRated);
    setFilteredList(highRated);
  };

  const fastDelivery = () => {
    const instantDelivery = filteredList.filter(
      (item) => item.info.sla.deliveryTime < 30
    );
    console.log(instantDelivery);
    setFilteredList(instantDelivery);
  };

  const searchBtnClick = () => {
    console.log("searchBtnClick", searchText);
    const filteredRestaurant = listOfRestaurants.filter((item) => {
      return item?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filteredRestaurant);
    setFilteredList(filteredRestaurant);
  };

  const updateSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={updateSearchText}
          />
          <button onClick={searchBtnClick}>Search</button>
        </div>
        <button className="btn" onClick={topRated}>
          Top Rated Restaurant
        </button>
        <button className="btn" onClick={fastDelivery}>
          Fastest Delivery
        </button>
      </div>
      <div className="res-container">
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
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
