import "./assets/fonts/vazir/vazir.css";
import "./App.css";

import { useState, useEffect } from "react";

import CreationForm from "./CreationForm/CreationForm";
import ProjectView from "./ProjectView/ProjectView";

function App() {
  const [isProjectCreated, setIsProjectCreated] = useState(() => {
    return Boolean(JSON.parse(localStorage.getItem("isProjectCreated")));
  });

  const [project, setProject] = useState(() => {
    const savedProject = JSON.parse(localStorage.getItem("project"));

    if (savedProject && isProjectCreated) {
      return savedProject;
    } else {
      return {
        projectTitle: "",
        steps: [
          { stepId: 1, stepTitle: "", stepDescription: "", isStepDone: false },
        ],
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(project));
    localStorage.setItem("isProjectCreated", JSON.stringify(isProjectCreated));
  }, [project, isProjectCreated]);

  if (isProjectCreated) {
    return (
      <ProjectView
        project={project}
        setProject={setProject}
        setIsProjectCreated={setIsProjectCreated}
      />
    );
  } else {
    return (
      <CreationForm
        project={project}
        setProject={setProject}
        setIsProjectCreated={setIsProjectCreated}
      />
    );
  }
}

export default App;
