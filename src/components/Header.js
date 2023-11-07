import { LOGO_URL, SWIGGY_URL } from "../utils/Constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_URL } from "../utils/Constants";
import useFetchRestaurant from "../utils/useFetchRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const [searchTextGlobal, setSearchTextGlobal] = useState("");
  console.log("Header render");

  //If no dependency array in useEfeect ,useEffect will called every render.
  //If dependency array is empty = [] = useEffectis called on initial render.(Just Once)
  useEffect(() => {
    console.log("useEfeect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, defaultLocation, setUserLocation } =
    useContext(UserContext);
  console.log(loggedInUser, defaultLocation, "data from createContext");

  const { listOfRestaurants, setFilteredList } = useFetchRestaurant(SWIGGY_URL);

  const changetoLogout = () => {
    btn === loggedInUser ? setBtn("Login") : setBtn(loggedInUser);
    // btn === "Login" ? setBtn("Logout") : setBtn("Login");
  };


  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems,"cartItems")

  // const searchBtnClickGlobal = () => {
  //   console.log("searchBtnClickGlobal", searchTextGlobal);
  //   const filteredGlobalRestaurant = listOfRestaurants.filter((item) => {
  //     return item?.info?.name
  //       ?.toLowerCase()
  //       .includes(searchTextGlobal.toLowerCase());
  //   });
  //   console.log(filteredGlobalRestaurant);
  //   setFilteredList(filteredGlobalRestaurant);
  // };

  // const updateSearchTextGlobal = (e) => {
  //   setSearchTextGlobal(e.target.value);
  // };

  return (
    <div className="container mx-auto flex bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500  justify-between h-28 items-center">
      <div className="logo-container">
        <img className="w-28 h-39 m-32 " src={LOGO_URL} />
      </div>

      <div className="flex  flex-wrap ">
        <ul className="flex items-center text-lg text-black font-semibold ">
          <div className="mx-2 flex  hover:text-black ">
            <input
              placeholder="Set Location"
              className="search-box rounded-lg text-base font-medium px-4 py-1 mr-4 border-solid border-2 border-black shadow-slate-600"
              type="text"
              // value={searchTextGlobal}
              // onChange={updateSearchTextGlobal}
              onChange={(e) => setUserLocation(e.target.value)}
              value={defaultLocation}
            />
            <li
              // onClick={searchBtnClickGlobal}
              className=" px-4 py-1 mr-4 text-base font-medium hover:text-red"
            >
              <span className="flex">
                <img src="https://icons.veryicon.com/png/o/education-technology/passenger-flow-analysis-icon-library/location-21.png" className="w-7 pt-1 cursor-pointer" />
            <div className="pt-1"> {defaultLocation}</div>
              </span>
            </li>
          </div>

          <li className="mx-4 text-base text-black font-medium hover:text-red">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-base font-medium hover:text-red">
            <Link to="./about"> About Us</Link>
          </li>
          {/* <li className="mx-4 text-base font-medium hover:text-red">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          <li className="mx-4 text-base font-medium hover:text-red">
            {onlineStatus ? "✅ " + "Online" :"🔴 "+ "Offline"}
          </li>

          <li className="mx-4 text-base font-medium hover:text-red">
            <Link to="/cart">Cart -({cartItems.length})</Link>
          </li>
          <button
            className="py-1 ml-4 mr-32 text-base font-medium hover:text-black hover:border-red rounded-lg border-2 p-2 border-black shadow-slate-600"
            onClick={changetoLogout}
          >
            {btn === loggedInUser ? (
            <span className="flex">
              <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" className="w-6 pt-1 cursor-pointer" />
            <div className="pt-1"> {loggedInUser}</div> 
            </span>
            ) : (
              <p>Login</p>
            )}
            {/* {btn} */}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
