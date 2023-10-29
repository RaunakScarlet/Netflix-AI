import React from 'react'
import AiSearchBar from './AiSearchBar'
import AiMovieSuggestion from './AiMovieSuggestion'
import { LOGIN_BACKGROUND } from '../utils/constants'

const AIMode = () => {
  return (
      <div>
          <div className='absolute -z-10'>
              <img src={LOGIN_BACKGROUND} alt="BackGround_Image" />
          </div>
          <AiSearchBar />
          <AiMovieSuggestion/>
    </div>
  )
}

export default AIMode
