import React from 'react'
import MoviesLists from './MoviesLists';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store?.movies);
    
  return (
      movies && (
          <div className="bg-black">
              <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
                  <MoviesLists
                      title={"Now Playing"}
                      movies={movies.nowPlayingMovies}
                  />
                  <MoviesLists
                      title={"Trending"}
                      movies={movies.topRatedMovies}
                  />
                  <MoviesLists
                      title={"Popular"}
                      movies={movies.popularMovies}
                  />

                  <MoviesLists
                      title={"Up Coming Movies"}
                      movies={movies.upComingMovies}
                  />
              </div>
          </div>
      )
  );
}

export default SecondaryContainer
