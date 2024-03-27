"use client";

import Profile from "@/svgs/profile";
import Container from "./Container";
import { useAppDispatch } from "@/hooks/state_types";
import { set_account_menu_shown } from "@/state/slices/layout";
import layout_selectors from "@/selectors/layout";


function NewsScreenHeader() {
    const dispatch = useAppDispatch();
    const { account_menu_shown, account_menu_z_index } = layout_selectors()

    const toggle_account_menu = () => {
        dispatch(set_account_menu_shown(account_menu_shown ? false : true))
    }

    return (
        <header className="bg-[#0617AE] w-full h-[53px] border-[#0617AE1A] border-[1px]">
            <Container className="flex items-center justify-between">
                <a href="/news" className="text-white font-[600] text-[24px]">NEWS FEED</a>

                <input className="h-[29px] py-[0.5em] px-[1em] focus:outline-none focus:border-[1px] border-[1px] border-black rounded-[40px]" type="search" placeholder="🔍 Search" />

                <div className="flex items-center gap-[1em]">
                    <a href="/news/categories" className="text-white text-[20px] font-[600]">Categories</a>
                    <a href="" className="text-white text-[20px] font-[600]">Bookmarks</a>
                    <a href="" className="text-white text-[20px] font-[600]">Notification</a>
                </div>

                <span onClick={() => toggle_account_menu()} className="cursor-pointer relative">
                    <Profile />

                    {account_menu_shown && <div className="absolute top-[97%] left-[0px] bg-gray-400 w-[fit-content] h-[fit-content] border-[1px] border-gray-400 rounded-md flex flex-col gap-[1px] overflow-hidden" style={{ zIndex: account_menu_z_index }}>
                        <a href="/user/profile" className="bg-white block py-[0.3em] px-[1em] text-gray-600 text-[14px] w-[7em]">Profile</a>
                        <span className="bg-white block py-[0.3em] px-[1em] text-gray-600 text-[14px] w-[7em]">Sign out</span>
                    </div>}
                </span>
            </Container>
        </header>
    )
}

export default NewsScreenHeader;