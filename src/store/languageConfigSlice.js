import { createSlice } from "@reduxjs/toolkit";

const languageConfigSlice = createSlice({
    name: 'languageConfig',
    initialState: {
        lang: "en",
    },
    reducers: {
        toggleLanguage:(state, action) => {
            state.lang=action.payload
        }
    }
    
})

export const { toggleLanguage } = languageConfigSlice.actions;
export default languageConfigSlice.reducer;