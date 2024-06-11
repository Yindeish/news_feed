import use_fonts from "@/constants/fonts";
import news_selectors from "@/selectors/news";
import ChevronLeft from "@/svgs/chevron_left";
import ChevronRight from "@/svgs/chevron_right";


function CategoriesIndicators() {
    const { open_sans } = use_fonts()
    const { categories } = news_selectors()

    return (
        <div className="w-full flex gap-[1.5em] justify-between items-center" id="categories">
            <span className="text-[white] p-[0.3em] rounded-full bg-gray-400 cursor-pointer active:scale-[0.95]">
                <ChevronLeft w={25} h={25} />
            </span>

            <div className="flex-[0.95] h-[fit-content] overflow-x-scroll" id="categories_indicators">
                <div className="w-auto h-full flex gap-[1em] items-center">

                    {categories?.map((category, index) => (
                        <a href={`/news/categories/${category}/#${category}`} className={`w-[auto] text-[black] uppercase py-[0.3em] px-[1em] rounded-full bg-[#8F9BFF] cursor-pointer active:scale-[0.95] font-[600] text-[16px] ${open_sans.className}`} key={index}>{category}</a>
                    ))}

                </div>
            </div>

            <span className="text-[white] p-[0.3em] rounded-full bg-[#0617AE] cursor-pointer active:scale-[0.95]">
                <ChevronRight w={25} h={25} />
            </span>
        </div>
    )
}

export default CategoriesIndicators;