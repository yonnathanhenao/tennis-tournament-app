import { fetchTournaments } from "@/features/tournament/actions/tournament";
import TournamentList from "@/features/tournament/ui/tournament-list/TournamentList";
import styles from "./styles.module.css";
import Link from "next/link";
import { PrimaryButton } from "@/ui-shared/components/button/Button";

async function TournamentsPage() {
  const tournaments = await fetchTournaments();

  return (
    <div>
      <div className={styles.header}>
        <h1>Listado de torneos</h1>
        <Link href={"/tournaments/add"}>
          <PrimaryButton text="Crear torneo" />
        </Link>
      </div>
      <hr />
      <TournamentList data={tournaments ?? []} />
    </div>
  );
}

export default TournamentsPage;
