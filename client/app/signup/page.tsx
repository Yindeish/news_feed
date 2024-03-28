"use client";

import use_fonts from "@/constants/fonts";
import { useState } from "react";

enum Focuses {
    email = 'email',
    password = 'password'
}

function page() {
    const { open_sans } = use_fonts()

    // cf -> current focus
    const [cf, set_cf] = useState('');


    return (
        <div className="w-full h-[95vh] f-full flex items-center justify-center">
            <div className="w-full h-[fit-content] flex flex-col items-center justify-center gap-[3em]">
                <div className={`flex gap-[2em] text-[18px] text-black ${open_sans.className}`}>Log in or <span className="text-white bg-[#ED1507] py-[0.3em] px-[1em] rounded-[1em]">Register</span> </div>

                <div className="w-[30%] h-[fit-content] flex flex-col gap-[1.5em]">
                    <fieldset className={`w-full ${cf == Focuses.email ? 'relative' : ''}`}>
                        <legend className={`${cf == Focuses.email ? 'absolute top-[-10px] left-[5px]' : ''} bg-[white] px-[3px] text-[12px]`}>Email</legend>
                        <input onFocus={() => set_cf(Focuses.email)} onBlur={() => set_cf('')} className={`w-full block border-[1px] ${cf == Focuses.email ? 'border-[#0617AE]' : 'border-gray-400'} rounded-lg py-[0.3em] px-[1em]`} type="email" />
                    </fieldset>

                    <fieldset className={`w-full ${cf == Focuses.password ? 'relative' : ''}`}>
                        <legend className={`${cf == Focuses.password ? 'absolute top-[-10px] left-[5px]' : ''} bg-[white] px-[3px] text-[12px]`}>Password</legend>
                        <input onFocus={() => set_cf(Focuses.password)} onBlur={() => set_cf('')} className={`w-full block border-[1px] ${cf == Focuses.password ? 'border-[#0617AE]' : 'border-gray-400'} rounded-lg py-[0.3em] px-[1em]`} type="email" />
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default page;