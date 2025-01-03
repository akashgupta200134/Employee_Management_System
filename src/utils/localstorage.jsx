  localStorage.clear();

  const employees = [
    {
      id: 1,
      firstName: "Arjun",
      email: "jon@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design Homepage",
          date: "2025-01-05",
          category: "Design",
          active: true,
          assign: "Arjun",
          description: "Create a modern homepage design for the website.",
          failed: false,
          completed: true,
          newTask: false,
        },
        {
          taskTitle: "Update Branding Guidelines",
          date: "2025-01-06",
          category: "Branding",
          active: true,
          assign: "Arjun",
          description: "Revise the branding guidelines document for the company.",
          failed: false,
          completed: false,
          newTask: true,
        },
      ],
      activeTasks: 2,
      completedTasks: 1,
      failedTasks: 0,
      newTasks: 1,
    },
    {
      id: 2,
      firstName: "Neha",
      email: "jane@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Write Blog Post",
          date: "2025-01-10",
          category: "Content Writing",
          active: true,
          assign: "Neha",
          description: "Write a blog post on the latest web development trends.",
          failed: false,
          completed: false,
          newTask: true,
        },
        {
          taskTitle: "Edit Product Manual",
          date: "2025-01-08",
          category: "Technical Writing",
          active: true,
          assign: "Neha",
          description: "Review and edit the user manual for the new product release.",
          failed: true,
          completed: false,
          newTask: false,
        },
        {
          taskTitle: "Prepare Social Media Posts",
          date: "2025-01-12",
          category: "Marketing",
          active: true,
          assign: "Neha",
          description: "Create content for social media campaigns.",
          failed: false,
          completed: true,
          newTask: false,
        },
      ],
      activeTasks: 3,
      completedTasks: 1,
      failedTasks: 1,
      newTasks: 1,
    },
    {
      id: 3,
      firstName: "Karan",
      email: "emma@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Backend API Integration",
          date: "2025-01-15",
          category: "Backend Development",
          active: true,
          assign: "Karan",
          description: "Integrate the payment gateway API into the system.",
          failed: false,
          completed: false,
          newTask: true,
        },
        {
          taskTitle: "Database Optimization",
          date: "2025-01-18",
          category: "Database Management",
          active: true,
          assign: "Karan",
          description: "Optimize database queries for better performance.",
          failed: false,
          completed: false,
          newTask: false,
        },
      ],
      activeTasks: 2,
      completedTasks: 0,
      failedTasks: 0,
      newTasks: 1,
    },
    {
      id: 4,
      firstName: "Rahul",
      email: "jones@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "UI Improvements",
          date: "2025-01-18",
          category: "Frontend Development",
          active: true,
          assign: "Rahul",
          description: "Improve the UI of the dashboard for better user experience.",
          failed: true,
          completed: false,
          newTask: false,
        },
        {
          taskTitle: "Fix Login Bug",
          date: "2025-01-19",
          category: "Bug Fixing",
          active: true,
          assign: "Rahul",
          description: "Resolve the issue with user login failure.",
          failed: false,
          completed: true,
          newTask: false,
        },
      ],
      activeTasks: 2,
      completedTasks: 1,
      failedTasks: 1,
      newTasks: 0,
    },
    {
      id: 5,
      firstName: "Priya",
      email: "wilson@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Create Marketing Plan",
          date: "2025-01-22",
          category: "Marketing",
          active: true,
          assign: "Priya",
          description: "Draft a marketing plan for the new product launch.",
          failed: false,
          completed: true,
          newTask: false,
        },
        {
          taskTitle: "Conduct Market Research",
          date: "2025-01-20",
          category: "Research",
          active: true,
          assign: "Priya",
          description: "Analyze customer feedback and trends for better decision-making.",
          failed: false,
          completed: false,
          newTask: true,
        },
        {
          taskTitle: "Coordinate Product Photoshoot",
          date: "2025-01-25",
          category: "Photography",
          active: true,
          assign: "Priya",
          description: "Organize and manage the photoshoot for the upcoming product line.",
          failed: false,
          completed: false,
          newTask: false,
        },
      ],
      activeTasks: 3,
      completedTasks: 1,
      failedTasks: 0,
      newTasks: 1,
    },
  ];
  
  const admin = [
    {
      id: 1,
      firstName: "Ravi",
      email: "admin@example.com",
      password: "123",
    },
  ];
  
        
        

 export const setLocalStorage = () => {

    localStorage.setItem('employees', JSON.stringify(employees) );
    localStorage.setItem("admin" ,  JSON.stringify(admin) );


 }
     
 export const  getLocalStorage=() => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse( localStorage.getItem('admin'));

       return{employees , admin};



 }
      

