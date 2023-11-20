import styles from "./page.module.css";
import LoginPage from "./auth/login/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginPage />
    </main>
  );
}
