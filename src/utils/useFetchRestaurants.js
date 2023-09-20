import { useState, useEffect } from "react";

const useFetchRestaurant = (SWIGGY_URL) => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState(listOfRestaurants);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [SWIGGY_URL]);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setIsLoading(false);
    // console.log(setlistOfRestaurants)
  };

  return {listOfRestaurants, filteredList,setFilteredList};
};

export default useFetchRestaurant;
