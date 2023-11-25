"use client";
import { useFormState } from "react-dom";

import { PrimaryButton } from "@/ui-shared/components/button/Button";
import { Tournament } from "@/features/tournament/core/models/tournament.model";
import { IFormState } from "@/features/tournament/constants/types";
import inputStyles from "@/ui-shared/components/text-field/style.module.css";

type TournamentFormProps = {
  data?: Tournament | null;
  action: (
    _: IFormState | undefined,
    __: unknown
  ) => Promise<IFormState | undefined>;
};

function TournamentForm({ data, action }: TournamentFormProps) {
  const [_, formAction] = useFormState(action, { id: data?._id });

  return (
    <div>
      <form action={formAction}>
        <div className={inputStyles.formContainer}>
          <div className={inputStyles.formInput}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              defaultValue={data?.name ?? ""}
              required
            />
          </div>
          <div className={inputStyles.formInput}>
            <label htmlFor="startDate">Fecha de inicio</label>
            <input
              type="text"
              name="startDate"
              defaultValue={data?.startDate?.toString() ?? ""}
              required
            />
          </div>
          <div className={inputStyles.formInput}>
            <label htmlFor="endDate">Fecha fin</label>
            <input
              type="text"
              name="endDate"
              defaultValue={data?.endDate?.toString() ?? ""}
              required
            />
          </div>
          <div className={inputStyles.formInput}>
            <label htmlFor="location">Ubicación</label>
            <input
              type="text"
              name="location"
              defaultValue={data?.location ?? ""}
              required
            />
          </div>
          <div className={inputStyles.formInput}>
            <label htmlFor="category">Categoría</label>
            <select
              name="category"
              defaultValue={data?.category ?? ""}
              required
            >
              <option value="INDIVUDUAL_MALE">INDIVIDUAL MASCULINO</option>
              <option value="INDIVIDUAL_FEMALE">INDIVIDUAL FEMENINO</option>
              <option value="DOUBLES_MALE">DOBLES MASCULINO</option>
              <option value="DOUBLES_FEMALE">DOBLE FEMENINO</option>
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
