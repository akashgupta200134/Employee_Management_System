  localStorage.clear();

  const employees = [
    {
      "id": 1,
      "firstName": "Arjun",
      "email": "jon@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design Homepage",
          "date": "2025-01-05",
          "category": "Design",
          "taskStatus": {
            "active": true,
            "completed": true,
            "failed": false,
            "newTask": false
          },
          "assign": "Arjun",
          "description": "Create a modern homepage design for the website."
        },
        {
          "taskTitle": "Update Branding Guidelines",
          "date": "2025-01-06",
          "category": "Branding",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": true
          },
          "assign": "Arjun",
          "description": "Revise the branding guidelines document for the company."
        }
      ],
      "taskStats": {
        "activeTasks": 2,
        "completedTasks": 1,
        "failedTasks": 0,
        "newTasks": 1
      }
    },
    {
      "id": 2,
      "firstName": "Neha",
      "email": "jane@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Write Blog Post",
          "date": "2025-01-10",
          "category": "Content Writing",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": true
          },
          "assign": "Neha",
          "description": "Write a blog post on the latest web development trends."
        },
        {
          "taskTitle": "Edit Product Manual",
          "date": "2025-01-08",
          "category": "Technical Writing",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": true,
            "newTask": false
          },
          "assign": "Neha",
          "description": "Review and edit the user manual for the new product release."
        },
        {
          "taskTitle": "Prepare Social Media Posts",
          "date": "2025-01-12",
          "category": "Marketing",
          "taskStatus": {
            "active": true,
            "completed": true,
            "failed": false,
            "newTask": false
          },
          "assign": "Neha",
          "description": "Create content for social media campaigns."
        }
      ],
      "taskStats": {
        "activeTasks": 3,
        "completedTasks": 1,
        "failedTasks": 1,
        "newTasks": 1
      }
    },
    {
      "id": 3,
      "firstName": "Karan",
      "email": "emma@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Backend API Integration",
          "date": "2025-01-15",
          "category": "Backend Development",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": true
          },
          "assign": "Karan",
          "description": "Integrate the payment gateway API into the system."
        },
        {
          "taskTitle": "Database Optimization",
          "date": "2025-01-18",
          "category": "Database Management",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": false
          },
          "assign": "Karan",
          "description": "Optimize database queries for better performance."
        }
      ],
      "taskStats": {
        "activeTasks": 2,
        "completedTasks": 0,
        "failedTasks": 0,
        "newTasks": 1
      }
    },
    {
      "id": 4,
      "firstName": "Rahul",
      "email": "jones@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "UI Improvements",
          "date": "2025-01-18",
          "category": "Frontend Development",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": true,
            "newTask": false
          },
          "assign": "Rahul",
          "description": "Improve the UI of the dashboard for better user experience."
        },
        {
          "taskTitle": "Fix Login Bug",
          "date": "2025-01-19",
          "category": "Bug Fixing",
          "taskStatus": {
            "active": true,
            "completed": true,
            "failed": false,
            "newTask": false
          },
          "assign": "Rahul",
          "description": "Resolve the issue with user login failure."
        }
      ],
      "taskStats": {
        "activeTasks": 2,
        "completedTasks": 1,
        "failedTasks": 1,
        "newTasks": 0
      }
    },
    {
      "id": 5,
      "firstName": "Priya",
      "email": "wilson@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Create Marketing Plan",
          "date": "2025-01-22",
          "category": "Marketing",
          "taskStatus": {
            "active": true,
            "completed": true,
            "failed": false,
            "newTask": false
          },
          "assign": "Priya",
          "description": "Draft a marketing plan for the new product launch."
        },
        {
          "taskTitle": "Conduct Market Research",
          "date": "2025-01-20",
          "category": "Research",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": true
          },
          "assign": "Priya",
          "description": "Analyze customer feedback and trends for better decision-making."
        },
        {
          "taskTitle": "Coordinate Product Photoshoot",
          "date": "2025-01-25",
          "category": "Photography",
          "taskStatus": {
            "active": true,
            "completed": false,
            "failed": false,
            "newTask": false
          },
          "assign": "Priya",
          "description": "Organize and manage the photoshoot for the upcoming product line."
        }
      ],
      "taskStats": {
        "activeTasks": 3,
        "completedTasks": 1,
        "failedTasks": 0,
        "newTasks": 1
      }
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "firstName": "Ravi",
      "email": "admin@example.com",
      "password": "123"
    }
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
      

