import React, { Component } from "react";
import UserProfile from "./UserProfile";
import AppBar from "./AppBar";
import AuthContextProvider from "../contexts/AuthContext";

const App = () => (
  <>
    <AuthContextProvider>
      {/* <AppBar /> => <AuthManager /> - то что в хедере */}
      <AppBar />
      <UserProfile />
      {/* <UserProfile /> то что под хедером */}
    </AuthContextProvider>
  </>
);

export default App;
