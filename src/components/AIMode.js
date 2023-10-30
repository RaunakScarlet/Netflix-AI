import React from 'react'
import AiSearchBar from './AiSearchBar'
import AiMovieSuggestion from './AiMovieSuggestion'
import { LOGIN_BACKGROUND } from '../utils/constants'

const AIMode = () => {
  return (
      <div>
          <div className="fixed -z-10">
              <img
                  className="h-screen sm:h-auto md:object-cover object-cover"
                  src={LOGIN_BACKGROUND}
                  alt="BackGround_Image"
              />
          </div>
          <div className="">
              <AiSearchBar />
              <AiMovieSuggestion />
          </div>
      </div>
  );
}

export default AIMode
