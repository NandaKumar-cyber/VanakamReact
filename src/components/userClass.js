import React from "react";
import { GIT_USERS } from "../utils/Constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        bio: "default",
      },
    };

    // console.log(props.name, "child constructor");
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("TIMER is Running in CLASS Component");
    }, 1000);

    const data = await fetch(GIT_USERS);
    const json = await data.json();

    console.log(json);
    console.log(this.props.name, "child componentDidMount");
    console.log(json.name, "API NAME");

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("componentWillUnmount is called to stop rendering (kill) the componentDidnMount method")
  }

  render() {
    // const { name, location, position } = this.props;
    // const { count,count2 } = this.state;
    // console.log(name, "child render");
    const { name, bio, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>This is Class Based Components</h1>
        {/* <h1>{count}</h1>
        <button onClick={this.onIncrement}>Increment</button>
        <h1>{count2}</h1>
        <button onClick={()=>{
            this.setState({count2:this.state.count2 + 2})
        }}>Double Increment</button> */}
        <h2>{name}</h2>
        <img
          style={{
            maxWidth: "300px",
            minWidth: "200px",
            width: "auto",
            height: "auto",
          }}
          src={avatar_url}
          alt="img"
        />
        <h2>{login}</h2>
        <h2>{bio}</h2>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default UserClass;
