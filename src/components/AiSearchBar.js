import React, { useRef } from 'react'
import lang from '../utils/languageconstant'
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openAi';
import { API_OPTIONS } from '../utils/constants';
import { addOpenAiMovies } from '../store/aiModeSlice';

const AiSearchBar = () => {

    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.languageConfig.lang);
    const searchMovieName = useRef(null);

    const moviesFromTMDB = async (movie) => {
        //openAiMovieList();
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
                movie +
                "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };



     
    const handleMoviesLists = async () => {
        const Query =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            searchMovieName.current.value +
            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: Query }],
            model: "gpt-3.5-turbo",
        });

        if (!chatCompletion) {
            // Error Page
        }

        const openAiMovies =
            chatCompletion.choices?.[0]?.message?.content.split(",");
        const promiseArray = openAiMovies.map((movie) => moviesFromTMDB(movie));
         

        const tmdbResults = await Promise.all(promiseArray);
        dispatch(
            addOpenAiMovies({
                movieNames: openAiMovies,
                movieResults: tmdbResults,
            })
        );
    };



    
  return (
      <div className="pt-[10%] flex justify-center">
          <form
              onSubmit={(e) => e.preventDefault()}
              className=" w-1/2 bg-black grid grid-cols-12"
          >
              <input
                  ref={searchMovieName}
                  type="text"
                  className=" p-4 m-4 col-span-9"
                  placeholder={lang[langKey].searchPlaceHolder}
              />
              <button
                  onClick={handleMoviesLists}
                  className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
              >
                  {lang[langKey].search}
              </button>
          </form>
      </div>
  );
}

export default AiSearchBar
