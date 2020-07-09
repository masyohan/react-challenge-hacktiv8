import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import restaurantReducer from "./reducers/restaurantReducer";

const reducers = combineReducers({
    restaurantReducer
})

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;