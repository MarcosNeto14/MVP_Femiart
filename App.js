import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  const [user, setUser] = useState();

  return;
  !user ? <Login setUser={setUser} /> : <SignUp />;
  (<NavigationContainer>
    <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />
    <Routes />
  </NavigationContainer>);
}
