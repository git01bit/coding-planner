import styles from "./ProjectView.module.css";

function ProjectView({ project, setProject, setIsProjectCreated }) {
  function toggleStepStatus(stepId) {
    setProject((p) => ({
      ...p,
      steps: p.steps.map((step) =>
        step.stepId === stepId
          ? { ...step, isStepDone: !step.isStepDone }
          : step
      ),
    }));
  }

  function deleteProject() {
    setProject({
      projectTitle: "",
      steps: [
        { stepId: 1, stepTitle: "", stepDescription: "", isStepDone: false },
      ],
    });
    setIsProjectCreated(false);
  }

  return (
    <section>
      <h1>{project.projectTitle}</h1>

      <div className={styles.projectContainer}>
        <div className={styles.stepsContainer}>
          {project.steps.map((step) => (
            <div
              key={step.stepId}
              className={`${styles.step} ${step.isStepDone ? styles.done : ""}`}
            >
              <h2>{step.stepTitle}</h2>

              <p>{step.stepDescription}</p>

              <span
                className={styles.doneBtn}
                onClick={() => toggleStepStatus(step.stepId)}
              >
                {step.isStepDone ? "انجام شد" : "انجام نشده"}
              </span>
            </div>
          ))}
        </div>

        <button type="button" onClick={deleteProject}>
          حذف پروژه
        </button>
      </div>
    </section>
  );
}

export default ProjectView;
