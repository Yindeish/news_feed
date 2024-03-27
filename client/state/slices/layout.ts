import { createSlice } from "@reduxjs/toolkit";

const z_index = 10000;

const layout_slice = createSlice({
    name: 'layout',
    initialState: {
        account_menu_shown: false,
        overlay_z_index: z_index - 1,
        account_menu_z_index: z_index - 2
    },
    reducers: {
        set_account_menu_shown: (state, action) => {
            state.account_menu_shown = action.payload;
        }
    }
})

export const { set_account_menu_shown } = layout_slice.actions

export default layout_slice.reducer;