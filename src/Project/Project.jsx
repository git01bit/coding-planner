import styles from "./Project.module.css";

function Project() {
  return (
    <section className="deactive">
      <h1>عنوان پروژه</h1>

      <div className={styles.projectContainer}>
        <div className={styles.stepsContainer}>
          <div className={`${styles.step} ${styles.done}`}>
            <h2>مرحله اول</h2>

            <p>توضیحات مرحله اول</p>

            <span className={styles.doneBtn}>انجام شد</span>
          </div>

          <div className={styles.step}>
            <h2>مرحله دوم</h2>

            <p>توضیحات مرحله دوم</p>

            <span className={styles.doneBtn}>هنوز انجام نشده</span>
          </div>

          <div className={styles.step}>
            <h2>مرحله سوم</h2>

            <p>توضیحات مرحله سوم</p>

            <span className={styles.doneBtn}>هنوز انجام نشده</span>
          </div>
        </div>

        <button type="button">حذف پروژه</button>
      </div>
    </section>
  );
}

export default Project;
