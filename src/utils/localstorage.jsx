

        const employees = [
            {  "id" : 1,
              email: "john.doe@example.com",
              password: "123",
              tasks: [
                {
                  taskTitle: "Design Homepage",
                  date: "2025-01-05",
                  category: "Design",
                  active: true,
                  assign: "John Doe",
                  description: "Create a modern homepage design for the website.",
                  failed: false,
                  completed: true,
                  newTask: false,
                },
              ],
            },
            {
                "id" : 2,
              email: "jane.smith@example.com",
              password: "123",
              tasks: [
                {
                  taskTitle: "Write Blog Post",
                  date: "2025-01-10",
                  category: "Content Writing",
                  active: true,
                  assign: "Jane Smith",
                  description: "Write a blog post on the latest web development trends.",
                  failed: false,
                  completed: false,
                  newTask: true,
                },
              ],
            },
            {
                "id" : 3,
              email: "emma.brown@example.com",
              password: "123",
              tasks: [
                {
                  taskTitle: "Backend API Integration",
                  date: "2025-01-15",
                  category: "Backend Development",
                  active: true,
                  assign: "Emma Brown",
                  description: "Integrate the payment gateway API into the system.",
                  failed: false,
                  completed: false,
                  newTask: true,
                },
              ],
            },
            {
                "id" : 4,
              email: "michael.jones@example.com",
              password: "123",
              tasks: [
                {
                  taskTitle: "UI Improvements",
                  date: "2025-01-18",
                  category: "Frontend Development",
                  active: true,
                  assign: "Michael Jones",
                  description: "Improve the UI of the dashboard for better user experience.",
                  failed: true,
                  completed: false,
                  newTask: false,
                },
              ],
            },
            {
                "id" : 5,
              email: "sophia.wilson@example.com",
              password: "123",
              tasks: [
                {
                  taskTitle: "Create Marketing Plan",
                  date: "2025-01-22",
                  category: "Marketing",
                  active: true,
                  assign: "Sophia Wilson",
                  description: "Draft a marketing plan for the new product launch.",
                  failed: false,
                  completed: true,
                  newTask: false,
                },
              ],
            },
          ];
          

        const admin = [{
            "id":1,
            "email": "admin@example.com",
            "password": "123",
        }];
           
        
        
        

 export const setLocalStorage = () => {

    localStorage.setItem('employees', JSON.stringify(employees) );
    localStorage.setItem("admin" ,  JSON.stringify(admin) );


 }
     
 export const  getLocalStorage=() => {
    const employessData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse( localStorage.getItem('admin'));

console.log(employessData , adminData);



 }
      

