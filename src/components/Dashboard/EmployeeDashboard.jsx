import Headers from "../Navheading/Headers";
import TasklistNumber from "../Navheading/TasklistNumber";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Headers loggedInUser={props.loggedInUser} changeUser={props.changeUser} />
      <TasklistNumber data={props.loggedInUser} />
      <Tasklist data={props.loggedInUser} />
    </div>
  );
};

export default EmployeeDashboard;
