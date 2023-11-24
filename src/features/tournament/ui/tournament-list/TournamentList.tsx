"use client";

import Link from "next/link";

import { handleDeleteTournament } from "@/features/tournament/actions/tournament";
import {
  Button,
  ButtonColor,
  PrimaryButton,
} from "@/ui-shared/components/button/Button";
import styles from "./styles.module.css";

function TournamentList({ data }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Fecha de inicio</td>
            <td>Fecha finalización</td>
            <td>Categiría</td>
            <td>Ubicación</td>
            <td>Completado</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.startDate?.toString().slice(4, 16)}</td>
              <td>${item.endDate?.toString().slice(4, 16)}</td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <td>{item.isCompleted ? "Si" : "No"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/tournaments/${item._id}`}>
                    <PrimaryButton text="Ver" />
                  </Link>
                  <form action={handleDeleteTournament}>
                    <input type="hidden" name="id" value={item._id} />
                    <Button text="Eliminar" color={ButtonColor.red} />
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TournamentList;
