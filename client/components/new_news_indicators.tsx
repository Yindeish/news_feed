import ChevronLeft from "@/svgs/chevron_left";
import ChevronRight from "@/svgs/chevron_right";


function NewNewsIndicators() {


    return (
        <div className="flex items-center justify-between gap-[1em]">
            <span className="w-[20px] h-[20px] rounded-full bg-[#0617AE] text-white flex items-center justify-center cursor-pointer">
                <ChevronLeft />
            </span>

            <span className="w-[23px] h-[23px] flex items-center justify-center cursor-pointer rounded-full bg-[white] text-[#0617AE] border-[#0617AE] border-[1px]">1</span>

            <span className="w-[23px] h-[23px] flex items-center justify-center cursor-pointer rounded-full bg-[white] text-[#0617AE] border-[#0617AE] border-[1px]">2</span>

            <span className="w-[20px] h-[20px] rounded-full bg-[#0617AE] text-white flex items-center justify-center cursor-pointer">
                <ChevronRight />
            </span>
        </div>
    )
}

export default NewNewsIndicators;