import React from 'react'

const CompleteTask = () => {
  return (
    
    <div className=" h-full flex-shrink-0 p-5   w-[300px] bg-green-500 rounded-xl text-white" >

                <div className=" flex justify-between items-center ">
                    <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">High</h3>
                    <h4 className=" text-sm  "> 2 Jan 2025</h4>
                </div>
                <h2 className="mt-5 text-xl font-semibold ">Make A Task Manager App</h2>
                <p className=" text-sm mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic, consequatur expedita beatae blanditiis labore.
                </p>
<div className='mt-4 '>
    <button className='w-full bg-red-600 py-1 px-2 rounded'>Completed</button>
</div>

            </div>
  )
}

export default CompleteTask