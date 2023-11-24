"use client";

import { handleCreateTournament } from "@/features/tournament/actions/tournament";
import styles from "./styles.module.css";
import TournamentForm from "@/features/tournament/ui/tournament-form/TournamentForm";

function AddTournamentPage() {
  return (
    <div className={styles.container}>
      <h1>Agregar Torneo</h1>
      <br />
      <div className={styles.content}>
        <TournamentForm action={handleCreateTournament} />
      </div>
    </div>
  );
}

export default AddTournamentPage;
