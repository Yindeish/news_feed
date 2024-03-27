"use client";

import NewsScreenFooter from "@/components/news_screen_footer";
import NewsScreenHeader from "@/components/news_screen_header";

function NewsScreenLayout({ children }: { children: React.ReactNode }) {


    return (
        <div className="w-full h-full">
            {/* <NewsScreenHeader />
            <div className="overflow-y-scroll w-full h-[calc(100%-53px)]">
                <div className="w-full">
                    {children}
                </div>

                <NewsScreenFooter />
            </div> */}
            {children}
        </div>
    )
}

export default NewsScreenLayout;