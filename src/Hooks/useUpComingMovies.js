import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../store/moviesSlice";

const useUpComingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getUpComingMovies();
    }, []);

    const getUpComingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?page=1",
            API_OPTIONS
        );
        const json = await data.json();

        dispatch(addUpComingMovies(json.results));
    };
};
export default useUpComingMovies;
