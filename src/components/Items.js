const Items = (props) => {
  const { cusineData } = props;
  const { id, imageId } = cusineData;
  //  const { text } = cusineData?.info?.action;
  // console.log(id, imageId);
  // console.log("cusine comp rendered");
  return (
    <div className="flex h-[180] w-[144]">
      {/* <h3> id:{id}</h3> */}
      <img  className="flex h-[180] w-[144]"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
      />
      {/* <h3>{imageId}</h3> */}
      {/* <h3>{text}</h3> */}
    </div>
  );
};

export default Items;
