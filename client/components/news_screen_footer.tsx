import use_fonts from "@/constants/fonts";
import Container from "./Container";
import Mail from "@/svgs/mail";
import news_selectors from "@/selectors/news";


function NewsScreenFooter() {
    const { open_sans } = use_fonts()
    const { categories } = news_selectors()

    return (
        <footer className="bg-black w-full h-[fit-content]">

            <Container className="flex justify-between py-[4em]">
                <div className="flex flex-col gap-[1.5em]">
                    <div className={`font-[600] text-[24px] text-white py-[0.3em] border-b-[2px] border-b-white ${open_sans.className}`}>Collections</div>

                    <div className="flex gap-[2em]">
                        <div className="flex flex-col gap-[0.3em]">

                            {categories?.slice(0, (categories.length / 2))?.map((category, index) => (
                                <a href={`/news/categories/${category}/#${category}`} className={`font-[400] text-[14px] text-white py-[0.1em] border-b-[1px] border-b-white ${open_sans.className}`} key={index}>{category}</a>
                            ))}

                        </div>

                        <div className="flex flex-col gap-[0.3em]">
                            {categories?.slice((categories.length / 2))?.map((category, index) => (
                                <a href={`/news/categories/${category}/#${category}`} className={`font-[400] text-[14px] text-white py-[0.1em] border-b-[1px] border-b-white ${open_sans.className}`} key={index}>{category}</a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[1.5em]">
                    <div className={`font-[600] text-[24px] text-white py-[0.3em] border-b-[2px] border-b-white ${open_sans.className}`}>News feed</div>

                    <div className="flex flex-col gap-[0.3em]">
                        <div className={`font-[400] text-[14px] text-white py-[0.1em] border-b-[1px] border-b-white ${open_sans.className}`}>About us</div>
                        <div className={`font-[400] text-[14px] text-white py-[0.1em] border-b-[1px] border-b-white ${open_sans.className}`}>Contact</div>
                        <div className={`font-[400] text-[14px] text-white py-[0.1em] border-b-[1px] border-b-white ${open_sans.className}`}>Advertise with us</div>
                    </div>
                </div>

                <div className="w-[300px] h-full flex flex-col items-center justify-center gap-[2em]">
                    <div className={`text-[18px] text-white font-[400] ${open_sans.className}`}>Newsletter</div>

                    <input className={`w-full bg-gray-600 text-white placeholder:text-white py-[0.3em] px-[1em] rounded-2xl focus:outline-none focus:border-none`} placeholder="Email:" type="email" name="" id="" />

                    <div className={`w-full bg-white black py-[0.3em] px-[1em] rounded-2xl flex gap-[1em] items-center justify-center cursor-pointer active:scale-[0.95]`}>
                        <Mail />

                        <span className={`text-[16px] font-[600] text-center ${open_sans.className}`}>Subscribe</span>
                    </div>
                </div>
            </Container>

        </footer>
    )
}

export default NewsScreenFooter;