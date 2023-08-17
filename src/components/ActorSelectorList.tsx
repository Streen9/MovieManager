import React from 'react'

interface Props{
    title:string;
    children: React.ReactNode
}

const ActorSelectorList = ({title,children}:Props) => {
  return (
    <div className='m-2 p-2 w-1/2'>
    <div>
      <h2 className='text-xl text-center font-bold'>{title}</h2>
    </div>
    <div>
        {children}
    </div>
  </div>
  )
}

export default ActorSelectorList