import React from 'react'

export const TodoList = () => {
  return (
    <div>
        {/*input section*/}
        <div>
            <p className=' text-yellow-600'>Add your to-do </p>
            <input type="text" name="" id="" />
            <button type="button">add</button>
        </div>
        {/*display section*/}
        <div >
            <button>edit</button>
            <button>delete</button>
        </div>
    </div>
  )
}
