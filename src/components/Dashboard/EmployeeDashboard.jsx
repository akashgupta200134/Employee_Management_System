import Headers from "../Navheading/Headers"
import TasklistNumber from "../Navheading/TasklistNumber"
import Tasklist from "../TaskList/Tasklist"


const EmployeeDashboard = ({data}) => {
  // console.log(props);

  
  
  return (
    <div className=" p-10 bg-[#1C1C1C] h-screen ">

       <Headers data = {data}/>
       <TasklistNumber data = {data}/>
       <Tasklist data = {data}/>


    
    
    </div>
  )
}

export default EmployeeDashboard