import { createSlice } from "@reduxjs/toolkit";

export const navBarManagementSlice = createSlice({
    name: "navbar_management",
    initialState: "landing",
    reducers: {
        updateNavBarState: (state: string, action) => {
            return action.payload;
        }
    }
});

export const { updateNavBarState } = navBarManagementSlice.actions;
export default navBarManagementSlice.reducer;