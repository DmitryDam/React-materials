import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// persistStore оборачивает редакс хранилище (см ниже)
// persistReducer- оборачивает редюссер
// storage -Local Storage
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import sessionReducer from "./sessionReducer";

// конфигурация persist
// persist верхнего уровня
const rootPersistConfig = {
  key: "root",
  // key: "root",-ключ по которому в local storage будет
  storage,
  // storage ссылка на import storage from "redux-persist/lib/storage";
  whitelist: ["cart"]
};
// persist для вложенного, сессия "session"
// Из него взять только "token"
const sessionPersistConfig = {
  key: "session",
  storage,
  whitelist: ["token"]
};

const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
  cart: (state = []) => state
});

// Первый аргумент (конфигурация persist)
// Второй аргумент rootReducer
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);
// const store = createStore(rootModule, enhancer);  раньше было так
export const persistor = persistStore(store);
// persistor - функция будет контролировать запись в Local Storage

// 1. пишем конфиг персиста кусков стейта
// 2. оборачивает редюсеры в персист с конфигами
// 3. оборачиваем стор в персистор
// 4. ставим гейт
// 5. пишем логику рефреша юзвера
// https://github.com/rt2zz/redux-persist
