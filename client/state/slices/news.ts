import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PayloadAction, WritableDraft } from '@reduxjs/toolkit';
import { CategoryEnum, CategoryType, News, NewsState } from '@/interfaces/news';
import { NEWS_API_KEY, NEWS_API_URL } from '@/constants/global';
import { last_3_days, today_date } from '@/utils';


export const news_api = createApi({
    reducerPath: 'news_api',
    baseQuery: fetchBaseQuery({ baseUrl: `${NEWS_API_URL}`, }),
    endpoints: (builder) => ({

        // search_users: builder.mutation({
        //     query: ({ search_text, page, per_page }: { search_text: string, page: number, per_page: number }) => ({
        //         url: `/users/search?page=${page}&per_page=${per_page}`,
        //         method: 'POST',
        //         body: { search_text }
        //     })
        // }),

        get_everything: builder.query({
            query: ({ query, date }: { query: string, date?: string }) =>
                `/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`,
        }),

        get_top_headlines: builder.query({
            query: ({ category, country }: { category: string, country: string }) => `/top-headlines?country=${country}&category=${category}&apiKey=${NEWS_API_KEY}`,
        }),


        get_news: builder.query({
            query: ({ }: {}) => ``,
        }),

    }),
})

export const { useGet_everythingQuery, useGet_top_headlinesQuery } = news_api;

const categories = [
    'local',
    'politics',
    'entertainment',
    'sport',
    'earth',
    'automobile',
    'technology',
    'education',
    'business',
    'life style',
    'crime',
    'fashion',
    'weather',
    'science',
]

const initialState: NewsState = {
    country: 'ng', // ng -> nigeria
    query: CategoryEnum.sport,
    category: CategoryEnum.politics,
    date: last_3_days,
    // Headline news -> not in category
    top_head_line_news: [],
    // Headline news -> not in category
    business_news: [],
    categories,
    crime_news: [],
    current_news: null,
    current_related_news: [],
    earth_news: [],
    education_news: [],
    entertainment_news: [],
    fashion_news: [],
    life_style_news: [],
    local_news: [],
    politics_news: [],
    science_news: [],
    sport_news: [],
    technology_news: [],
    weather_news: []
}

const news_slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_news: (state: WritableDraft<NewsState>, action: PayloadAction<{ name: string, news: News[] }>) => {
            const { name, news } = action.payload;
            state[name + '_news'] = news;
        },

        set_top_head_line_news: (state: WritableDraft<NewsState>, action: PayloadAction<News[]>) => {
            state.top_head_line_news = action.payload;
        },

        set_current_news: (state, action: PayloadAction<News | null>) => {
            state.current_news = action.payload;
        },

        set_query: (state, action) => {
            state.query = action.payload as CategoryType;
        },

        set_category: (state, action) => {
            state.category = action.payload;
        },

        set_country: (state, action) => {
            state.country = action.payload;
        },

        set_date: (state, action) => {
            state.date = action.payload;
        },
    }
})

export const { set_current_news, set_top_head_line_news, set_news, set_category, set_country, set_date, set_query } = news_slice.actions;

export default news_slice.reducer;