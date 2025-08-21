import styles from "./CreationForm.module.css";

function CreationForm() {
  return (
    <section>
      <input
        type="text"
        placeholder="نام پروژه"
        className={styles.projectNameInput}
      />

      <div className={styles.stepsContainer}>
        <div className={styles.stepContainer}>
          <input type="text" placeholder="عنوان فعالیت" />
          <textarea rows="4" placeholder="شرح فعالیت"></textarea>
        </div>

        <div className={styles.btnsContainer}>
          <button type="button">اضافه کردن فعالیت</button>
          <button type="button">ایجاد پروژه</button>
        </div>
      </div>
    </section>
  );
}

export default CreationForm;
