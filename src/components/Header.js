import React, { useState } from "react";
import "./App.css";
import { LOGO_CDN } from "../utils/constant";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import { useSelector } from "react-redux";
// import { MultiContext } from "../utils/UserContext";
const Header = () => {
  const [btn, setBtn] = useState("Login");
  // const { userName } = useContext(MultiContext);
  const onlineStatus = UseOnlineStatus();
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);
  return (
    <div>
      <div className="flex justify-between bg-pink-500 shadow-lg items-center sm:bg-yellow-400 lg:bg-green-400">
        <div className="logoContainer">
          <img src={LOGO_CDN} className="w-9" alt="" />
        </div>
        <div className="linkContainer">
          <ul className="flex p-4 m-4">
            <li>Online Status:{onlineStatus ? "✔" : "🎈"}</li>
            <li className="px-4">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/About">About</Link>
            </li>
            <li className="px-4">
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">Cart({cartItems.length} items) </Link>
            </li>
            <button
              className="lgoin"
              onClick={() => {
                btn === "Login" ? setBtn("Logout") : setBtn("Login");
              }}
            >
              {btn}
            </button>
            //comment
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
