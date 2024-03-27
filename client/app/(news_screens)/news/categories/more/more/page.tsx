"use client";

import Container from "@/components/Container";
import BrowseCategories from "@/components/browse_categories";
import CategoryItems from "@/components/category_items";
import CategoryTitle from "@/components/category_title";
import { CategoryEnum, CategoryType } from "@/interfaces/news";
import news_selectors from "@/selectors/news";
import Flame from "@/svgs/flame";


function Categories() {
    const { science_news, entertainment_news, sport_news } = news_selectors()
    //  technology_news, weather_news

    return (
        <div className="w-full h-full" id="top">

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.entertainment} title={<span className="flex gap-[1em] items-center">Entertainment</span>} />

                <CategoryItems list={entertainment_news?.slice(0, 6)} query={CategoryEnum.entertainment as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.entertainment}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.science} title={<span className="flex gap-[1em] items-center">Science</span>} />

                <CategoryItems list={science_news?.slice(0, 6)} query={CategoryEnum.science as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.science}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.sport} title={<span className="flex gap-[1em] items-center">Sports</span>} />

                <CategoryItems list={sport_news?.slice(0, 6)} query={CategoryEnum.sport as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.sport}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <BrowseCategories more_categories_link="/news/categories/more" />

        </div>
    )
}

export default Categories;