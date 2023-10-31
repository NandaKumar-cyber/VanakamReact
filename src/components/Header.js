import { LOGO_URL, SWIGGY_URL } from "../utils/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_URL } from "../utils/Constants";
import useFetchRestaurant from "../utils/useFetchRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const { listOfRestaurants, setFilteredList } = useFetchRestaurant(SWIGGY_URL);

  const changetoLogout = () => {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
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
    <div className="container mx-auto flex bg-gradient-to-b from-[#edecef] to-[#f9e0e0] justify-between h-28 items-center">
      <div className="logo-container">
        <img className="w-28 h-39 m-32 " src={LOGO_URL} />
      </div>

      <div className="flex  flex-wrap ">
        <ul className="flex items-center text-lg text-black font-semibold ">
          <div className="mx-4  hover:text-black ">
            <input
              placeholder="Global Search"
              className="search-box rounded-lg text-base font-medium px-4 py-1 mr-4 border-solid border-2 border-black shadow-slate-600"
              type="text"
              value={searchTextGlobal}
              onChange={updateSearchTextGlobal}
            />
            <button
              onClick={searchBtnClickGlobal}
              className="py-1 hover:bgbg-zinc-300 hover:text-black hover:border-red rounded-lg border-2 p-2 border-black shadow-slate-600 active:scale-90 text-base"
            >
              Search
            </button>
          </div>

          <li className="mx-4 text-base text-black font-medium hover:text-red">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-base font-medium hover:text-red">
            <Link to="./about"> About Us</Link>
          </li>
          <li className="mx-4 text-base font-medium hover:text-red">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-4 text-base font-medium hover:text-red">
            {onlineStatus ? "Online" : "Offline"}
          </li>

          <li className="mx-4 text-base font-medium hover:text-red">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="py-1 ml-4 mr-32 text-base font-medium hover:text-black hover:border-red rounded-lg border-2 p-2 border-black shadow-slate-600"
            onClick={changetoLogout}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
