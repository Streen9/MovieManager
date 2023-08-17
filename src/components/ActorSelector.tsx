import React from 'react'
import MovieSection from './MovieSection'
import ActorSelectorList from './ActorSelectorList'

const ActorSelector = () => {
  return (
    <MovieSection title='Actor Selector'>
      <div className="flex h-[18rem]">
        <ActorSelectorList title='Available'>
          <select name="" id="" size={10} className='w-full border border-green-500'>
            <option>Actor 1</option>
            <option>Actor 2</option>
            <option>Actor 3</option>
            <option>Actor 4</option>
            <option>Actor 5</option>
          </select>
        </ActorSelectorList>
        <ActorSelectorList title='Selected'>
          <select name="" id="" size={10} className='w-full border border-green-500'>
            <option value="">selected 1</option>
            <option value="">selected 2</option>
            <option value="">selected 3</option>
            <option value="">selected 4</option>
            <option value="">selected 5</option>
            <option value="">selected 6</option>
          </select>
        </ActorSelectorList>
      </div>
    </MovieSection>
  )
}

export default ActorSelector