"use client";

import Container from "@/components/Container";
import BrowseCategories from "@/components/browse_categories";
import CategoriesIndicators from "@/components/categories_indicators";
import CategoryItems from "@/components/category_items";
import CategoryTitle from "@/components/category_title";
import NewNewsIndicators from "@/components/new_news_indicators";
import Spinner from "@/components/spinner";
import use_fonts from "@/constants/fonts";
import { images } from "@/constants/images";
import { useAppDispatch } from "@/hooks/state_types";
import { CategoryEnum, CategoryType, News } from "@/interfaces/news";
import news_selectors from "@/selectors/news";
import { set_top_head_line_news, useGet_everythingQuery, useGet_top_headlinesQuery } from "@/state/slices/news";
import Flame from "@/svgs/flame";
import Triangle from "@/svgs/triangle";
import { today_date, today_gmt_time } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function NewsScreenHome() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { inter, open_sans } = use_fonts();
    const { business_news, local_news, category, country, top_head_line_news, date } = news_selectors()

    const { isLoading: top_headlines_loading, data: top_headlines_data, error: top_headlines_error } = useGet_top_headlinesQuery({ category, country });

    const { isLoading: headline_loading, data: headline_data, error: headline_error } = useGet_everythingQuery({ query: CategoryEnum.politics, date: date as string });

    const go_to_news = (news: News) => {
        localStorage.setItem('current_news', JSON.stringify(news))
        router.push(`/news/${news?.id}-category-local`)
    }

    useEffect(() => {
        const articles = (headline_data?.articles as News[])?.map((article, index: number) => ({ ...article, id: index, urlToImage: article?.urlToImage || 'https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image-1536x1024.png' }));;

        dispatch(set_top_head_line_news(articles));
    }, [headline_loading, headline_data, headline_error])

    useEffect(() => {
        // const articles = (top_headlines_data?.articles as News[])?.map((article, index: number) => ({ ...article, id: index }));;

        // dispatch(set_top_head_line_news(articles));
    }, [top_headlines_loading, top_headlines_data, top_headlines_error])

    return (
        <div className="w-full h-full" id="top">

            {/* Hero */}
            <div className="w-full h-[fit-content] flex flex-col gap-[1em] pb-[1em]">
                <Container className="flex gap-[3em] py-[3em] h-[75%]">
                    <div className="w-[55%] h-full flex flex-col gap-[2em]">
                        {!headline_loading ? <img className="w-full h-[400px] object-cover rounded-[1.5em]" src={headline_data?.articles?.[0]?.urlToImage} alt={headline_data?.articles?.[0]?.title} />
                            :
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-[60px] h-[60px] mx-auto"><Spinner h={60} w={60} /></div>
                            </div>
                        }

                        <div className="text-[20px] text-black font-[600]">
                            {headline_data?.articles?.[0]?.title}
                        </div>
                    </div>

                    <div className="w-[45%] h-[fit-content] pb-[1em] flex flex-col gap-[1.5em]">
                        <div className="w-full flex gap-[1.5em]">
                            <div className="w-[48%] flex flex-col gap-[0.5em] items-center rounded-tl-[1.5em] bg-[#ED1507] p-[1em] text-white">
                                <span className="text-[16px]">Weather Temperature</span>

                                <div className="w-full flex justify-between">
                                    <div className="flex flex-col gap-[0.5em]">
                                        <span className="text-[14px]">Yesterday</span>
                                        <span className="text-[20px]">30°C</span>
                                    </div>

                                    <div className="flex flex-col gap-[0.5em]">
                                        <span className="text-[14px]">Today</span>
                                        <span className="text-[20px]">30°C</span>
                                    </div>

                                    <div className="flex flex-col gap-[0.5em]">
                                        <span className="text-[14px]">Tomorrow</span>
                                        <span className="text-[20px]">30°C</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[48%] flex flex-col gap-[0.5em] items-center rounded-tr-[1.5em] bg-[#ED1507] p-[1em] text-white">
                                <span className="text-[16px]">Dollar Rate</span>

                                <div className="flex flex-col items-center gap-[0.5em]">
                                    <span className="text-[14px]">Today</span>
                                    <span className="text-[20px]">1$ = 1,516 Naira</span>
                                </div>
                            </div>
                        </div>

                        <div className={`text-[24px] font-[600] text-black ${inter.className}`}>NEW</div>

                        <div className="w-full h-[fit-content] flex flex-col gap-[1.5em]">

                            {!headline_loading ? <>
                                {top_head_line_news?.slice(1, 3)?.map((news, index) => (
                                    <div className="w-full h-[80px] flex" key={index}>
                                        <img className="h-full flex-[0.3]" src={news?.urlToImage} alt="" />

                                        <div className="flex-[0.7] bg-[#8F9BFF] border-[1px] border-black flex justify-between items-center px-[1em]">
                                            <div className="text-black text-[12px] flex-[0.75]">
                                                {news?.title}
                                            </div>

                                            {/* <a href={`/news/${news?.id}`} className="bg-[dodgerblue] text-black rounded-[1.5em] py-[0.5em] px-[1em]">Read</a> */}
                                            <span onClick={() => go_to_news(news)} className="bg-[dodgerblue] text-black rounded-[1.5em] py-[0.5em] px-[1em] cursor-pointer">
                                                Read
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                <div className="w-full h-[80px] flex rounded-bl-[1.5em] rounded-br-[1.5em] overflow-x-hidden overflow-y-hidden">
                                    <img className="h-full flex-[0.3]" src={top_head_line_news?.[3]?.urlToImage} alt="" />

                                    <div className="flex-[0.7] bg-[#8F9BFF] border-[1px] border-black flex justify-between items-center px-[1em]">
                                        <div className="text-black text-[12px] flex-[0.75]">
                                            {top_head_line_news?.[3]?.title}
                                        </div>

                                        <a href={`/news/${top_head_line_news?.[3]?.id}`} className="bg-[dodgerblue] text-black rounded-[1.5em] py-[0.5em] px-[1em]">Read</a>
                                    </div>
                                </div>
                            </>
                                :
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-[15px] h-[15px] mx-auto"><Spinner h={15} w={15} /></div>
                                </div>
                            }
                        </div>

                        <div className="w-full h-[33px] flex items-center justify-between">
                            <NewNewsIndicators />

                            <a href="" className="bg-[white] text-black text-[14px] flex items-center justify-center rounded-[1.5em] border-[1px] border-black py-[0.3em] px-[1em]">view all</a>
                        </div>

                    </div>
                </Container>

                <div className="w-full flex justify-end gap-[1.5em] items-center">
                    <div className={`text-[24px] text-black font-[700] ${open_sans.className}`}>{today_date || ''}</div>

                    <div className="bg-[#0617AE] rounded-tl-[1.5em] rounded-bl-[1.5em] px-[5em] py-[0.5em] text-white text-[24px] font-[700]">{today_gmt_time || ''}</div>
                </div>

            </div>
            {/* Hero */}

            {/* categories */}
            <div className="w-full h-[fit-content] flex flex-col gap-[1.5em] py-[1em]">

                <Container>
                    <CategoriesIndicators />
                </Container>

                <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                    <CategoryTitle id="local" title={<span className="flex gap-[1em] items-center">HOT NEWS <Flame /></span>} />

                    <CategoryItems list={local_news?.slice(0, 6)} query={CategoryEnum.local as CategoryType} />

                    <a href={`/news/categories/${CategoryEnum.local}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

                </Container>

                <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                    <CategoryTitle id={CategoryEnum.business} title={<span className="flex gap-[1em] items-center">Business</span>} />

                    <CategoryItems list={business_news?.slice(0, 6)} query={CategoryEnum.business as CategoryType} />

                    <a href={`/news/categories/${CategoryEnum.business}`} className="bg-[#ED1507] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block mx-auto my-[1em]">More</a>

                </Container>

                <BrowseCategories />
            </div>
            {/* categories */}
        </div>
    )
}

export default NewsScreenHome;
