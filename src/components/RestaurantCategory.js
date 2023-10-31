import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
    // const [showItems, setShowItems] = useState(false);

  console.log(data, "data");
  const { title, itemCards } = data;
  //   console.log(data.itemCards.card.info.name)

  const handleClick = () => {
    setShowIndex()
    // showItems?setShowIndex(null):setShowIndex(index)
    // setShowItems(!showItems);
    console.log("clicked");
  };
  return (
    <div
      className="p-2 mx-auto my-4 bg-gray-50 shadow-lg"
    >
      <div className="flex justify-between cursor-pointer"onClick={handleClick}>
        <span className="font-bold  ">
          {title}({itemCards.length})
        </span>
        {/* <h1>Hello WORLD</h1> */}
        <span>
          <img
            src="https://icons.veryicon.com/png/o/internet--web/industrial-icon/down-arrow.png"
            alt="arrow"
            className={`w-5 pt-1 cursor-pointer ${showItems ? "rotate-180" : ""}`}
          />
        </span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
      {/* <div>
          {data.itemCards[0].card.info.name}
          {data.itemCards.map((i) => {
            console.log(i.card.info.name);
            return (
              <div key={i.card.info.id}>
                <span> {i.card.info.name}</span>
              </div>
            );
          })}
        </div> */}
    </div>
  );
};

export default RestaurantCategory;
