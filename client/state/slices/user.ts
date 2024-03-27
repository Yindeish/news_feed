import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PayloadAction } from '@reduxjs/toolkit';


export const user_api = createApi({
    reducerPath: 'user_api',
    baseQuery: fetchBaseQuery({ baseUrl: `$/admin/me/dashboard`, credentials: 'include', }),
    endpoints: (builder) => ({

        // search_users: builder.mutation({
        //     query: ({ search_text, page, per_page }: { search_text: string, page: number, per_page: number }) => ({
        //         url: `/users/search?page=${page}&per_page=${per_page}`,
        //         method: 'POST',
        //         body: { search_text }
        //     })
        // }),
        // get_: builder.query({
        //     query: ({ user_id }: { user_id: string }) => `/user/${user_id}`,
        // }),

    }),
})

export const { } = user_api;

const initialState = {
    users: [],
    user_under_review: null,
    is_loading: false,
    book_marks: []
}

const admin_slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_users: (state, action: PayloadAction<[]>) => {
            state.users = action.payload;
        },
        set_is_loading: (state, action: PayloadAction<boolean>) => {
            state.is_loading = action.payload;
        },
        set_book_marks: (state, action) => { }
    }
})

export const { set_users, set_is_loading } = admin_slice.actions;

export default admin_slice.reducer;