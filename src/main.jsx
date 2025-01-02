import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Authcontext from "./context/authcontext.jsx";
import TaskContext from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <Authcontext>
      <TaskContext>

        <App />
        
      </TaskContext>
    </Authcontext>


  </StrictMode>
);
