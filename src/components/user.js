import { useState, useEffect } from "react";
import { GIT_USERS } from "../utils/Constants";
const User = (props) => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(2);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchGitData();
    const timer = setInterval(() => {
      console.log("Functional Timer Started");
    }, 1000);
    console.log("useEffect called");

    return () => {
      clearInterval(timer);
      console.log("useEffect returned(unmounted)");
    };
  }, []);
  console.log("Component rendered");
  const fetchGitData = async () => {
    const data = await fetch(GIT_USERS);
    const json = await data.json();
    setUser(json);
    console.log(json);
    console.log(json.name);
  };
  const countIncrement = () => {
    const incrementedCount = count + 1;
    setCount(incrementedCount);
  };
  const countDecrement = () => {
    const decrementedCount = count - 1;
    setCount(decrementedCount);
  };

  const evenIncrement = () => {
    const evenIncrementedCount = count2 + 2;
    setCount2(evenIncrementedCount);
  };

  const evenDecrement = () => {
    const evenDecrementedCount = count2 - 2;
    setCount2(evenDecrementedCount);
  };

  const { name, location, bio, login, avatar_url } = user;
  // console.log(props);
  return (
    <div className="user-card">
      <h1>This Functional based Components</h1>
      <h2>{name}</h2>
      {/* <button onClick={countIncrement}>Increment</button>
      <button onClick={countDecrement}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={evenIncrement}>Even Increment</button>
      <button onClick={evenDecrement}>Even Decrement</button>
      <h2>{count2}</h2>*/}
      <img
        style={{
          maxWidth: "300px", // Set the maximum width
          minWidth: "200px",
          width: "auto",
          height: "auto",
        }}
        src={avatar_url}
        alt="img"
      />

      {/* <h2>{props.name}</h2> */}
      <h2>{login}</h2>
      <h2>{bio}</h2>
      <h2>{location}</h2>
    </div>
  );
};

export default User;
