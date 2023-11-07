import React from "react"

const Order = () =>{
    return(
        <div>
            <h1 className="font-semibold mt-10 text-center mb-2">Order Success..!</h1>
            <h1 className="font-semibold mt-5 text-center mb-2">
            Your Order has Received
            </h1>
            <div className="grid place-content-center">
            <img
              className="h-60 ml-20 mt-16"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt="order-preparing"
            />
           
            <p className="mt-10">
              It takes sometime cook Good Food,Thanks for your patience.
            </p>
          </div>
        </div>
    )
}

export default Order