import { useDispatch } from "react-redux";
// import {removeItem} from "../utils/Redux/CartSlice"
import { removeItem ,clearCart} from "../utils/Redux/CartSlice";
import {useNavigate} from "react-router-dom"


const CartList = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handlePlaceOrder = () => {
    // Redirect to the "order" page
    navigate("/order");
  };

  return (
    <div>
      <div className="place-items-center">
        {cartItems.map((cartt, index) => (
          <div
            key={index}
            className=" p-4 mx-auto text-center flex-grow w-4/12 r rounded-xl shadow-md border-b-[1px] py-5 flex relative hover:bg-orange-100"
          >
            <div className="flex-grow w-5/12">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                  cartt?.info?.imageId
                }
                alt=""
                className="w-40 h-24 mx-4 rounded-md object-cover"
              />
            </div>
            <div className="items-center ml-5">
              <span className="font-bold">{cartt.info.name}</span>
              <p className=" text-[#7c7c7c] font-semibold">
                {" "}
                ₹
                {cartt?.info?.price
                  ? cartt?.info?.price / 100
                  : cartt?.info?.defaultPrice / 100}
              </p>
            </div>
            <div>
              <button
                className="bg-slate-300 ml-20 py-1 px-2 rounded-full hover:shadow-md"
                onClick={() => {
                  handleRemoveItem(cartt?.info?.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {/* <button
          className="p-2 bg-red-400 hover:bg-red-600 hover:shadow-md rounded-full text-white"
          onClick={() => {
            handleRemoveItem(item?.info?.id);
          }}
        >
        Remove
        </button> */}
      </div>

      {/* Payment Button */}
    
    </div>
  );
};

export default CartList;
