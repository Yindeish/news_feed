

function CategoryTitle({ title, id }: { title: string | React.ReactNode, id: string }) {


    return (
        <div className="relative w-full h-auto flex bg-transparent" id={id}>

            <div className="w-[fit-content] px-[5em] mx-auto bg-[white] h-full z-[3]">{title || ''}</div>

            <div className="bg-[black] absolute top-[50%] left-0 w-full h-[2px]" />
        </div>
    )
}

export default CategoryTitle;