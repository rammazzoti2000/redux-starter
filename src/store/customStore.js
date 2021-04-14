import reducer from './reducer';

function createStore(reducer) {
    let state;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        // Call the reducer to get the new state
        state = reducer(state, action);

        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    function getState() {
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState
    };
}

export default createStore(reducer);