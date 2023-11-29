import styles from "./styles.module.css";

function ContentLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default ContentLoader;
