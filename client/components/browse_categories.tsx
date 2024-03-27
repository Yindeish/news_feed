import use_fonts from "@/constants/fonts";
import Triangle from "@/svgs/triangle";



function BrowseCategories({ more_categories_link }: { more_categories_link?: string }) {
    const { open_sans } = use_fonts()


    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-[1.5em] py-[4em]">
            <div className="w-full h-full flex items-center justify-center gap-[1.5em]">
                <a href={more_categories_link as string || "/new/categories"} className="bg-[#8F9BFF] text-white rounded-[20px] text-[16px] w-[fit-content] h-[fit-content] py-[0.3em] px-[1em] inline-block">View more collections</a>

                <div className="w-[fit-content]">or search by reference</div>

                <input className="h-[29px] py-[0.5em] px-[1em] focus:outline-none focus:border-[1px] border-[1px] border-black rounded-[40px]" type="search" placeholder="🔍 Search" />
            </div>

            <a href="#top" className={`text-[20px] font-[400] flex gap-[1em] items-center cursor-pointer ${open_sans.className}`}>Back to top <Triangle /></a>
        </div>
    )
}

export default BrowseCategories;