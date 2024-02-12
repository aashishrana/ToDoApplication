import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk"
import {TodoReducer} from "./reducers/TodoReducers"

const reducer = combineReducers({
    // this contains all reducers
    Todo : TodoReducer
});

// creating state
const initialState = {}

const middleware = [thunk];


// creating store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;



// create store is used to create store 
//combineReducers is used to combine all the reducers
// applymiddleware is used to apply the middleware redx thunk
// Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.