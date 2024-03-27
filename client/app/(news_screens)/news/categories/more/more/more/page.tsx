"use client";

import Container from "@/components/Container";
import BrowseCategories from "@/components/browse_categories";
import CategoryItems from "@/components/category_items";
import CategoryTitle from "@/components/category_title";
import { CategoryEnum, CategoryType } from "@/interfaces/news";
import news_selectors from "@/selectors/news";


function Categories() {
    const { technology_news, weather_news } = news_selectors()

    return (
        <div className="w-full h-full" id="top">

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.technology} title={<span className="flex gap-[1em] items-center">Technology</span>} />

                <CategoryItems list={technology_news?.slice(0, 6)} query={CategoryEnum.technology as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.technology}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.weather} title={<span className="flex gap-[1em] items-center">Weather</span>} />

                <CategoryItems list={weather_news?.slice(0, 6)} query={CategoryEnum.weather as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.weather}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <BrowseCategories more_categories_link="/news/categories/more" />

        </div>
    )
}

export default Categories;