import Headers from "../Navheading/Headers"
import TasklistNumber from "../Navheading/TasklistNumber"
import Tasklist from "../TaskList/Tasklist"


const EmployeeDashboard = () => {
  return (
    <div className=" p-10 bg-[#1C1C1C] h-screen ">

       <Headers/>
       <TasklistNumber/>
       <Tasklist/>


    
    
    </div>
  )
}

export default EmployeeDashboard