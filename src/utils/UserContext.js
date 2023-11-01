import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  defaultLocation : "Update Location",
});

export default UserContext;


