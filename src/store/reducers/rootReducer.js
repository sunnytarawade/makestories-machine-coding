import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'

const persistConfig = {
    key : "root",
    storage,
    whiteList : ['userReducer'],
    blackList : ['loadingReducer']
}

let rootReducer = combineReducers({
    userReducer,
    loadingReducer
})

export default persistReducer(persistConfig,rootReducer)