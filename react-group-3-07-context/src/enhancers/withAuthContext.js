//"НОС" КОМПОНЕНТ НЕ ИСПОЛЬЗУЕТСЯ (пример использования 41:20), вместо него AuthManager
// Может любой компонент подписать на контекст
import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const withAuthContext = WrappedComponent => {
  return function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {/* Аргумент context, переданный функции, будет содержать значение контекста ближайшего
провайдера для этого контекста выше в дереве */}
        {context => <WrappedComponent {...props} authContext={context} />}
      </AuthContext.Consumer>
    );
  };
};

export default withAuthContext;
