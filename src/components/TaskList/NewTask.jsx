

const NewTask = ({ data }) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-blue-500 rounded-xl text-white">
      <div className="flex justify-between items-center">
        {/* Dynamically display the category and date */}
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      {/* Display the task title and description */}
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
        <button className="bg-red-600 py-1 px-2 w-full">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;

