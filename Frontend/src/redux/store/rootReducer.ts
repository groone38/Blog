import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/user/userReducer';
import { authReducer } from './reducers/auth/authReducer';

export const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch