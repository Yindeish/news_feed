import { useAppSelector } from "@/hooks/state_types";
import { RootState } from "@/state/store";


function news_selectors() {
    const { categories, top_head_line_news, business_news, crime_news, current_news, current_related_news, earth_news, education_news, entertainment_news, fashion_news, life_style_news, local_news, politics_news, science_news, sport_news, technology_news, weather_news, category, country, date, query } = useAppSelector((state: RootState) => state.news);

    return { categories, top_head_line_news, business_news, crime_news, current_news, current_related_news, earth_news, education_news, entertainment_news, fashion_news, life_style_news, local_news, politics_news, science_news, sport_news, technology_news, weather_news, category, country, date, query }
}

export default news_selectors;