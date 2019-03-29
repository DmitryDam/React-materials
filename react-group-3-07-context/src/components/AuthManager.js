// То что в Хедере
import React, { Component } from "react";
import UserMenu from "./UserMenu";
import Button from "./Button";
import { AuthContext } from "../contexts/AuthContext";

export default class AuthManager extends Component {
  // Передается ссылка на контекст. В классовом компоненте (1:15:30)
  // Пока что можно использовать 1 контекст, потом можно будет больше
  static contextType = AuthContext;

  componentDidMount() {
    console.log("AuthManager - то что в хедере- this.context", this.context);
  }

  render() {
    const { isAuthenticated, user, onSignIn, onSignOut } = this.context;
    // Синтаксис рендера по условию
    return isAuthenticated ? (
      // {...user} прокинул все пропы
      <UserMenu {...user} onSignOut={onSignOut} />
    ) : (
      <Button label="Sign In" onClick={onSignIn} />
    );
  }
}
