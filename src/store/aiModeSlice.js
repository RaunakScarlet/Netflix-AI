import { createSlice } from "@reduxjs/toolkit";


const aiModeSlice = createSlice({
    name: "AI Mode",
    initialState: {
        mode: false,
        movieNames: null,
        movieResults:null,
    },
    reducers: {
        toggleMode: (state, action) => {
            state.mode = !state.mode;
        },
        addOpenAiMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleMode, addOpenAiMovies } = aiModeSlice.actions;
export default aiModeSlice.reducer;