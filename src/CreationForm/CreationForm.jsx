import { useState } from "react";
import styles from "./CreationForm.module.css";

function CreationForm({ project, setProject }) {
  const [id, setId] = useState(2);

  function addNewStep() {
    const newStep = {
      stepId: id,
      stepTitle: "",
      stepDescription: "",
      isStepDone: false,
    };

    setProject((p) => ({ ...p, steps: [...p.steps, newStep] }));

    setId((i) => i + 1);
  }

  function saveProjectTitle(e) {
    setProject((p) => ({ ...p, projectTitle: e.target.value }));
  }

  function saveProjectStepTitle(e, stepId) {
    setProject((p) => ({
      ...p,
      steps: p.steps.map((step) =>
        step.stepId === stepId ? { ...step, stepTitle: e.target.value } : step
      ),
    }));
  }

  function saveProjectStepDescription(e, stepId) {
    setProject((p) => ({
      ...p,
      steps: p.steps.map((step) =>
        step.stepId === stepId
          ? { ...step, stepDescription: e.target.value }
          : step
      ),
    }));
  }
  console.log(project);

  return (
    <section>
      <input
        type="text"
        placeholder="نام پروژه"
        className={styles.projectNameInput}
        value={project.projectTitle}
        onChange={(e) => saveProjectTitle(e)}
      />

      <div className={styles.stepsContainer}>
        {project.steps.map((step) => (
          <div key={step.stepId} className={styles.stepContainer}>
            <input
              type="text"
              placeholder="عنوان فعالیت"
              onChange={(e) => saveProjectStepTitle(e, step.stepId)}
            />
            <textarea
              rows="4"
              placeholder="شرح فعالیت"
              onChange={(e) => saveProjectStepDescription(e, step.stepId)}
            ></textarea>
          </div>
        ))}

        <div className={styles.btnsContainer}>
          <button type="button" onClick={addNewStep}>
            اضافه کردن فعالیت
          </button>
          <button type="button">ایجاد پروژه</button>
        </div>
      </div>
    </section>
  );
}

export default CreationForm;
