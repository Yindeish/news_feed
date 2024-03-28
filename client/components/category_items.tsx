"use client";

import { images } from "@/constants/images";
import { CategoryType, News } from "@/interfaces/news";
import Spinner from "./spinner";
import { set_news, useGet_everythingQuery } from "@/state/slices/news";
import news_selectors from "@/selectors/news";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/state_types";
import { useRouter } from "next/navigation";



function CategoryItems({ list, query }: { list: News[], query: CategoryType }) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { date } = news_selectors()
    const { isLoading, data, error } = useGet_everythingQuery({ query, date: date as string });

    const go_to_news = (news: News) => {
        localStorage.setItem('current_news', JSON.stringify(news))
        router.push(`/news/${news?.id}-category-${query}`)
    }

    useEffect(() => {
        const articles = (data?.articles as News[])?.map((article, index: number) => ({ ...article, id: index, urlToImage: article?.urlToImage || 'https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image-1536x1024.png' }));
        dispatch(set_news({ name: query, news: articles as News[] }))
    }, [data, error, isLoading])

    return (
        <div className="grid grid-cols-3 place-content-between gap-[2em]">

            {!isLoading ?
                (<>
                    {list?.map((item, index) => (
                        <div className="col-span-1 h-[300px] flex flex-col gap-[1em] rounded-lg shadow-md" key={index}>
                            <img className="w-full h-[70%] rounded-lg object-cover" src={item?.urlToImage} alt="" />

                            {/* {href = {`/news/${item?.id}-category-${query}`}} */}
                            <span onClick={() => go_to_news(item)} className="font-[400] text-[16px] text-black cursor-pointer p-[0.5em]">
                                {item?.title}
                            </span>
                        </div>
                    ))}
                </>) :
                (<div className="w-full h-full flex items-center justify-center">
                    <div className="w-[25px] h-[25px] mx-auto"><Spinner h={25} w={25} /></div>
                </div>)
            }

            {(list?.length <= 0 && !isLoading) && <div className="mx-auto">No news yet</div>}


        </div>
    )
}

export default CategoryItems;