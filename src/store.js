import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';

const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true })
);
console.log(store.devToolsEnhancer)

export default store;