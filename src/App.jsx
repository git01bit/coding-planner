import "./assets/fonts/vazir/vazir.css";
import "./App.css";

import { useState } from "react";

import CreationForm from "./CreationForm/CreationForm";
import ProjectView from "./ProjectView/ProjectView";

function App() {
  const [project, setProject] = useState({
    projectTitle: "",
    steps: [
      { stepId: 1, stepTitle: "", stepDescription: "", isStepDone: false },
    ],
  });

  return (
    <>
      <CreationForm project={project} setProject={setProject} />
      <br />
      <ProjectView project={project} />
    </>
  );
}

export default App;
