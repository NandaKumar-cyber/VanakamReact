import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="place-items-center">
      <div className="grid place-content-center">
        <img
          className="w-[351px] h-60 ml-24 mt-20"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="empty-cart"
        />
        <h1 className="font-semibold mt-10 text-center mb-2">Your cart is empty</h1>
        <p>
          Good food is always cooking! Go ahead, order some yummy items from the
          menu.
        </p>
      </div>
      <div className="flex justify-center">
      <button className="bg-red text-white mt-10 capitalize py-3 px-5 border-x-slate-300 rounded-md transition-transform duration-100 ease-in-out flex-col hover:scale-95 ">
        <Link to="/"> See All Restaurants Near You</Link>
      </button>
      </div>
    </div>
  );
};

export default Cart;
