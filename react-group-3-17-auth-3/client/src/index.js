import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
// { PersistGate } Для того, что бы все данные из Local Storage
// поступили в store
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* loading={null} ссылка на компонент, который показывать при загрузке */}
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// - При логине или логауте сохранить/удалить токен в localstorage
// - При посещении страницы, если токен в localstorage есть
//   - Запрос на бекенд, отсылая токен
