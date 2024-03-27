import { configureStore } from '@reduxjs/toolkit';
import auth, { auth_api } from './slices/auth';
import user, { user_api } from './slices/user';
import news, { news_api } from './slices/news';
import layout from './slices/layout';

export const store = configureStore({
    reducer: {
        auth,
        user,
        news,
        layout,
        [auth_api.reducerPath]: auth_api.reducer,
        [user_api.reducerPath]: user_api.reducer,
        [news_api.reducerPath]: news_api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(auth_api.middleware, user_api.middleware, news_api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch