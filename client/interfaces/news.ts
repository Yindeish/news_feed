import { User } from "./user"

enum CategoryEnum {
    local = 'local',
    politics = 'politics',
    entertainment = 'entertainment',
    sport = 'sport',
    earth = 'earth',
    automobile = 'automobile',
    technology = 'technology',
    education = 'education',
    business = 'business',
    life_style = 'life_style',
    crime = 'crime',
    fashion = 'fashion',
    weather = 'weather',
    science = 'science',
}

type CategoryType = CategoryEnum.automobile | CategoryEnum.politics | CategoryEnum.entertainment | CategoryEnum.sport | CategoryEnum.earth | CategoryEnum.automobile | CategoryEnum.technology | CategoryEnum.education | CategoryEnum.business | CategoryEnum.life_style | CategoryEnum.crime | CategoryEnum.fashion | CategoryEnum.weather | CategoryEnum.science;

interface News {
    id: number,
    source: {
        id: string,
        name: string
    },
    author: null | User,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string | Date,
    content: string
}

interface NewsState extends NewsArrays {
    country: string,
    query: string,
    category: string,
    date: string | Date,
    // Headline news -> not in category
    top_head_line_news: News[],
    // Headline news -> not in category
    categories: string[],
    current_news: News | null,
    current_related_news: News[],
}

interface NewsArrays {
    local_news: News[],
    politics_news: News[],
    entertainment_news: News[],
    sport_news: News[],
    earth_news: News[],
    technology_news: News[],
    education_news: News[],
    business_news: News[],
    life_style_news: News[],
    crime_news: News[],
    fashion_news: News[],
    science_news: News[],
    weather_news: News[],
    // [key: string]: News[] | null
}

export type { News, NewsState, CategoryType, NewsArrays }
export { CategoryEnum }

