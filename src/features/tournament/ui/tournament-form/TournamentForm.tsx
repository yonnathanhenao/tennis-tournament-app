"use client";
import { useFormState } from "react-dom";

import { PrimaryButton } from "@/ui-shared/components/button/Button";
import styles from "./styles.module.css";
import { Tournament } from "@/features/tournament/core/models/tournament.model";
import { IFormState } from "@/features/tournament/constants/types";

type TournamentFormProps = {
  data?: Tournament | null;
  action: (
    _: IFormState | undefined,
    __: unknown
  ) => Promise<IFormState | undefined>;
};

function TournamentForm({ data, action }: TournamentFormProps) {
  const [state, formAction] = useFormState(action, { id: data?._id });
  const errors = state?.formError as Tournament;

  return (
    <div>
      <form action={formAction}>
        <div className={styles.formContainer}>
          <div className={styles.formInput}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" defaultValue={data?.name ?? ""} />
            {errors?.name && (
              <span className={styles.labelError}>Campo requerido</span>
            )}
          </div>
          <div className={styles.formInput}>
            <label htmlFor="startDate">Fecha de inicio</label>
            <input
              type="text"
              name="startDate"
              defaultValue={data?.startDate?.toString() ?? ""}
            />

            {errors?.startDate && (
              <span className={styles.labelError}>Campo requerido</span>
            )}
          </div>
          <div className={styles.formInput}>
            <label htmlFor="endDate">Fecha fin</label>
            <input
              type="text"
              name="endDate"
              defaultValue={data?.endDate?.toString() ?? ""}
            />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="location">Ubicación</label>
            <input
              type="text"
              name="location"
              defaultValue={data?.location ?? ""}
            />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="category">Categoría</label>
            <select name="category" defaultValue={data?.category ?? ""}>
              <option value="INDIVUDUAL_MALE">INDIVUDUAL_MALE</option>
              <option value="INDIVIDUAL_FEMALE">INDIVIDUAL_FEMALE</option>
              <option value="DOUBLES_MALE">DOUBLES_MALE</option>
              <option value="DOUBLES_FEMALE">DOUBLES_FEMALE</option>
            </select>
          </div>
        </div>
        <br />
        <PrimaryButton text="Guardar" onClick={() => {}} />
      </form>
    </div>
  );
}

export default TournamentForm;
