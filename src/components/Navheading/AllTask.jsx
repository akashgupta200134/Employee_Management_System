import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)


    return (
        <div className='bg-[#1c1c1c] rounded mt-5'>
            <div className='bg-red-500 text-white p-2  flex justify-between text-center rounded mt-10'>
                <h2 className='text-lg font-medium -ml-10 w-1/5 '>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>
            <div className='mb-2 py-2 px-4 flex flex-col justify-between rounded '>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='border-2 border-emerald-500  py-2 px-4 flex justify-between rounded'>
                        <h2 className='text-white font-medium text-xl'>{elem.firstName}</h2> 
                        <h3 className='text-yellow-400 font-medium text-xl'>{elem.taskCounts.active}</h3>    
                        <h3 className=' text-blue-400 font-medium text-xl'>{elem.taskCounts.newTask}</h3>
                        <h3 className='text-green-600 font-medium text-xl'>{elem.taskCounts.completed}</h3>
                        <h3 className='mr-24 text-red-500 font-medium text-xl '>{elem.taskCounts.failed}</h3>
                    </div>
                })}
            </div>


        </div>
    )
}

export default AllTask




