import { Open_Sans, Inter } from "next/font/google";

const open_sans = Open_Sans({
    weight: ['400', '500', "700", "800"],
    subsets: ["latin"]
})

const inter = Inter({
    weight: ['400', '500', "700", "800"],
    subsets: ["latin"]
})


function use_fonts() {


    return { open_sans, inter }
}

export default use_fonts;