import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./Reducer/auth"
const store = configureStore({ reducer: {authReducer
    
} })
export default store