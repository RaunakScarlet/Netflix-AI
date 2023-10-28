const { createSlice } = require("@reduxjs/toolkit");

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;