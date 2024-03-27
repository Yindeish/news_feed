"use client";

import Container from "@/components/Container";
import Spinner from "@/components/spinner";
import use_fonts from "@/constants/fonts";
import { News } from "@/interfaces/news";
import news_selectors from "@/selectors/news";
import { useGet_everythingQuery } from "@/state/slices/news";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



function NewsId() {
    const { news_id } = useParams();
    const { date } = news_selectors();
    const { open_sans } = use_fonts()

    const first_dash_index = news_id.indexOf('-');
    const second_dash_index = news_id.lastIndexOf('-');
    const news_index = Number(news_id.slice(0, first_dash_index));
    const news_category = news_id.slice(second_dash_index + 1);

    const { isLoading, data, error } = useGet_everythingQuery({ query: news_category as string, date: date as string });

    const [related_news_list, set_related_news_list] = useState<News[]>([]);
    const [news, set_news] = useState<News | null>(null);

    useEffect(() => {
        const articles = (data?.articles as News[])?.map((article, index: number) => ({ ...article, id: index }));

        // set_news(articles?.[news_index as number])
        set_related_news_list(articles?.filter(article => article?.id !== news_index));
    }, [data, error, isLoading])

    useEffect(() => {
        const current_news = JSON.parse(localStorage.getItem('current_news') as string);

        set_news(current_news)
    }, [])



    return (
        <div className="w-full h-[fit-content]">

            <Container className="py-[1.5em] flex flex-col gap-[1em]">
                {!isLoading ?
                    (<>
                        <div className={`w-full text-[20px] text-black font-[600] ${open_sans.className}`}>{news?.title}</div>

                        <div className={`w-full h-[fit-content] flex gap-[1em] ${open_sans.className}`}>
                            <div className="flex-[0.7] h-[fit-content] border-r-[2px] border-r-gray-500 py-[0.5em] px-[1em]">
                                <img className="w-full h-[40vh] object-cover" src={news?.urlToImage} alt="" />

                                <div className="w-full flex items-center justify-between py-[1em]">
                                    <span className="capitalize text-[#0617AE] text-[18px] underline">{`by ${news?.author || ''}`}</span>
                                    <span className="capitalize text-gray-400 text-[18px]">{`🕧 ${news?.publishedAt as string}`}</span>
                                </div>

                                <div className="text-[16px] font-[400]">
                                    {news?.description}
                                </div>

                                <div className="text-[16px] font-[400]">
                                    {news?.content}
                                </div>
                            </div>

                            <div className="flex-[0.3] flex flex-col gap-[1em] py-[0.5em] px-[1em]">
                                {related_news_list?.slice(0, 6)?.map((news, index) => (
                                    <div className="w-full h-[fit-content] bg-[#8F9BFF] text-[14px] p-[0.5em]" key={index}>{news?.content}</div>
                                ))}
                            </div>
                        </div>
                    </>)
                    :
                    (<div className="w-full h-full flex items-center justify-center">
                        <div className="w-[25px] h-[25px] mx-auto"><Spinner h={25} w={25} /></div>
                    </div>)
                }
            </Container>
        </div>
    )
}

export default NewsId;