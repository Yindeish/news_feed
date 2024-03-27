import { useAppSelector } from "@/hooks/state_types";
import { RootState } from "@/state/store";


function layout_selectors() {


    const { account_menu_shown, account_menu_z_index, overlay_z_index } = useAppSelector((state: RootState) => state.layout);

    return { account_menu_shown, account_menu_z_index, overlay_z_index }
}

export default layout_selectors;