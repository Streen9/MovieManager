import React, { useContext } from 'react'
import MovieSection from './MovieSection'
import StateContext from '../state/StateContext'

const MovieList = () => {
  const {state} = useContext(StateContext)
  console.log(state?.movies)
  return (
    <MovieSection title='MovieList'>
      <select name="" id="" size={10} className='w-full h-[15rem]'>
        {state?.movies.map((movie,index) => (
            <option key={index} value={movie}>{movie}</option>
        ))
        }
      </select>
    </MovieSection>
  )
}

export default MovieList