import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers/appReducer";

const middleware = [thunk]
const initialState={}
export const store = createStore(
    appReducer,
    initialState, 
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)