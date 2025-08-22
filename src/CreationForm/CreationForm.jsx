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

  return (
    <section>
      <input
        type="text"
        placeholder="نام پروژه"
        className={styles.projectNameInput}
      />

      <div className={styles.stepsContainer}>
        {project.steps.map((step) => (
          <div key={step.stepId} className={styles.stepContainer}>
            <input type="text" placeholder="عنوان فعالیت" />
            <textarea rows="4" placeholder="شرح فعالیت"></textarea>
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
