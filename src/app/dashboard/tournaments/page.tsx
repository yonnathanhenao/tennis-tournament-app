import TournamentList from "@/features/dashboard/ui/tournaments/tournament-list/TournamentList";
import styles from "./styles.module.css";

async function TournamentsPage() {
  return (
    <div className={styles.container}>
      <TournamentList />
    </div>
  );
}

export default TournamentsPage;
