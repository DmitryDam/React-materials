import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// Можно руками написать и будет работать:

// const thunk = ({ dispatch, getState }) => next => action =>
// typeof action === 'function' ? action(dispatch, getState) :
// next(action);

import rootModule from '../modules/rootModule';

const logger = createLogger();
// Порядок передачи прослоек имеет значение
const middlewares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootModule, enhancer);

export default store;
// composeWithDevTools(); для redux dev-tools
// Аршументом можно передать enhancer для applyMiddleware
// Для того чтобы использовать прослойку необходимо добавить ее при создании хранилища. Для этого у
// Redux есть функция applyMiddleware, которая принимает произвольное количество аргументов.
// Результат ее вызова мы передаем как аргумент enhancer в createStore.

// Ссылка на код в первой части вебинара
// https://codesandbox.io/s/lx88689ppq
