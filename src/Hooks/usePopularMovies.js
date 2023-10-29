import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
    };
};
export default usePopularMovies;

//https://api.themoviedb.org/3/movie/top_rated
// https://api.themoviedb.org/3/movie/upcoming