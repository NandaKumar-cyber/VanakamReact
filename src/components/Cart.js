import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/Redux/CartSlice";
import { Link,useNavigate } from "react-router-dom";
import CartList from "./CartList";
// import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems, "cartItems in cart page");
  console.log(cartItems.property);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    // Redirect to the "order" page
    navigate("/order");
  };


  return (
    <div className="place-items-center ">
      {cartItems.length === 0 ? (
        <div>
          <div className="grid place-content-center">
            <img
              className="h-60 ml-36 mt-20"
              // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87"
              alt="empty-cart"
            />
            <h1 className="font-semibold mt-10 text-center mb-2">
              Your cart is empty
            </h1>
            <p>
              Good food is always cooking! Go ahead, order some yummy items from
              the menu.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-red text-white mt-10 capitalize py-3 px-5 border-x-slate-300 rounded-md transition-transform duration-100 ease-in-out flex-col hover:scale-95 ">
              <Link to="/">See All Restaurants Near You</Link>
            </button>
          </div>
        </div>
      ) : (
        //  <ItemList items={cartItems} />
        <div>
          <div className="mx-40 my-10 flex justify-between">
            <p className="text-center font-medium text-xl text-white py-2  px-4 bg-red mb-4 inline-block rounded-md">
              You have {cartItems.length} items in your cart
            </p>
            <button
              className="text-center font-medium text-xl text-white py-2  px-4 bg-lime-500 mb-4 inline-block rounded-md hover:bg-lime-800"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
            {/* {cartItems[1].info.name}  */}
            {/* {cartItems.map((item) => (
            <div key={item.id}>
               <p>{item?.info?.name}</p>
          </div>
          ))} */}
          </div>
          <CartList cartItems={cartItems} />
          <div className="flex justify-center mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:shadow-md"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
        </div>
        
      )}
    </div>
  );
};

export default Cart;
