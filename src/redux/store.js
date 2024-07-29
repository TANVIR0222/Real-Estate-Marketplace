import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  useReducer  from './user/usersSlice'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore } from 'redux-persist'

const rootReducer = combineReducers({user: useReducer})
// redux-persist -> using doc 
const persistConfig = {
  key: 'root',
  storage,
  version:1,
}

// redux-persist -> using doc 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

// redux-persist -> using doc 
export const persistor = persistStore(store)