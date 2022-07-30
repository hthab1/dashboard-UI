import React from "react";
import LoggedinStack from "./LoggedinStack";
import LoginStack from "./LoginStack";
import { useSelector } from "react-redux";

function AppStack() {
  const user = useSelector((state) => state.auth.user);

  return <div>{user ? <LoggedinStack /> : <LoginStack />}</div>;
}

export default AppStack;
