import { createSlice } from "@reduxjs/toolkit";


const aiModeSlice = createSlice({
    name: 'AI Mode',
    initialState: {
        mode:false,
    },
    reducers: {
        toggleMode: (state, action) => {
            state.mode = !state.mode;
        }
    }
})

export const { toggleMode } = aiModeSlice.actions;
export default aiModeSlice.reducer;