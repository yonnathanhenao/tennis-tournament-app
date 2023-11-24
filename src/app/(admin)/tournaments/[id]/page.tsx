import { Suspense } from "react";

import {
  fetchTournament,
  handleUpdateTournament,
} from "@/features/tournament/actions/tournament";
import TournamentForm from "@/features/tournament/ui/tournament-form/TournamentForm";
import Loading from "@/ui-shared/components/loading/Loading";

async function SingleTournamentPage({ params: { id } }) {
  const tournament = await fetchTournament(id);

  return (
    <div>
      <h1>Editar Torneo</h1>
      <hr />
      <Suspense fallback={<Loading />}>
        <TournamentForm data={tournament} action={handleUpdateTournament} />
      </Suspense>
    </div>
  );
}

export default SingleTournamentPage;
