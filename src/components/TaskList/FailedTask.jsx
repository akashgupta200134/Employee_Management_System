


const FailedTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-500 rounded-xl text-white">
      <div className="flex justify-between items-center">
        {/* Dynamically display the category and date */}
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      {/* Display the task title and description */}
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-4">
      <button className="w-full bg-yellow-400 py-1 px-2 rounded mt-10">Retry Task</button>

      </div>
    </div>
  );
};

export default FailedTask;
