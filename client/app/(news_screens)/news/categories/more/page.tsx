"use client";

import Container from "@/components/Container";
import BrowseCategories from "@/components/browse_categories";
import CategoryItems from "@/components/category_items";
import CategoryTitle from "@/components/category_title";
import { CategoryEnum, CategoryType } from "@/interfaces/news";
import news_selectors from "@/selectors/news";


function Categories() {
    const { fashion_news, life_style_news, politics_news } = news_selectors()


    return (
        <div className="w-full h-full" id="top">
            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.fashion} title={<span className="flex gap-[1em] items-center">Fashion</span>} />

                <CategoryItems list={fashion_news?.slice(0, 6)} query={CategoryEnum.fashion as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.fashion}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.life_style} title={<span className="flex gap-[1em] items-center">Life Style</span>} />

                <CategoryItems list={life_style_news?.slice(0, 6)} query={'life style' as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.life_style}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>

            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={CategoryEnum.politics} title={<span className="flex gap-[1em] items-center">Politics</span>} />

                <CategoryItems list={politics_news?.slice(0, 6)} query={CategoryEnum.politics as CategoryType} />

                <a href={`/news/categories/${CategoryEnum.politics}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

            </Container>


            <BrowseCategories more_categories_link="/news/categories/more/more" />

        </div>
    )
}

export default Categories;