import React, { Component, createContext } from "react";
import userInfo from "../user-info.json";
// {
//   "name": "Nielsen Norman",
//   "email": "n.norman@gmail.com",
//   "phone": "254-198-2471",
//   "image": "https://semantic-ui.com/images/avatar2/large/matthew.png"
// }

// Дефолтные значения, если не будут найдены те что нужно получить
export const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  onSignIn: () => null,
  onSignOut: () => null
});

export default class AuthContextProvider extends Component {
  static Consumer = AuthContext.Consumer;
  // static Consumer = AuthContext.Consumer; без этого не работает 1:07:30
  // Добавляется свойство Consumer, что бы можно было обращаться   <AuthContext1.Consumer>

  state = {
    isAuthenticated: false,
    user: {}
  };

  onSignIn = () => {
    this.setState({
      isAuthenticated: true,
      user: userInfo
    });
  };

  onSignOut = () => {
    this.setState({
      isAuthenticated: false,
      user: {}
    });
  };

  render() {
    const { isAuthenticated, user } = this.state;

    return (
      <AuthContext.Provider
        // Такой же объект как и в дефолтных значениях, только с реальными значениями
        value={{
          isAuthenticated,
          user,
          onSignIn: this.onSignIn,
          onSignOut: this.onSignOut
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

{
  /* В АПП вместо  {this.props.children}  будет :
  
    <AuthContextProvider>
      <AppBar />
      <UserProfile />
    </AuthContextProvider>
  </> */
}
