import { LOGO_URL, SWIGGY_URL } from "../utils/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_URL } from "../utils/Constants";
import useFetchRestaurant from "../utils/useFetchRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("login");
  const [searchTextGlobal, setSearchTextGlobal] = useState("");
  console.log("Header render");

  //If no dependency array in useEfeect ,useEffect will called every render.
  //If dependency array is empty = [] = useEffectis called on initial render.(Just Once)
  useEffect(() => {
    console.log("useEfeect called");
  }, []);

  const onlineStatus = useOnlineStatus();

  const { listOfRestaurants, setFilteredList } = useFetchRestaurant(SWIGGY_URL);

  const changetoLogout = () => {
    btn === "login" ? setBtn("logout") : setBtn("login");
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

  const updateSearchTextGlobal = (e) => {
    setSearchTextGlobal(e.target.value);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <div className="search">
            <input
              placeholder="Global Search"
              className="search-box"
              type="text"
              value={searchTextGlobal}
              onChange={updateSearchTextGlobal}
            />
            <button onClick={searchBtnClickGlobal}>Search</button>
          </div>
          <li>{onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./about"> About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button onClick={changetoLogout}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
