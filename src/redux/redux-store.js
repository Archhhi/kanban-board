import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import boardReducer from "./board-reducer";

let reducers = combineReducers({
    board: boardReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
window.__store__ = store;

export default store;