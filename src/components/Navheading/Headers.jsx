

const Headers = ({data}) => {
  // console.log(data);
  
  return (
    <div className=" flex items-end justify-between ">
     
     <h1  className="  text-white  font-medium text-2xl">Hello <br/> <span  className=" text-3xl font-semibold">{data.firstName}👋 </span>  </h1>
     <button className=" bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg">Log Out</button>




    </div>
  )
}

export default Headers