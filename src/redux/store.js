import { configureStore } from '@reduxjs/toolkit'
// import name change kora hoyech ( usersSlice )
import  useReducer  from './user/usersSlice'

export default configureStore({
  reducer: {user : useReducer},
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})