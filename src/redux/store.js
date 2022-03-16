import { createStore } from 'redux'
import reducer from "./reducers"

import { getStateLocalStorage, setStateLocalStorage } from '../utils/localStorage';

const localStorageState = getStateLocalStorage();

// createStore(reducer, [preloadedState], [enhancer])
const store = createStore(
    reducer,
    localStorageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe to every change in the state
store.subscribe(()=>{
    // when redux creates the initial states it fires the subscribe method
    // therefore, the notes state is stored in local storage
    setStateLocalStorage(
        {notes : store.getState().notes.notesAdded}
    );
})


export default store;