import React from 'react'
import { MdOutlineModeEdit,MdDeleteOutline } from "react-icons/md";

const TodoList = () => {
    return (
        <>
            <section className=' w-full h-screen  items-center '>
                <div className='  justify-center items-center shadow-md '>
                    <div className='w-full h-20 bg-black flex justify-center items-center font-bold text-2xl fixed'>
                        <h2 className='text-white'>Todo List</h2>
                    </div>
                    {/* input segment */}
                    <div className='flex  justify-center items-center h-10 pt-32'>
                        <input type="text" className='bg-[rgba(0,0,0,0.1)] w-3/4 p-2 ' /><button className='px-10 py-1 mx-4 bg-black text-white font-bold text-3xl'>+</button>
                    </div>
                    {/* result segment */}
                    <div className='mt-5 '>
                        <div className='shadow-md   font-medium p-5 text-xl flex justify-between  m-4'>
                            <p>hello baby</p>
                            <div className='flex'>
                            <MdOutlineModeEdit />
                            <MdDeleteOutline />
                            </div>
                        </div>
                        <div className='shadow-md   font-medium p-5 text-xl  m-4'>
                            <p>hello baby</p>
                            <div>

                            </div>
                        </div>                 
                        
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default TodoList