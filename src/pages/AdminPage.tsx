import React from 'react'

const AdminPage = () => {
  return (
    <div className='border border-black'>
        <form>
            <input type='radio'/>Actor
            <input type='radio'/>Category
            <input type='radio'/>Series
            <input type='radio'/>Studio
            <input type='text'/>
            <button type='submit'>Add Something</button>
        </form>

    </div>
  )
}

export default AdminPage