import "./assets/fonts/vazir/vazir.css";
import "./App.css";

import { useState, useEffect } from "react";

import CreationForm from "./CreationForm/CreationForm";
import ProjectView from "./ProjectView/ProjectView";

function App() {
  const [project, setProject] = useState({
    projectTitle: "",
    steps: [
      { stepId: 1, stepTitle: "", stepDescription: "", isStepDone: false },
    ],
  });

  const [isProjectCreated, setIsProjectCreated] = useState(false);

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
