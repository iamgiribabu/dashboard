import {applyMiddleware, createStore, compose, combineReducers} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';
import fetchReducer from './fetch-api/fetch.reducer';
import userReducer from './Users/user.reducer';
import thunk from 'redux-thunk'

const middleware = [thunk]
const rootReducer = combineReducers({
   fetch : fetchReducer,
   users : userReducer,
}) 
    

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        composeWithDevTools()
    )
)

export default store;
