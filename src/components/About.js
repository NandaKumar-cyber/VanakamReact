import React, { Component } from "react";
import User from "./user";
import UserClass from "./userClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor")
  }

  componentDidMount(){
    // console.log("parent componentDidMount")
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        {/* <h1>About us Page</h1> */}
        <UserClass
          name={"Nanda Kumar - Class"}
          location={"Bangalore - Class"}
          position={"Frontend Developer - Class"}
        />
        {/* <User  name={"Nanda Kumar -Function"}
          location={"Bangalore-Function"}
          position={"Frontend Developer - Function"}/> */}
      </div>
    );
  }
}
export default About;
