import {
  fetchTournament,
  handleUpdateTournament,
} from "@/features/tournament/actions/tournament";
import TournamentForm from "@/features/tournament/ui/tournament-form/TournamentForm";
import styles from "./styles.module.css";

async function SingleTournamentPage({ params: { id } }) {
  const tournament = await fetchTournament(id);

  return (
    <div>
      <h1>Editar Torneo</h1>
      <hr />
      <div className={styles.content}>
        <TournamentForm data={tournament} action={handleUpdateTournament} />
      </div>
    </div>
  );
}

export default SingleTournamentPage;
