import store from './store';
import { bugAdded, bugResolved } from './actions';

// const unsubscribe = store.subscribe(() => {
//     console.log('Store changed!', store.getState());
// });

store.dispatch(bugAdded('Bug 1'));

// unsubscribe();

store.dispatch(bugResolved(1));

console.log(store.getState());