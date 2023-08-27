import { LOGO_URL } from "../utils/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setBtn] = useState("login");
  console.log("Header render");

  //If no dependency array in useEfeect ,useEffect will called every render.
  //If dependency array is empty = [] = useEffectis called on initial render.(Just Once)
  useEffect(() => {
    console.log("useEfeect called");
  }, []);

  const changetoLogout = () => {
    btn === "login" ? setBtn("logout") : setBtn("login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
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
