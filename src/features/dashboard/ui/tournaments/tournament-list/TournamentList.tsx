import {
  fetchTournaments,
  handleDeleteProduct,
} from "@/features/dashboard/actions/tournament";
import { Tournament } from "@/features/dashboard/core/models/tournament";
import styles from "./styles.module.css";
import Link from "next/link";

async function TournamentList() {
  const tournaments: Tournament[] = await fetchTournaments();
  console.log("tournaments", tournaments);
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
          {(tournaments ?? []).map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.startDate?.toString().slice(4, 16)}</td>
              <td>${item.endDate?.toString().slice(4, 16)}</td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <td>{item.isCompleted ? "Si" : "No"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${item._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      Ver
                    </button>
                  </Link>
                  {/* <form action={handleDeleteProduct}>
                    <input type="hidden" name="id" value={item._id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Eliminar
                    </button>
                  </form> */}
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
