import React from "react";
import { useStateValue } from "../StateProvider";
import LoggedinStack from "./LoggedinStack";
import LoginStack from "./LoginStack";

function AppStack() {
  const { state, dispatch } = useStateValue();

  return <div>{state.user ? <LoggedinStack /> : <LoginStack />}</div>;
}

export default AppStack;
