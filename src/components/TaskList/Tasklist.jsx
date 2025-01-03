import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const Tasklist = ({ data }) => {
  console.log(data);

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 mt-10"
    >
      {data.tasks.map((elem) => {
        if (elem.taskStatus.completed) {
          return <CompleteTask/>;
        }

        if (elem.taskStatus.active) {
          return <AcceptTask/>;
        }

        if (elem.taskStatus.newTask) {
          return <NewTask/>;
        }

        if (elem.taskStatus.failed) {
          return <FailedTask/>;
        }

    // If no condition matches, return nothing
      })}
    </div>
  );
};

export default Tasklist;
