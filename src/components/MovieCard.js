import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'

const MovieCard = ({ imgPath }) => {
    
    if (!imgPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img src={CDN_IMG_URL+imgPath} alt="MovieCard" />
    </div>
  )
}

export default MovieCard
