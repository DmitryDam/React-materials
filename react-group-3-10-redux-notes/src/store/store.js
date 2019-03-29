import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootModule from '../modules/rootModule';

const enhancer = composeWithDevTools();
// composeWithDevTools(); для redux dev-tools

const store = createStore(rootModule, enhancer);

export default store;
