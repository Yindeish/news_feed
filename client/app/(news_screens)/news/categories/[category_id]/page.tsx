"use client";

import Container from "@/components/Container";
import CategoryItems from "@/components/category_items";
import CategoryTitle from "@/components/category_title";
import Spinner from "@/components/spinner";
import { useAppDispatch } from "@/hooks/state_types";
import { CategoryEnum, CategoryType, News } from "@/interfaces/news";
import news_selectors from "@/selectors/news";
import { set_news, useGet_everythingQuery } from "@/state/slices/news";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function CategoryId() {
    const { category_id } = useParams();
    const router = useRouter();

    const { date } = news_selectors()
    const { isLoading, data, error } = useGet_everythingQuery({ query: category_id as string, date: date as string });

    const [list, set_list] = useState<News[]>([]);

    const go_to_news = (news: News) => {
        localStorage.setItem('current_news', JSON.stringify(news))
        router.push(`/news/${news?.id}-category-${category_id}`)
    }


    useEffect(() => {
        const articles = (data?.articles as News[])?.map((article, index: number) => ({ ...article, id: index }));
        set_list(articles as News[])
    }, [data, error, isLoading])


    return (
        <div className="w-full h-full" id="top">
            <Container className="flex flex-col gap-[1.5em] pb-[1em] bg-white">

                <CategoryTitle id={category_id as string} title={<span className="flex gap-[1em] items-center capitalize">{category_id}</span>} />

                <div className="grid grid-cols-3 place-content-between gap-[2em]">

                    {!isLoading ?
                        (<>
                            {(list as News[])?.map((item, index) => (
                                <div className="col-span-1 h-[300px] flex flex-col gap-[1em] rounded-lg shadow-md" key={index}>
                                    <img className="w-full h-[70%] rounded-lg object-cover" src={item?.urlToImage} alt="" />

                                    {/* <a href={`/news/${item?.id}-category-${category_id}`} className="font-[400] text-[16px] text-black p-[0.5em]">
                                        {item?.title}
                                    </a> */}
                                    <span onClick={() => go_to_news(item)} className="font-[400] cursor-pointer text-[16px] text-black p-[0.5em]">
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

            </Container>
        </div>
    )
}

export default CategoryId;