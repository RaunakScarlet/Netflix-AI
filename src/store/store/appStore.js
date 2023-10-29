import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../userSlice'
import moviesReducer from '../moviesSlice'
import aiModeReducer from '../aiModeSlice'
import languageConfigReducer from '../languageConfigSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        aiMode: aiModeReducer,
        languageConfig: languageConfigReducer
    },
});
export default appStore; 