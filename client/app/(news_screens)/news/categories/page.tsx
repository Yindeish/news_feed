"use client";

import Container from "@/components/Container";
import BrowseCategories from "@/components/browse_categories";
import CategoryItems from "@/components/category_items";
import CategoryTitle from "@/components/category_title";
import { CategoryEnum, CategoryType } from "@/interfaces/news";
import news_selectors from "@/selectors/news";

function Categories() {
    const { crime_news, earth_news, education_news } = news_selectors()

    return (
        <div className="w-full h-full" id="top">
            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.crime} title={<span className="flex gap-[1em] items-center">Crime</span>} />

                <CategoryItems list={crime_news?.slice(0, 6)} query={CategoryEnum.crime as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.crime}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.earth} title={<span className="flex gap-[1em] items-center">Earth</span>} />

                <CategoryItems list={earth_news?.slice(0, 6)} query={CategoryEnum.earth as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.earth}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.education} title={<span className="flex gap-[1em] items-center">Education</span>} />

                <CategoryItems list={education_news?.slice(0, 6)} query={CategoryEnum.education as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.education}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <BrowseCategories more_categories_link="/news/categories/more" />

        </div>
    )
}

export default Categories;