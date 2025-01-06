import AllTask from "../Navheading/AllTask";
import CreateTask from "../Navheading/CreateTask";
import Headers from "../Navheading/Headers";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7 bg-black">
      <Headers changeUser = {props.changeUser} />
      <CreateTask/>
      <AllTask/>
     
    </div>
  );
};

export default AdminDashboard;
