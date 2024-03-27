import { SERVER_URL } from '@/constants/global';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auth_api = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${SERVER_URL}/auth`, credentials: 'include' }),
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (credentials) => ({
                url: '/signin',
                method: 'POST',
                body: credentials,
            }),
        }),

        signup: builder.mutation({
            query: (credentials) => ({
                url: '/signup',
                method: 'POST',
                body: credentials,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: '/signout',
                method: 'POST',
            })
        })
    }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = auth_api

const initialState: { token: null | string } = {
    token: null,
}

export const auth_slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        set_token: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload as string;
        }
    },
})

export const { set_token } = auth_slice.actions

export default auth_slice.reducer