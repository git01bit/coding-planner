import styles from "./ProjectView.module.css";

function ProjectView({ project }) {
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

              <span className={styles.doneBtn}>
                {step.isStepDone ? "انجام شد" : "انجام نشده"}
              </span>
            </div>
          ))}

          {/* <div className={`${styles.step} ${styles.done}`}>
            <h2>مرحله دوم</h2>

            <p>توضیحات مرحله دوم</p>

            <span className={styles.doneBtn}>هنوز انجام نشده</span>
          </div> */}
        </div>

        <button type="button">حذف پروژه</button>
      </div>
    </section>
  );
}

export default ProjectView;
