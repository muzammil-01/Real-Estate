import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import {
    userLoginReducer,
    userRegisterReducer,
} from './reducers/userReducers'

import {
    addPropertyReducer,
    allPropertiesReducer,
    propertyDetailsReducer,
    userSpecificPropertiesReducer
} from './reducers/propertyReducers'

import {
    walletConnect,
    // sellerClone
} from './reducers/walletConnectReducer'

const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    propertyAdd: addPropertyReducer,
    listAll: allPropertiesReducer,
    userSpecificProperties: userSpecificPropertiesReducer,
    propertyDetails: propertyDetailsReducer,
    // clone:sellerClone,
    wallet:walletConnect
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(
    reducer,
   initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store