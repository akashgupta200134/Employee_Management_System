const TasklistNumber = ({data}) => {
  return (
    <div className=" flex screen justify-between gap-5 mt-10 ">
      <div className="  rounded-xl  w-[45%]  py-6 px-9 bg-red-600   ">
        <h2 className=" text-3xl font-semibold text-white "> 0 </h2>
        <h3 className=" text-xl font-medium  text-white"> New Task</h3>

      </div>

      <div className="  rounded-xl  w-[45%]  py-6 px-9 bg-green-600   ">
        <h2 className=" text-3xl font-semibold text-white "> 0 </h2>
        <h3 className=" text-xl font-medium  text-white"> New Task</h3>
      </div>


      <div className="  rounded-xl  w-[45%]  py-6 px-9 bg-blue-600   ">
        <h2 className=" text-3xl font-semibold text-white "> 0 </h2>
        <h3 className=" text-xl font-medium  text-white"> New Task</h3>
      </div>

      <div className="  rounded-xl  w-[45%]  py-6 px-9 bg-yellow-600   ">
        <h2 className=" text-3xl font-semibold text-white "> 0 </h2>
        <h3 className=" text-xl font-medium  text-white"> New Task</h3>
      </div>

    </div>
  );
};

export default TasklistNumber;
