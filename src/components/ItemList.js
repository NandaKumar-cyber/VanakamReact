import { CDN_URL } from "../utils/Constants";

const ItemList = ({ items }) => {
  console.log(items, "items");
  //    console.log(items.card.info.name)
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-[1px] py-5 flex relative "
        >
          <div className="flex-grow w-9/12">
            <span className="font-bold text-base ">{item.card.info.name}</span>
            <div className="py-2">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}{" "}
            </div>
            <div>{item.card.info.description}</div>
          </div>
          <div className="">
            <img
              className="w-28 h-24 items-end rounded-md "
              src={CDN_URL + item.card.info.imageId}
            />
            <button className="absolute bottom-0 right-0 bg-white text-black px-2 py-1 rounded-md">
              {" "}
              +Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
