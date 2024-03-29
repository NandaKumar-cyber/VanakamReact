import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/Constants";
import Items from "./Items";
const Cuisine = () => {
  const [listOfCusines, setListOfCusines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();

      // console.log("cusines", json);
      setListOfCusines(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap ml-28">
      <h1 className="text-xl font-semibold">What's on Your Mind..!</h1>
      {/* {console.log(listOfCusines, "list of cusines")} */}
      <div className="flex flex-wrap">
      {listOfCusines.slice(0, 9).map((dishes) => (
        <Items key={dishes?.id} cusineData={dishes} />
      ))}
      </div>
    </div>
  );
};

export default Cuisine;
