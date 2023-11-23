import AddTournamentPage from "./dashboard/tournaments/add/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <AddTournamentPage />
    </main>
  );
}
