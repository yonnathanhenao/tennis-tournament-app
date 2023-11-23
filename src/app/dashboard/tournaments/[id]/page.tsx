"use client";

import { saveTournament } from "@/features/dashboard/actions/tournament";
import styles from "./styles.module.css";
import { useFormState } from "react-dom";
import TournamentForm from "@/features/dashboard/ui/tournaments/tournament-form/TournamentForm";

function SingleTournamentPage() {
  const [state, formAction] = useFormState(saveTournament, null);
  const invalidFields = state?.invalidFields;
  console.log("invalidFields", invalidFields);
  return (
    <div className={styles.container}>
      <h1>Agregar Torneo</h1>
      <hr />
      <TournamentForm formAction={formAction} errors={invalidFields} />
    </div>
  );
}

export default SingleTournamentPage;
