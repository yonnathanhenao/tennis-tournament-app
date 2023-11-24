"use client";

import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.modalLoading}>
      <div className={styles.modalLoadingContent}>
        <div className={styles.modalLoadingSpinner}></div>
      </div>
    </div>
  );
}

export default Loading;
