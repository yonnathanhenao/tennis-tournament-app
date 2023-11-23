"use client";

import { saveTournament } from "@/features/dashboard/actions/tournament";
import styles from "./styles.module.css";
import { useFormState } from "react-dom";

function AddTournamentPage() {
  const [state, formAction] = useFormState(saveTournament, null);
  const invalidFields = state?.invalidFields;
  console.log("invalidFields", invalidFields);
  return (
    <div className={styles.container}>
      <h1>Agregar Torneo</h1>
      <hr />
      <form action={formAction}>
        <div className={styles.formContainer}>
          <div className={styles.formInput}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="startDate">startDate</label>
            <input type="text" name="startDate" />

            {invalidFields?.startDate && (
              <span className={styles.labelError}>Campo requerido</span>
            )}
          </div>
          <div className={styles.formInput}>
            <label htmlFor="endDate">endDate</label>
            <input type="text" name="endDate" />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="location">location</label>
            <input type="text" name="location" />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="category">category</label>
            <select name="category">
              <option value="INDIVUDUAL_MALE">INDIVUDUAL_MALE</option>
              <option value="INDIVIDUAL_FEMALE">INDIVIDUAL_FEMALE</option>
              <option value="DOUBLES_MALE">DOUBLES_MALE</option>
              <option value="DOUBLES_FEMALE">DOUBLES_FEMALE</option>
            </select>
          </div>
        </div>
        <hr />
        <div className={styles.formActions}>
          <button>Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default AddTournamentPage;
