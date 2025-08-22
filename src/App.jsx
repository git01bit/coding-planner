import "./assets/fonts/vazir/vazir.css";
import "./App.css";

import { useState } from "react";

import CreationForm from "./CreationForm/CreationForm";
import Project from "./Project/Project";

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
      <Project />
    </>
  );
}

export default App;
