import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../store/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        getVideoTrailer();
    }, []);

    const getVideoTrailer = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
                movieId +"/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        
        const filteredData = json?.results?.filter(
            (item) => item?.type === "Trailer"
        );
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
       
        dispatch(addTrailer(trailer));

       
        
    };
    
    
};
export default useTrailerVideo;
